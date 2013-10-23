var indexNameTeams = "teams";
var typeNameTeams = "team";

exports.getTeams = function(callback){
    console.log("GET ALL TEAMS");

    var queryObject = { 
        "query" : {
            "match_all" : {},
        },
        "size" : 16
    };

    elasticSearchClient.search(indexNameTeams, typeNameTeams, queryObject)
        .on('data', function(data) {
            data = JSON.parse(data);
            console.log("getTeams %s", JSON.stringify(data, undefined, 2));

            callback(err = false, data.hits.hits);
        })
        .on('error', function(error){
            console.log(error);
            callback(err = true, undefined);
        })
        .exec();
};

exports.postNewTeam = function(teamData, callback){
    var commands = [];
    commands.push({ "index" : { "_index" :indexNameTeams, "_type" : typeNameTeams} });
    commands.push(teamData);

    elasticSearchClient.bulk(commands, {})
        .on('done', function(done){
            callback(OK_REQUEST);
        })
        .on('error', function(error){
            winston.log('error', error);
            callback(BAD_REQUEST);
        })
        .exec();
}