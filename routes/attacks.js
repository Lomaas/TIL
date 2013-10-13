var attackModel = require('./../models/attack');

exports.putAttack = function (req, res){
    console.log("Put attack");
    var attack = req.body;

    attackModel.newAttack(req.body, function(response){
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