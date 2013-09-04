var teamsCollection = "teams"

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/til');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("Yay open db teams collection")
});

var TeamSchema = new Schema({
    name : String
});


var Team = mongoose.model('Teams', TeamSchema);


exports.getAllTeams = function (req, res) {
    console.log("Find all Teams");

    Team.find(function (err, teams) {
        if (err) res.send(400, {"msg" : "someting wrong happend during query executing"});
        
        console.log("Matches: %j", teams);
        res.jsonp(teams);
    });
};

exports.postNewTeam = function(req, res){
    console.log("New team");
    console.log(JSON.stringify(req.body));

    var teamdata = new Team(req.body);

    teamdata.save(function (err, data) {
        if (err) res.send(400, {"msg" : "someting wrong happend during saving"})

        res.send(201, {"msg" : "success"});
    });


};
