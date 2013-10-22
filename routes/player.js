var passModel = require('./../models/pass');
var teamModel = require('./../models/team');
var playerModel = require('./../models/player');

exports.getStats = function (req, res){
    console.log("get stats " + req.params.id.toString());

    passModel.getPassStats(parseInt(req.params.id), function(response){

        var i;
        var playerArray = [];
        var playersDict = {};

        for(i=0; i< response.facets.toPlayer.terms.length; i++){
            playerArray.push(response.facets.toPlayer.terms[i].term);
            playersDict[response.facets.toPlayer.terms[i].term] = {
                "count" : response.facets.toPlayer.terms[i].count,
                "term" : response.facets.toPlayer.terms[i].term
            };
        }
        playerModel.getSomePlayers(playerArray, function(players){
            playerArray = [];

            for(i=0; i< players.length; i++){
                var player = players[i]._source;

                playerArray.push({
                    "count" : playersDict[player.player_id].count,
                    "name" : player.name,
                    "term" : player.player_id
                });
            }
            response.facets.toPlayer = playerArray;
            console.log("Data %s", JSON.stringify(response, undefined, 2));

            res.jsonp(response);
        });
    });                  
};

exports.getPassesForPlayer = function(req, res){
    var playerId = parseInt(req.params.id);

    var queryObject = { 
        "query" : {
            "match" : {
                "fromPlayer" : playerId
            }
        }
    };

    elasticSearchClient.search(indexNameElastic, typeNameElastic, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            console.log("Data %s", JSON.stringify(data.hits.hits, undefined, 2));

            res.jsonp(data);
        })
        .on('done', function(done){
            console.log(done);
        })
        .on('error', function(error){
            console.log(error)
        })
        .exec()
}


exports.getPlayersForTeam = function(req, res){
    var team = req.params.teamname;
    console.log("GET PLAYERS FOR TEAM-----" + team);

    var queryObject = {
        "query" : {
            "match" : {
                "team" : team
            }
        },
        "size" : 30
    };

    elasticSearchClient.search(indexNamePlayer, typeNamePlayer, queryObject)
    .on('data', function(data) {
        data = JSON.parse(data);
        // console.log("Data %s", JSON.stringify(data, undefined, 2));

        res.jsonp(data.hits.hits);
    })
    .on('done', function(done){
        console.log(done);
    })
    .on('error', function(error){
        console.log(error)
    })
    .exec();
}

exports.getAllPlayers =  function(req, res){
    console.log("Get All Players for every team");

    var queryObject = {        
        "query" : {
            "match_all" : {
            }
        }
    };

    elasticSearchClient.search(indexNamePlayer, typeNamePlayer, queryObject)
        .on('data', function(data) {
            // console.log("Data %s", JSON.stringify(JSON.parse(data), undefined, 2));
            res.jsonp(data);
        })
        .on('done', function(done){
            //always returns 0 right now
            console.log(done);
        })
        .on('error', function(error){
            data = JSON.parse(error);
            console.log("Data %s", JSON.stringify(data, undefined, 2));
        })
        .exec()
};


exports.newPlayer = function(req, res){
    console.log("New player");
    var player = req.body;

    console.log(JSON.stringify(req.body));

    var commands = [];
    commands.push({ "index" : { "_index" :indexNamePlayer, "_type" : typeNamePlayer} });
    commands.push(player);

    elasticSearchClient.bulk(commands, {})
            .on('data', function(data) {
                console.log(data);
            })
            .on('done', function(done){
                console.log(done);
                res.send(201, {"msg" : "success"});
            })
            .on('error', function(error){
                console.log(error);
                res.send(400, {"msg" : "someting wrong happend during saving"});
            })
            .exec();
};

