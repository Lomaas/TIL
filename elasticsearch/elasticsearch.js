var serverOptions = {
    host: 'localhost',
    port: 9200,
    secure: false
};

var indexName = "matches";
var typeName = "match";

ElasticSearchClient = require('elasticsearchclient');

var elasticSearchClient = new ElasticSearchClient(serverOptions);

var commands = [];
commands.push({ "index" : { "_index" :indexName, "_type" : typeName} });

commands.push({
        	"matchId": 1,
            "hometeam" : "Tromsø IL",
            "awayteam" : "Rosenborg BK",
            "match": "Tromsø IL - Rosenborg BK",
            "score" : "1-0",
            "attacks": [
                {
                    "time": 24,
                    "touch" : 7,
                    "team" : "Tromsø IL",
                    "breakthrough" : "Pasning Mellomrom",
                    "breakthroughPlayer" : "Morten Moldskred",
                    "typeOfAttack" : "Etablert spill",
                    "attackStart" : {
                        "pos" : 11,
                        "type" : "Gjenvinning",
                        "player" : 402,
                    },
                    "passes": [
                        {
                            "fromPlayer": 402,
                            "toPlayer": 406,
                            "fromPos": 11,
                            "toPos": 14,
                            "action": "PASS"
                        },
                        {
                            "fromPlayer": 406,
                            "toPlayer": 394,
                            "fromPos": 14,
                            "toPos": 16,
                            "action": "KEYPASS"
                        },
                         {
                            "fromPlayer": 394,
                            "toPlayer": 413,
                            "fromPos": 16,
                            "toPos": 17,
                            "action": "PASS"
                        }
                    ],
                    "finish" : {
                        "player": 413,
                        "pos": 17,
                        "action": "SHOTGOAL"
                    }
                },
                {
                    "time": 23,
                    "touch" : 5,
                    "team" : "Tromsø IL",
                    "breakthrough" : "None",
                    "breakthroughPlayer" : "None",
                    "typeOfAttack" : "Gjenvinning kort angrep",
                    "attackStart" : {
                        "pos" : 11,
                        "type" : "Gjenvinning",
                        "player" : 402,

                    },
                    "passes": [
                        {
                            "fromPlayer": 402,
                            "toPlayer": 407,
                            "fromPos": 11,
                            "toPos": 18,
                            "action": "PASS"
                        },
                        {
                            "fromPlayer": 407,
                            "toPlayer": 413,
                            "fromPos": 18,
                            "toPos": 17,
                            "action": "PASS"
                        }
                    ],
                    "finish" : {
                        "player": 413,
                        "pos": 17,
                        "action": "SHOTTARGET"
                    }
                },
                {
                    "time": 44,
                    "touch" : 10,
                    "team" : "Tromsø IL",
                    "breakthrough" : "1vs1 Mellomrom",
                    "breakthroughPlayer" : "Josh Pritchard",
                    "typeOfAttack" : "Gjenvinning kort angrep",
                    "attackStart" : {
                        "pos" : 1,
                        "type" : "Gjenvinning",
                        "player" : 402,
                    },
                    "passes": [
                        {
                            "fromPlayer": 402,
                            "toPlayer": 407,
                            "fromPos": 4,
                            "toPos": 8,
                            "action": "PASS"
                        },
                        {
                            "fromPlayer": 407, 
                            "toPlayer": 397,
                            "fromPos": 11,
                            "toPos": 15,
                            "action": "KEYPASS"
                        },
                        {
                            "fromPlayer": 397,
                            "toPlayer": 413,
                            "fromPos": 18,
                            "toPos": 17,
                            "action": "PASS"
                        }
                    ],
                    "finish" : {
                        "player": 397,
                        "pos": 17,
                        "action": "SHOTMISS"
                    }
                },
                  {
                    "time": 60,
                    "touch" : 15,
                    "team" : "Tromsø IL",
                    "breakthrough" : "None",
                    "breakthroughPlayer" : "None",
                    "typeOfAttack" : "Gjenvinning langt angrep",
                    "attackStart" : {
                        "pos" : 5,
                        "type" : "Gjenvinning",
                        "player" : 406,
                    },
                    "passes": [
                        {
                            "fromPlayer": 406,
                            "toPlayer": 403,
                            "fromPos": 5,
                            "toPos": 7,
                            "action": "PASS"
                        },
                        {
                            "fromPlayer": 403,
                            "toPlayer": 394,
                            "fromPos": 7,
                            "toPos": 10,
                            "action": "PASS"
                        },
                        {
                            "fromPlayer": 394,
                            "toPlayer": 402,
                            "fromPos": 13,
                            "toPos": 14,
                            "action": "PASS"
                        }
                    ],
                    "finish" : {
                        "player": 402,
                        "pos": 14,
                        "action": "SHOTMISS"
                    }
                }
            ]
        });

elasticSearchClient.bulk(commands, {})
        .on('data', function(data) {
            console.log(data);
        })
        .on('done', function(done){
            console.log(done);
        })
        .on('error', function(error){
            console.log(error);

        })
        .exec();



//     var queryObject = {        
//         "query" : {
//             "match_all" : {
//             }
//         }
//     };

// elasticSearchClient.search(indexName, typeName, queryObject)
//     .on('data', function(data) {
//         console.log("Data %s", JSON.stringify(JSON.parse(data), undefined, 2));
//     })
//     .on('done', function(done){
//         //always returns 0 right now
//         console.log(done);
//     })
//     .on('error', function(error){
//         data = JSON.parse(error);
//         console.log("Data %s", JSON.stringify(data, undefined, 2));
//     })
//     .exec()

