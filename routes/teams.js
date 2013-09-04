var teamsCollection = "teams"

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
