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
    console.log("GET PLAYER FOR TEAM-----");

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
	        console.log("getPlayer %s", JSON.stringify(data, undefined, 2));
	        callback(data.hits.hits[0]._source);
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

exports.getSomePlayers = function(players, callback){
	var queryObject = {
		 "filter" : {
            "terms" : { "player_id" : players}
        }
	}

    elasticSearchClient.search(indexNamePlayer, typeNamePlayer, queryObject)
	    .on('data', function(data) {
	        data = JSON.parse(data);
	        console.log("getSomePlayers %s", JSON.stringify(data, undefined, 2));
	        callback(data.hits.hits);
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

exports.getPlayersForTeam = function(team, callback){
    var queryObject = { 
        "query" : {
            "match" : {
                "team" : team
            }
        },
        "size" : 40
    };

    elasticSearchClient.search(indexNamePlayer, typeNamePlayer, queryObject)
	    .on('data', function(data) {
	        data = JSON.parse(data);
	        console.log("Data %s", JSON.stringify(data, undefined, 2));
	        callback(err = false, data.hits.hits);
	    })
	    .on('error', function(error){
	        console.log(error)
	        callback(err = true, undefined);
	    })
	    .exec();
};


