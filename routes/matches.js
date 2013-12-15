var matchModel = require('./../models/match');

exports.getAllMatches = function (req, res) {
    console.log("GetAllMatches");

    matchModel.getAllMatches(function(response){
        res.jsonp(response);
    });
};

exports.getMatch = function(req, res){
    matchModel.getMatch(req.params.id, function(err, response){
        if(err) {res.send(400); return;}

        res.jsonp(response);
    });
};

exports.postNewMatch = function (req, res) {
    console.log("PostNewMatch %s", JSON.stringify(req.body, undefined, 2));
    var match = req.body;

    matchModel.newMatch(match, function(response){
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
