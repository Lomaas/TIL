var matchCollection = "matches"

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
    var time = parseInt(req.params.time);
    Match.findOne({ 'attacks.time': time }, '', function (err, passes) {
        if (err) return handleError(err);
        console.log('Passes %j', passes);

        res.jsonp(passes);
    });
};

exports.getMatch = function(req, res){
    mId = parseInt(req.params.id);

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
    mId = parseInt(req.params.id);
    console.log(mId);
    console.log("New attack for match %f", req.body);
    var newAttack = new Attack(req.body);

    Match.findOne({'matchId' : mId}, 'match attacks', function(err, matches){
        if (err || matches.length == 0) res.send(400, {"msg" : "no match found with that matchId"});
        matches.attacks.push(newAttack);
        matches.save();
        res.send(201, {"msg" : "success"});
    });


    var commands = []
    commands.push({ "index" : { "_index" :indexName, "_type" : typeName} });

    commands.push({
        "matchId": 1,
        "awayteam" : "Strømsgodset",
        "hometeam" : "Rosenborg BK",
        "match": "Rosenborg BK - Strømsgodset",
        "score" : "2-0",
        "attacks": [
            {
                "time": 19,
                "touch" : 5,
                "team" : "Strømsgodset",
                "breakthrough" : "Pasning Mellomrom",
                "breakthroughPlayer" : "Øyvind Storflor",
                "typeOfAttack" : "Gjenvinning kort angrep",
                "attackStart" : {
                    "pos" : 9,
                    "type" : "",
                    "player" : 17,

                },
                "passes": [
                    {
                        "fromPlayer": 4,
                        "toPlayer": 10,
                        "fromPos": 10,
                        "toPos": 11,
                        "action": "PASS"
                    },
                    {
                        "fromPlayer": 10,
                        "toPlayer": 15,
                        "fromPos": 14,
                        "toPos": 17,
                        "action": "PASS"
                    }
                ],
                "finish" : {
                    "player": 15,
                    "fromPos": 17,
                    "action": "SHOTMISS"
                }
            }
        ]
    });

    elasticSearchClient.bulk(commands, {})
            .on('data', function(data) {
                console.log(data);
            })
            .on('done', function(done){
                console.log(done);

            })
            .on('error', function(error){
                console.log(error);

            })
            .exec();

};

exports.deleteMatch = function (req, res) {
    matchId = parseInt(req.params.id);

    Match.remove({ 'matchId': matchId }, function (err) {
        if (err) res.send(400, {"msg" : "error deleting matchId"});

        console.log("removeed");
        res.send(200, {"msg" : "success"});
    });
};


// Team STATS

// exports.getTeamStats = function (req, res) {
//     teamname = parseInt(req.params.name);

//     Match.find({'hometeam' : teamname, 'awayteam' : teamname}function (err, matches) {
//         if (err) res.send(400, {"msg" : "someting wrong happend during query executing"});
        
//         console.log("Matches: %j", teams);
//         res.jsonp(teams);
//     });
// };

