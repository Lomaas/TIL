var attackModel = require('./../models/attack');
var matchModel = require('./../models/match');

exports.postNewAttack = function (req, res){
    console.log("Put attack", req.body);
    var attack = req.body;

    attackModel.newAttack(req.body, function(response){
       switch(response){
            case OK_REQUEST:
                console.log("success");
                matchModel.newAttackForMatch(attack, attack.matchId, function(response){
                    console.log("response new attack for match %s", response);
                    res.send(201, {"msg" : "success"});
                });
               break;
            case BAD_REQUEST:
                console.log("Bad data");
                res.send(400, {"msg" : "bad data"});
            default:
                res.send(404);
        }
    });
};

exports.getAttacksForMatch = function (req, res){
    console.log("GetAttacksForMatch %d", req.params.matchId);

    attackModel.getMatchAttacks(req.params.matchId, function callback(err, response){
        if(err) res.send(404);

        res.jsonp(response);
    });
}