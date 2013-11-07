var teamModel = require('./../models/team');
var attackModel = require('./../models/attack');
var playerModel = require('./../models/player');
var passModel = require('./../models/pass');

exports.getTeams = function (req, res) {
    console.log("Find all Teams");

    teamModel.getTeams(function(err, response){
        if(err) res.send(400);

        res.jsonp(response);
    });
};

exports.postNewTeam = function(req, res){
    console.log("New team");
    console.log(JSON.stringify(req.body));

    teamModel.postNewTeam(req.body, function(response){
        switch(response){
            case OK_REQUEST:
                res.send(201, {"msg" : "success"});
            case BAD_REQUEST:
                res.send(400, {"msg" : "bad data"});
            default:
                res.send(404);
        }
    });
};

exports.getPlayers = function(req, res){
    console.log("GET PLAYERS FOR TEAM-----" + req.params.name);

    playerModel.getPlayersForTeam(req.params.name, function callbackPlayersForTeam(err, response){
        if(err) res.send(400);

        res.jsonp(response);
    });
};

exports.involvementPerMatch = function(req, res){
    console.log("involvementPerMatch");

    attackModel.getInvolvementsPerMatchTeam(req.params.teamname, function callbackGetInvolvementsPerMatch(err, response){
        if(err)  res.send(400);

        res.jsonp(response);
    });
};

exports.getStats = function(req, res){
    attackModel.getAttacksSummaryStatsForTeam(req.params.name, function(err, response){
        if(err)    res.send(400);

        res.jsonp(response);
    });
};

exports.getPassesIntoFinalThird = function(req, res){
    playerModel.getPlayersForTeam(req.params.name, function(err, players){
        if(err) res.send(400);

        passModel.passesIntoFinalThirdTeam(players[0]._source.player_id, players[players.length - 1]._source.player_id, function callbackPassesIntoFinalThird(err, response){
            if(err) res.send(400);
            var json = {};
            var i = 0;
            var tmp;

            for(i=0; i < players.length; i++){
                tmp = players[i]._source;

                json[tmp.player_id] = {
                    "name" : tmp.name,
                    "count" : 0
                };
            }

            console.log(response.facets.fromPlayer);

            for(i=0; i < response.facets.fromPlayer.terms.length; i++){
                tmp = response.facets.fromPlayer.terms[i];
                console.log("test" + json[tmp.term]);
                json[tmp.term]['count'] = tmp.count;
            };
            console.log(json);

            res.jsonp({"facets" : json});
        });
    });
};

exports.passesGoingForwardTeam = function(req, res){
    playerModel.getPlayersForTeam(req.params.name, function(err, players){
        if(err) res.send(400);

        passModel.passesGoingForwardTeam(players[0]._source.player_id, players[players.length - 1]._source.player_id, function callbackPassesForward(err, response){
            if(err) res.send(400);
            var json = {};
            var i = 0;
            var tmp;

            for(i=0; i < players.length; i++){
                tmp = players[i]._source;

                json[tmp.player_id] = {
                    "name" : tmp.name,
                    "count" : 0
                };
            }

            console.log(response.facets.fromPlayer);

            for(i=0; i < response.facets.fromPlayer.terms.length; i++){
                tmp = response.facets.fromPlayer.terms[i];
                console.log("test" + json[tmp.term]);
                json[tmp.term]['count'] = tmp.count;
            };
            console.log(json);

            res.jsonp({"facets" : json});
        });
    });
}