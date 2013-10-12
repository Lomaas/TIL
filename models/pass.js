var indexNamePasses = "passes";
var typeNamePasses = "pass"

exports.getPassStats = function(userId){
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
            }
        }
    };
    
    elasticSearchClient.search(indexNamePasses, typeNamePasses, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            console.log("Data: %s", JSON.stringify(data, undefined, 2));
            response = {
                "facets" : data.facets
            }
            return response;
        })
        .on('done', function(done){
            //always returns 0 right now
            console.log("Done ", done);
        })
        .on('error', function(error){
            console.log("Error ", error);
        })
        .exec();
}