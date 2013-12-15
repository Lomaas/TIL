var passModel = require('./../models/pass');

exports.newPass = function (req, res) {
    console.log("NewPass", JSON.stringify(req.body, undefined, 2));

    passModel.newPass(req.body, function(response){
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