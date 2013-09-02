var matchCollection = "matches"

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/til');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("Yay open db")
});

var PassSchema = new Schema({
    fromPlayer : Number, 
    toPlayer : Number, 
    fromPos : Number, 
    toPos : Number, 
    type : String
});

var AttackSchema = new Schema({
    time : Number, 
    passes: [PassSchema]
});

var MatchSchema = new Schema({
    matchId : Number,
    match : String,
    attacks : [AttackSchema]
});

// Instantiate models
var Match = mongoose.model('Match', MatchSchema);
var Attack = mongoose.model('Attack', AttackSchema);
var Pass = mongoose.model('Pass', PassSchema);

exports.getAllMatches = function (req, res) {
    console.log("Find all matches");

    Match.find(function (err, matches) {
        if (err) res.send(400, {"msg" : "someting wrong happend during query executing"});
        console.log(matches);
        console.log("Matches: %j", matches);
        res.jsonp(matches);
    });
};

exports.getPassesForAttack = function (req, res) {
    Match.findOne({ 'attacks.time': 9 }, 'passes time', function (err, passes) {
        if (err) return handleError(err);
            console.log('Passes %j', passes)
    });
};

exports.getMatch = function(req, res){
    mId = parseInt(req.params.matchId);

    Match.findOne({ 'matchId': mId }, function (err, match) {
        if (err) return handleError(err);
        
        console.log('Match %j', match);
        res.jsonp(match)
    });

}

exports.postNewMatch = function (req, res) {
    console.log("New match");
    console.log(JSON.stringify(req.body));

    var matchdata = new Match(req.body);

    matchdata.save(function (err, data) {
        if (err) res.send(400, {"msg" : "someting wrong happend during saving"})

        res.send(201, {"msg" : "success"});
    });
};

exports.postNewAttack = function (req, res) {
    mId = parseInt(req.params.matchId);
    console.log(mId);
    console.log("New attack for match %f", req.body);
    var newAttack = new Attack(req.body);

    Match.findOne({'matchId' : mId}, 'match attacks', function(err, matches){
        if (err || matches.length == 0) res.send(400, {"msg" : "no match found with that matchId"});
        matches.attacks.push(newAttack);
        matches.save();
        res.send(201, {"msg" : "success"});
    });
};

exports.deleteMatch = function (req, res) {
    matchId = parseInt(req.params.matchId);

    Match.remove({ 'matchId': matchId }, function (err) {
        if (err) res.send(400, {"msg" : "error deleting matchId"});

        console.log("removeed")
        res.send(200, {"msg" : "success"});
    });
};
