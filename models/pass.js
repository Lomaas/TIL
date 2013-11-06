var indexNamePasses = "passes";
var typeNamePasses = "pass"

exports.getPassStatsFromPlayer = function(userId, callback){
    var queryObject = {
        "query": {
            "bool": {
                "must": [
                    {"match": {"fromPlayer": userId}}                  
                ],
                "must_not": [
                ],
                "should": []
            }
        },
         "facets" : {
            "fromPos" : {
                "terms" : {
                    "field" : "fromPos",
                    "size" : 30
                }
            },
            "toPos" : {
                "terms" : {
                    "field" : "toPos",
                    "size" : 30
                }
            },
            "action" : {
                "terms" : {
                    "field" : "action"
                }
            },
            "toPlayer" : {
                "terms" : {
                    "field" : "toPlayer",
                    "size" : 30
                }
            },
            "typeOfPasses" : {
                "terms" : {
                    "field" : "action"
                }
            }
        }
    };
    
    elasticSearchClient.search(indexNamePasses, typeNamePasses, queryObject)
        .on('data', function(data) {
            var dataFromPlayer = JSON.parse(data);

            getPassStatsToPlayer(userId, function(err, response){
                var dataToPlayer = response;

                response = {
                    "facetsFromPlayer" : dataFromPlayer.facets,
                    "facetsToPlayer" : dataToPlayer.facets
                }
                callback(response);
            })

        })
        .on('done', function(done){
            //always returns 0 right now
            console.log("Done ", done);
        })
        .on('error', function(error){
            console.log("Error ", error);
        })
        .exec();
};

var getPassStatsToPlayer = function(userId, callback){
    var queryObject = {
        "query": {
            "bool": {
                "must": [
                    {"match": {"toPlayer": userId}}
                ],
                "must_not": [
                ],
                "should": []
            }
        },
         "facets" : {
            "fromPos" : {
                "terms" : {
                    "field" : "fromPos",
                    "size" : 30
                }
            },
            "toPos" : {
                "terms" : {
                    "field" : "toPos",
                    "size" : 30
                }
            },
            "action" : {
                "terms" : {
                    "field" : "action"
                }
            },
            "fromPlayer" : {
                "terms" : {
                    "field" : "fromPlayer",
                    "size" : 30
                }
            },
            "typeOfPasses" : {
                "terms" : {
                    "field" : "action"
                }
            }
        }
    };

    elasticSearchClient.search(indexNamePasses, typeNamePasses, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            response = {
                "facets" : data.facets
            }
            callback(err = false, response);
        })
        .on('error', function(error){
            console.log("Error ", error);
            callback(err = false, undefined);
        })
        .exec();
};

exports.newPass = function(pass, callback){
    var commands = []
    commands.push({ "index" : { "_index" :indexNamePasses, "_type" : typeNamePasses} });
    commands.push(pass);

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
};


exports.passesIntoFinalThird = function(userId, callback){
    var queryObject = {
        "query": {
            "bool": {
                "must": [
                    {
                        "match": {
                            "fromPlayer": userId
                        }
                    },
                    {
                        "range" : {
                            "toPos" : {
                                "gte" : 17,
                                "lte" : 26
                            }
                        }
                    },
                    {
                        "range" : {
                            "fromPos" : {
                                "gte" : 1,
                                "lte" : 16
                            }
                        }
                    }
                ],
                "must_not": [
                ],
                "should": []
            }
        }
    };

    elasticSearchClient.search(indexNamePasses, typeNamePasses, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);

            console.log("Data %s", JSON.stringify(data, undefined, 2));
            callback(err = false, data.hits);
        })
        .on('error', function(error){
            console.log("Error ", error);
            callback(err = false, undefined);
        })
        .exec();
};

exports.passesIntoFinalThirdTeam = function(rangeStart, rangeEnd, callback){
    console.log(rangeStart);
    console.log(rangeEnd);

    var queryObject = {
        "query": {
            "bool": {
                "must": [
                    {
                         "range" : {
                            "fromPlayer" : {
                                "gte" : rangeStart,
                                "lte" : rangeEnd
                            }
                        }
                    },
                    {
                        "range" : {
                            "toPos" : {
                                "gte" : 17,
                                "lte" : 26
                            }
                        }
                    },
                    {
                        "range" : {
                            "fromPos" : {
                                "gte" : 1,
                                "lte" : 16
                            }
                        }
                    }
                ],
                "must_not": [
                ],
                "should": []
            }
        },
        size: 2000,
        "facets" : {
            "fromPlayer" : {
                "terms" : {
                    "field" : "fromPlayer"
                }
            }
        }
    };

    elasticSearchClient.search(indexNamePasses, typeNamePasses, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);

            console.log("Data %s", JSON.stringify(data, undefined, 2));
            response = {};
            response['facets'] = data.facets;
            response['hits'] = data.hits;
            callback(err = false, response);
        })
        .on('error', function(error){
            console.log("Error ", error);
            callback(err = false, undefined);
        })
        .exec();
};

exports.passesGoingForwardTeam = function(rangeStart, rangeEnd, callback){
    console.log(rangeStart);
    console.log(rangeEnd);

    var queryObject = {
        "query": {
            "bool": {
                "must": [
                    {
                         "range" : {
                            "fromPlayer" : {
                                "gte" : rangeStart,
                                "lte" : rangeEnd
                            }
                        }
                    },
                    {
                        "range" : {
                            "toPos" : [
                                {
                                    "gte" : 17,
                                    "lte" : 20
                                },
                                {
                                    "gte" : 13,
                                    "lte" : 16
                                }
                            ]
                        }
                    },
                    {
                        "range" : {
                            "fromPos" : {
                                "gte" : 21,
                                "lte" : 26
                            }
                        }
                    }
                ],
                "must_not": [
                ],
                "should": []
            }
        },
        size: 2000,
        "facets" : {
            "fromPlayer" : {
                "terms" : {
                    "field" : "fromPlayer"
                }
            }
        }
    };

    elasticSearchClient.search(indexNamePasses, typeNamePasses, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);

            console.log("Data %s", JSON.stringify(data, undefined, 2));
            response = {};
            response['facets'] = data.facets;
            response['hits'] = data.hits;
            callback(err = false, response);
        })
        .on('error', function(error){
            console.log("Error ", error);
            callback(err = false, undefined);
        })
        .exec();
};