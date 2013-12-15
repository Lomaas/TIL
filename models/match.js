var indexNameMatches = "matches";
var typeNameMatches = "match";

exports.getAllMatches = function(callback){
    var queryObject = { 
        "query" : {
            "match_all" : {}
        },
        "size" : 1000,
    };

    elasticSearchClient.search(indexNameMatches, typeNameMatches, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);    // extra seralization step
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
        },
    };

    elasticSearchClient.search(indexNameMatches, typeNameMatches, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            callback(err=false, data.hits.hits[0]);
        })
        .on('error', function(error){
	        winston.log('error', error);
            callback(err=true, undefined);
        })
        .exec();
};

exports.newMatch = function(match, callback){
    var commands = [];
    commands.push({ "index" : { "_index" :indexNameMatches, "_type" : typeNameMatches} });
    commands.push(match);

    elasticSearchClient.bulk(commands, {})
	    .on('done', function(done){
	        callback(OK_REQUEST);
	    })
	    .on('error', function(error){
	        winston.log('error', error);
	        callback(BAD_REQUEST);
	    })
	    .exec();
}

exports.newAttackForMatch = function(attack, matchId, callback){
    this.getMatch(matchId, function getMatchCallback(err, response){
        var match = response._source;
        match.attacks.push(attack);

        var commands = [];
        commands.push({ "update" : {"_index" :indexNameMatches, "_type" : typeNameMatches, "_id" : matchId, "_retry_on_conflict" : 3 }});
        commands.push({"doc" : {"attacks" : match.attacks }});

        elasticSearchClient.bulk(commands, {})
            .on('done', function(done){
                callback(OK_REQUEST);
            })
            .on('error', function(error){
                winston.log('error', error);
                callback(BAD_REQUEST);
            })
            .exec();
    });
}