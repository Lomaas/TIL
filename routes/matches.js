var matchCollection = "matches"

exports.getAllMatches = function (req, res) {
    console.log("Find all matches");

    // Match.find(function (err, matches) {
    //     if (err) res.send(400, {"msg" : "someting wrong happend during query executing"});
    //     console.log(matches);
    //     console.log("Matches: %j", matches);
    //     res.jsonp(matches);
    // });
    var queryObject = { 
        "query" : {
            "match_all" : {}
        }
    };


    elasticSearchClient.search(indexNameElastic, typeNameElastic, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            console.log("Data %s", JSON.stringify(data.hits.hits, undefined, 2));

            res.jsonp(data.hits.hits);
        })
        .on('done', function(done){
            //always returns 0 right now
            console.log(done);
        })
        .on('error', function(error){
            console.log(error)
        })
        .exec()
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

    // Match.findOne({ 'matchId': mId }, function (err, match) {
    //     if (err) return handleError(err);
        
    //     console.log('Match %j', match);
    //     res.jsonp(match)
    // });
    var queryObject = { 
        "query" : {
            "match" : {
                "matchId" : mId
            }
        }
    };


    elasticSearchClient.search(indexNameElastic, typeNameElastic, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            console.log("Data %s", JSON.stringify(data.hits.hits, undefined, 2));

            res.jsonp(data.hits.hits[0]);
        })
        .on('done', function(done){
            //always returns 0 right now
            console.log(done);
        })
        .on('error', function(error){
            console.log(error)
        })
        .exec()
}

exports.postNewMatch = function (req, res) {
    console.log("New match");
    res.send(201, {"ok" : "OK"});
    // console.log(JSON.stringify(req.body));

    // var commands = []
    // commands.push({ "index" : { "_index" :indexNameElastic, "_type" : typeNameElastic} });
    // commands.push(req.body);

    // elasticSearchClient.bulk(commands, {})
    //         .on('data', function(data) {
    //             console.log(data);

    //         })
    //         .on('done', function(done){
    //             console.log(done);
    //             res.send(201, {"msg" : "success"});

    //         })
    //         .on('error', function(error){
    //             console.log(error);
    //             res.send(400, {"msg" : "someting wrong happend during saving"});
    //         })
    //         .exec();

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

