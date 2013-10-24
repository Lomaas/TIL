var indexNameMatches = "matches";
var typeNameMatches = "match";

exports.getAllMatches = function(callback){
    var queryObject = { 
        "query" : {
            "match_all" : {}
        }
    };

    elasticSearchClient.search(indexNameMatches, typeNameMatches, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            console.log("Data %s", JSON.stringify(data.hits.hits, undefined, 2));
 			callback(data.hits.hits);
        })
        .on('done', function(done){
            console.log(done);
        })
        .on('error', function(error){
	        winston.log('error', error);
        })
        .exec()
};

exports.getMatch = function(mId, callback){
    var queryObject = {
        "query" : {
            "match" : {
                "_id" : mId
            }
        }
    };

    elasticSearchClient.search(indexNameMatches, typeNameMatches, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            console.log("Data %s", JSON.stringify(data.hits.hits, undefined, 2));
            callback(err=false, data.hits.hits[0]);
        })
        .on('error', function(error){
	        winston.log('error', error);
        })
        .exec();
};

exports.newMatch = function(match, callback){
    var commands = [];
    commands.push({ "index" : { "_index" :indexNameMatches, "_type" : typeNameMatches} });
    commands.push(match);

    elasticSearchClient.bulk(commands, {})
	    .on('data', function(data) {
	        console.log(data);
	    })
	    .on('done', function(done){
	        console.log(done);
	        callback(OK_REQUEST);
	    })
	    .on('error', function(error){
	        winston.log('error', error);
	        callback(BAD_REQUEST);
	    })
	    .exec();
}