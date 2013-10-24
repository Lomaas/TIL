var indexNameAttacks = "attacks";
var typeNameAttacks = "attack";

exports.newAttack = function(attack, callback){
    var commands = [];
    commands.push({ "index" : { "_index" :indexNameAttacks, "_type" : typeNameAttacks} });
    commands.push(attack);

    elasticSearchClient.bulk(commands, {})
        .on('data', function(data) {
            console.log(data);
        })
        .on('done', function(done){
            console.log(done);
            callback(OK_REQUEST);
        })
        .on('error', function(error){
            console.log(error);
            callback(BAD_REQUEST);
        })
        .exec();
}


exports.getAttacksSummaryStatsForTeam = function(team, callback){
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
                    "field" : "passes.fromPlayer",
                    "size" : 30
                }
            },
            "toPlayer" : {
                "nested": "passes",
                "terms" : {
                    "field" : "passes.toPlayer"

            },
            "breakthroughPlayer" : {
                "terms" : {
                    "fields" : ["breakthroughPlayer.untouched"],
                    "size" : 30
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
                    "fields" : ["passes.fromPos", "passes.toPos"],
                    "size" : 30
                }
            },
            "attackStart" : {
                "terms" : {
                    "field" : "attackStart.pos",
                    "size" : 30
                }
            },
            "attackFinish" : {
                "terms" : {
                    "field" : "finish.pos",
                    "size" : 30
                }
            }
        }
    };

    elasticSearchClient.search(indexNameAttacks, typeNameAttacks, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            console.log("Data %s", JSON.stringify(data, undefined, 2));
            json['breakthroughPlayers'] = data.facets.breakthroughPlayer.terms;
            json['breakthrough'] = data.facets.breakthrough.terms;
            json['typeOfAttack'] = data.facets.typeOfAttack.terms;
            json['ballReceived'] = data.facets.fromPlayer.terms;

            json['attackStart'] = data.facets.attackStart = {
                "zones" : data.facets.attackStart.terms,
                "total" : data.facets.attackStart.total
            };
            json['zones'] = {
                "zones" : data.facets.zones.terms,
                "total" : data.facets.zones.total
            };
            json['attackFinish'] = {
                "zones" : data.facets.attackFinish.terms,
                "total" : data.facets.attackFinish.total
            };

            callback(err = false, json);
        })
        .on('error', function(error){
            console.log(error)
            callback(err = true, undefined);
        })
        .exec();
}

