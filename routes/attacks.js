var attackModel = require('./../models/attack');
var matchModel = require('./../models/match');

exports.postNewAttack = function (req, res){
    console.log("PostNewAttack %s", JSON.stringify(req.body, undefined, 2));

    var attack = req.body;
    attack['touch'] = 0;    // this field is not used anymore

    attackModel.newAttack(req.body, function(response){
       switch(response){
            case OK_REQUEST:
                matchModel.newAttackForMatch(attack, attack.matchId, function(response){
                    res.send(201, {"msg" : "success"});
                });
               break;
            case BAD_REQUEST:
                res.send(400, {"msg" : "bad data"});
            default:
                res.send(404);
        }
    });
};