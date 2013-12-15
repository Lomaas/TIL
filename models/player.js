var indexNamePlayer = "players"
var typeNamePlayer = "player";


exports.newPlayer = function(player, callback){
    var commands = [];
    commands.push({ "index" : { "_index" :indexNamePlayer, "_type" : typeNamePlayer} });
    commands.push(player);

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

exports.getPlayer = function(player_id, callback){
    console.log("GetPlayer");

    var queryObject = { 
        "query" : {
            "match" : {
                "player_id" : player_id
            }
        }
    };

    elasticSearchClient.search(indexNamePlayer, typeNamePlayer, queryObject)
	    .on('data', function(data) {
	        data = JSON.parse(data);
	        callback(data.hits.hits[0]._source);
	    })
	    .on('done', function(done){
	        console.log(done);
	    })
	    .on('error', function(error){
	        winston.log('error', error);
	    })
	    .exec();
};

exports.getSomePlayers = function(players, callback){
	var queryObject = {
		 "filter" : {
            "terms" : { "player_id" : players}
        }
	}

    elasticSearchClient.search(indexNamePlayer, typeNamePlayer, queryObject)
	    .on('data', function(data) {
	        data = JSON.parse(data);
	        callback(data.hits.hits);
	    })
	    .on('done', function(done){
	        console.log(done);
	    })
	    .on('error', function(error){
	        winston.log('error', error);
	    })
	    .exec();
}

exports.getPlayersForTeam = function(team, callback){
    var queryObject = { 
        "query" : {
            "match" : {
                "team" : team
            }
        },
        "sort" : [
            { "player_id" : "asc" }
        ],
        "size" : 40
    };

    elasticSearchClient.search(indexNamePlayer, typeNamePlayer, queryObject)
	    .on('data', function(data) {
	        data = JSON.parse(data);
	        callback(err = false, data.hits.hits);
	    })
	    .on('error', function(error){
	        winston.log('error', error);
	        callback(err = true, undefined);
	    })
	    .exec();
};


