var teamsCollection = "teams"

exports.getAllTeams = function (req, res) {
    console.log("Find all Teams");

    var queryObject = { 
        "query" : {
            "match_all" : {}
        }
    };

    elasticSearchClient.search(indexNameTeams, typeNameTeams, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            console.log("Data %s", JSON.stringify(data.hits.hits, undefined, 2));

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
    console.log("get players " + team);

        var queryObject = { 
            "query" : {
                "match" : {
                    "name" : team
                }
            }
        };

        elasticSearchClient.search(indexNameTeams, typeNameTeams, queryObject)
        .on('data', function(data) {
            console.log(data);
            res.jsonp(data);
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
        "fields" : ["attacks.breakthroughPlayer", "attacks.breakthrough", "attacks.typeOfAttack"],
        "query":{
                "match": {
                    "attacks.team": team
                }
        },
        "facets" : {
            "breakthroughPlayer" : {
                "terms" : {
                    "fields" : ["attacks.breakthroughPlayer.untouched"]
                }
            },
            "breakthrough" : {
                "terms" : {
                    "fields" : ["attacks.breakthrough.untouched"]
                }
            },
            "typeOfAttack" : {
                "terms" : {
                    "fields" : ["attacks.typeOfAttack.untouched"]
                }
            },
       }
    };

    elasticSearchClient.search(indexNameElastic, typeNameElastic, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            console.log("Data %s", JSON.stringify(data, undefined, 2));
            // res.jsonp(data);
            iter++;
            json['breakthroughPlayers'] = data.facets.breakthroughPlayer.terms;
            json['breakthrough'] = data.facets.breakthrough.terms;
            json['typeOfAttack'] = data.facets.typeOfAttack.terms

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

    // var queryObject2 = {
    //     "fields" : ["attacks.breakthroughPlayer", "attacks.breakthrough"],
    //     "query":{
    //             "match": {
    //                 "attacks.team": "Strømsgodset"
    //             }
    //     },
    //     "facets" : {
    //         "breakthroughPlayer" : {
    //             "terms" : {
    //                 "field" : "attacks.breakthroughPlayer.untouched"
    //             }
    //         }
    //    }
    // };

    // elasticSearchClient.search(indexNameElastic, typeNameElastic, queryObject)
    //     .on('data', function(data) {
    //         console.log("Data %s", JSON.stringify(JSON.parse(data), undefined, 2));
    //         // res.jsonp(data);
    //         iter++;
    //         json['breakthroughPlayer'] = data;

    //         if(iter >= numQueries){
    //             callback(res, json);    
    //         }
    //     })
    //     .on('done', function(done){
    //         //always returns 0 right now
    //         console.log(done);
    //     })
    //     .on('error', function(error){
    //         console.log(error)
    //     })
    //     .exec();
}

function callback(res, json, numQueries){
    res.jsonp(json);
}

exports.getTeamStats = function(req, res){
    console.log(req.params.name);

    var team = req.params.name;

    var queryObject = {
        "fields" : ["attacks.breakthroughPlayer"],
        "query":{
                "match": {
                    "attacks.team": "Strømsgodset"
                }
        },
        "facets" : {
            "breakthroughPlayer" : {
                "terms" : {
                    "field" : "attacks.breakthroughPlayer.untouched"
                }
            }
       }
    };

    elasticSearchClient.search(indexNameElastic, typeNameElastic, queryObject)
        .on('data', function(data) {
            console.log("Data %s", JSON.stringify(JSON.parse(data), undefined, 2));
            res.jsonp(data);
        })
        .on('done', function(done){
            //always returns 0 right now
            console.log(done);
        })
        .on('error', function(error){
            console.log(error);
        })
        .exec();
}