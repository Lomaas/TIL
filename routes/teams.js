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

exports.getAllPlayers =  function(req, res){
    console.log("Get All Players");

    var query = Team.find();
    query.where('team.players').gte("Tromsø IL").exec(function (err, passes) {  
        if (err) res.send(400, {"msg" : "someting wrong happend during query executing"});

        console.log(passes);
        console.log("passes: %j", passes);
        res.jsonp(passes);
    });

}

exports.getTeam = function(req, res){
    console.log(req.params.name);

    var team = req.params.name;

    Match.find({$or : [{hometeam: team}, {awayteam: team}]}, function (err, docs) {
        console.log(docs);
        res.jsonp(docs)
    });

}