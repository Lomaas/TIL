
function buyWhore(team, playerId){
     var queryObject = {
        "query" : {
            "nested" : {
                "path" : "passes",
                "query" : {
                    "match" : {
                        "fromPlayer" : playerId
                    }
                }
            }
        }
    }
    
    elasticSearchClient.search(indexNameAttacks, typeNameAttacks, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            console.log(team, playerId);
            console.log("Data buyWhore%s", JSON.stringify(data, undefined, 2));
        })
        .on('done', function(done){
            //always returns 0 right now
            console.log("Done ", done);
        })
        .on('error', function(error){
            console.log("Error ", error);
        })
        .exec();
};

exports.getStats = function (req, res){
    console.log("get stats " + req.params.id);

    var queryObject = {
        "query" : {
            "match" : {
              "_id" : req.params.id
            }
        },
    };

    elasticSearchClient.search(indexNamePlayer, typeNamePlayer, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            console.log("Data %s", JSON.stringify(data, undefined, 2));
            buyWhore(data.hits.hits[0]._source.team, data.hits.hits[0]._source.player_id);
        })
        .on('done', function(done){
            //always returns 0 right now
            console.log("Done ", done);
        })
        .on('error', function(error){
            console.log("Error ", error);
        })
        .exec();
};

// Query all keypases for a player. Count which zone it offcurs most often

exports.getAllPasses = function (req, res) {
    console.log("Find all matches");

    var query = Match.find();
	query.where('attacks.team').gte("Tromsø IL").exec(function (err, passes) {	
        if (err) res.send(400, {"msg" : "someting wrong happend during query executing"});

        console.log(passes);
        console.log("passes: %j", passes);
        res.jsonp(passes);
    });
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
};

exports.getPlayersForTeam = function(req, res){
    var team = req.params.teamname;
    console.log("GET PLAYERS FOR TEAM-----" + team);

    var queryObject = { 
        "query" : {
            "match" : {
                "team" : team
            }
        },
        "size" : 30
    };

    elasticSearchClient.search(indexNamePlayer, typeNamePlayer, queryObject)
    .on('data', function(data) {
        data = JSON.parse(data);
        // console.log("Data %s", JSON.stringify(data, undefined, 2));

        res.jsonp(data.hits.hits);
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

exports.getAllPlayers =  function(req, res){
    console.log("Get All Players for every team");

    var queryObject = {        
        "query" : {
            "match_all" : {
            }
        }
    };

    elasticSearchClient.search(indexNamePlayer, typeNamePlayer, queryObject)
        .on('data', function(data) {
            // console.log("Data %s", JSON.stringify(JSON.parse(data), undefined, 2));
            res.jsonp(data);
        })
        .on('done', function(done){
            //always returns 0 right now
            console.log(done);
        })
        .on('error', function(error){
            data = JSON.parse(error);
            console.log("Data %s", JSON.stringify(data, undefined, 2));
        })
        .exec()
};


exports.newPlayer = function(req, res){
    console.log("New player");
    var player = req.body;

    console.log(JSON.stringify(req.body));

    var commands = [];
    commands.push({ "index" : { "_index" :indexNamePlayer, "_type" : typeNamePlayer} });
    commands.push(player);

    elasticSearchClient.bulk(commands, {})
            .on('data', function(data) {
                console.log(data);
            })
            .on('done', function(done){
                console.log(done);
                res.send(201, {"msg" : "success"});
            })
            .on('error', function(error){
                console.log(error);
                res.send(400, {"msg" : "someting wrong happend during saving"});
            })
            .exec();
};

