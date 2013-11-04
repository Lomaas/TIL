var passModel = require('./../models/pass');
var playerModel = require('./../models/player');
var attackModel = require('./../models/attack');

exports.getStats = function (req, res){
    console.log("get stats " + req.params.id.toString());

    playerModel.getPlayer(req.params.id, function(currentPlayer){
        passModel.getPassStatsFromPlayer(parseInt(req.params.id), function(response){
            console.log("Data %s", JSON.stringify(response, undefined, 2));

            var i;
            var playerArray = [];
            var playersDictFromPlayer = {};
            var playersDictToPlayer = {};

            for(i=0; i< response.facetsFromPlayer.toPlayer.terms.length; i++){
                playerArray.push(response.facetsFromPlayer.toPlayer.terms[i].term);
                playersDictFromPlayer[response.facetsFromPlayer.toPlayer.terms[i].term] = {
                    "count" : response.facetsFromPlayer.toPlayer.terms[i].count,
                    "term" : response.facetsFromPlayer.toPlayer.terms[i].term
                };
            };

            for(i=0; i< response.facetsToPlayer.fromPlayer.terms.length; i++){
                playerArray.push(response.facetsToPlayer.fromPlayer.terms[i].term);
                playersDictToPlayer[response.facetsToPlayer.fromPlayer.terms[i].term] = {
                    "count" : response.facetsToPlayer.fromPlayer.terms[i].count,
                    "term" : response.facetsToPlayer.fromPlayer.terms[i].term
                };
            }

            playerModel.getSomePlayers(playerArray, function(players){
                playerArray = [];

                for(i=0; i< players.length; i++){
                    var player = players[i]._source;

                    var countToPlayer = 0;
                    var countFromPlayer = 0;

                    if(playersDictFromPlayer[player.player_id] != undefined)
                        countToPlayer = playersDictFromPlayer[player.player_id].count;

                    if(playersDictToPlayer[player.player_id] != undefined)
                        countFromPlayer = playersDictToPlayer[player.player_id].count;

                    playerArray.push({
                        "countToPlayer" : countToPlayer,
                        "countFromPlayer" : countFromPlayer,
                        "name" : player.name,
                        "term" : player.player_id
                    });
                }
                response['facets'] = playerArray;
                response['currentPlayer'] = currentPlayer;
                console.log("Data %s", JSON.stringify(response, undefined, 2));

                res.jsonp(response);
            });
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

exports.getPassesIntoFinalThird = function(req, res){
    passModel.passesIntoFinalThird(req.params.id, function callbackPassesIntoFinalThird(err, response){
        if(err) res.send(400);

        res.jsonp(response);
    });
}

exports.newPlayer = function(req, res){
    console.log("New player %j", req.body);
    var player = req.body;

    playerModel.newPlayer(req.body, function handleNewPlayer(response){
        switch(response){
            case OK_REQUEST:
                 res.send(201, {"msg" : "success"});
                break;
            case BAD_REQUEST:
                res.send(400, {"msg" : "someting wrong happend during saving"});
                break;
        }
    });
};


exports.getBreakthroughsForPlayer = function(req, res){
    attackModel.getBreakthroughsForPlayer(req.params.name, function callbackGetBreakthPlayer(err, response){
        if(err) res.send(400);

        res.jsonp(response);
    });
};