var matchModel = require('./../models/match');

exports.getAllMatches = function (req, res) {
    console.log("Find all matches");

    matchModel.getAllMatches(function(response){
        res.jsonp(response);
    });
};

exports.getMatch = function(req, res){
    matchModel.getMatch(req.params.id, function(err, response){
        if(err) res.send(400);

        res.jsonp(response);
    });
};

exports.postNewMatch = function (req, res) {
    console.log("New match ");
    var input = req.body;
    console.log(req.body);

    matchModel.newMatch(input, function(response){
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
