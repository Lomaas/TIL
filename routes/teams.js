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


exports.getTeam = function(req, res){
    console.log(req.params.name);

    var team = req.params.name;

    var queryObject = {
        "fields" : ["attacks.breakthroughPlayer"],
        "query":{
                "match": {
                    "attacks.team": "Strømsgodset"
                }
        },
        "facets" : {
            "breakthroughPlayer" : {
                "terms" : {
                    "field" : "attacks.breakthroughPlayer.untouched"
                }
            }
       }
    };

    elasticSearchClient.search(indexNameElastic, typeNameElastic, queryObject)
        .on('data', function(data) {
            console.log("Data %s", JSON.stringify(JSON.parse(data), undefined, 2));
            res.jsonp(data);
        })
        .on('done', function(done){
            //always returns 0 right now
            console.log(done);
        })
        .on('error', function(error){
            console.log(error)
        })
        .exec();
}

exports.getTeamStats = function(req, res){
    console.log(req.params.name);

    var team = req.params.name;

    var queryObject = {
        "fields" : ["attacks.breakthroughPlayer"],
        "query":{
                "match": {
                    "attacks.team": "Strømsgodset"
                }
        },
        "facets" : {
            "breakthroughPlayer" : {
                "terms" : {
                    "field" : "attacks.breakthroughPlayer.untouched"
                }
            }
       }
    };

    elasticSearchClient.search(indexNameElastic, typeNameElastic, queryObject)
        .on('data', function(data) {
            console.log("Data %s", JSON.stringify(JSON.parse(data), undefined, 2));
            res.jsonp(data);
        })
        .on('done', function(done){
            //always returns 0 right now
            console.log(done);
        })
        .on('error', function(error){
            console.log(error);
        })
        .exec();
}