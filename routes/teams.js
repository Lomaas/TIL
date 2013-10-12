var teamsCollection = "teams"

exports.getAllTeams = function (req, res) {
    console.log("Find all Teams");

    var queryObject = { 
        "query" : {
            "match_all" : {},
        },
        "size" : 16
    };

    elasticSearchClient.search(indexNameTeams, typeNameTeams, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            // console.log("Data %s", JSON.stringify(data, undefined, 2));

            res.jsonp(data.hits.hits);
        })
        .on('done', function(done){
            //always returns 0 right now
            console.log(done);
        })
        .on('error', function(error){
            console.log(error)
        })
        .exec()
};

exports.postNewTeam = function(req, res){
    console.log("New team");
    console.log(JSON.stringify(req.body));

    var commands = [];
    commands.push({ "index" : { "_index" :indexNameTeams, "_type" : typeNameTeams} });
    commands.push(req.body);

    elasticSearchClient.bulk(commands, {})
            .on('data', function(data) {
                console.log(data);
                res.send(201, {"msg" : "success"});
            })
            .on('done', function(done){
                console.log(done);
                res.send(201, {"msg" : "succss"});
            })
            .on('error', function(error){
                console.log(error);
                res.send(400, {"msg" : "someting wrong happend during saving"});
            })
            .exec();
};

exports.getPlayers = function(req, res){
    var team = req.params.name;
    console.log("GET PLAYERS FOR TEAM-----");

    var queryObject = { 
        "query" : {
            "match" : {
                "name" : team
            }
        }
    };

    elasticSearchClient.search(indexNameTeams, typeNameTeams, queryObject)
    .on('data', function(data) {
        data = JSON.parse(data);
        //console.log("Data %s", JSON.stringify(data, undefined, 2));

        res.jsonp(data.hits.hits[0]._source);
    })
    .on('done', function(done){
        //always returns 0 right now
        console.log(done);
    })
    .on('error', function(error){
        console.log(error)
    })
    .exec();
};

exports.getTeam = function(req, res){
    console.log(req.params.name);
    var team = req.params.name;
    var iter = 0;
    var numQueries = 1;
    var json = {};

    var queryObject = {        
        "query" : {
            "match" : {
                "team" : team
            }
        },
        "facets" : {
            "fromPlayer" : {
                "nested": "passes",
                "terms" : {
                    "field" : "passes.fromPlayer"
                },
            },
            "toPlayer" : {
                "nested": "passes",
                "terms" : {
                    "field" : "passes.toPlayer"
                },
            },
            "breakthroughPlayer" : {
                "terms" : {
                    "fields" : ["breakthroughPlayer.untouched"]
                }
            },
            "breakthrough" : {
                "terms" : {
                    "field" : "breakthrough.untouched"
                }
            },
            "typeOfAttack" : {
                "terms" : {
                    "field" : "typeOfAttack.untouched"
                }
            },
            "zones" : {
                "nested": "passes",
                "terms" : {
                    "fields" : ["passes.fromPos", "passes.toPos"]
                },
            },
        }
    };

    elasticSearchClient.search(indexNameAttacks, typeNameAttacks, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            console.log("Data %s", JSON.stringify(data, undefined, 2));
            iter++;
            json['breakthroughPlayers'] = data.facets.breakthroughPlayer.terms;

            json['breakthrough'] = data.facets.breakthrough.terms;
            json['typeOfAttack'] = data.facets.typeOfAttack.terms;
            json['ballReceived'] = data.facets.fromPlayer.terms;
            json['zones'] = {
                "zones" : data.facets.zones.terms,
                "total" : data.facets.zones.total
            };

            // WHo combines with the key players. Which passes is the key passes

            if(iter >= numQueries){
                callback(res, json);    
            }
        })
        .on('done', function(done){
            //always returns 0 right now
            console.log(done);
        })
        .on('error', function(error){
            console.log(error)
        })
        .exec();
}

function callback(res, json, numQueries){
    res.jsonp(json);
}



//
    // var queryObject = {        
    //     "query" : {
    //         "nested" : {
    //             "path" : "attacks",
    //             "query" : {
    //                 "match" : {
    //                     "attacks.team" : team
    //                 }
    //             }
    //         }
    //     },
    //     "facets" : {
    //         "fromPlayer" : {
    //             "nested": "attacks.passes",
    //             "terms" : {
    //                 "field" : "attacks.passes.fromPlayer"
    //             },
    //         },
    //         "toPlayer" : {
    //             "nested": "attacks.passes",
    //             "terms" : {
    //                 "field" : "attacks.passes.toPlayer"
    //             },
    //         },
    //         "breakthroughPlayer" : {
    //             "nested": "attacks",
    //             "terms" : {
    //                 "fields" : ["attacks.breakthroughPlayer.untouched"]
    //             }
    //         },
    //         "breakthrough" : {
    //             "nested": "attacks",
    //             "terms" : {
    //                 "field" : "attacks.breakthrough.untouched"
    //             }
    //         },
    //         "typeOfAttack" : {
    //             "nested": "attacks",
    //             "terms" : {
    //                 "field" : "attacks.typeOfAttack.untouched"
    //             }
    //         },
    //         "zones" : {
    //             "nested": "attacks.passes",
    //             "terms" : {
    //                 "fields" : ["attacks.passes.fromPos", "attacks.passes.toPos"]
    //             }
    //         },
    //     }
    // };
