
exports.getAllPasses = function (req, res) {
    console.log("Find all matches");


    var query = Match.find();
	query.where('attacks.team').gte("Tromsø IL").exec(function (err, passes) {	
        if (err) res.send(400, {"msg" : "someting wrong happend during query executing"});

        console.log(passes);
        console.log("passes: %j", passes);
        res.jsonp(passes);
    });
    
    // Pass.find({fromPlayer : 10}, 'fromPos', function (err, passes) {
    //     if (err) res.send(400, {"msg" : "someting wrong happend during query executing"});

    //     console.log(passes);
    //     console.log("passes: %j", passes);
    //     res.jsonp(passes);
    // });
};

exports.newPass = function (req, res) {
    console.log("NewPass");
    name = parseInt(req.params.name);

    var query = Match.find();
	query.where('attacks.team').gte("Tromsø IL").exec(function (err, passes) {	
        if (err) res.send(400, {"msg" : "someting wrong happend during query executing"});

        console.log(passes);
        console.log("passes: %j", passes);
        res.jsonp(passes);
    });
    
    // Pass.find({fromPlayer : 10}, 'fromPos', function (err, passes) {
    //     if (err) res.send(400, {"msg" : "someting wrong happend during query executing"});

    //     console.log(passes);
    //     console.log("passes: %j", passes);
    //     res.jsonp(passes);
    // });
};

exports.getAllPlayers =  function(req, res){
    console.log("Get All Players for every team");

    var query = Team.find();
    query.where('team.players').gte("Tromsø IL").exec(function (err, passes) {  
        if (err) res.send(400, {"msg" : "something wrong happend during query executing"});

        console.log(passes);
        console.log("passes: %j", passes);
        res.jsonp(passes);
    });
};