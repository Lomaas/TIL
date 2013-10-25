var teamModel = require('./../models/team');
var attackModel = require('./../models/attack');
var playerModel = require('./../models/player');

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

exports.getStats = function(req, res){
    attackModel.getAttacksSummaryStatsForTeam(req.params.name, function(err, response){
        if(err)    res.send(400);

        res.jsonp(response);
    });
};
