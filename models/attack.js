var indexNameAttacks = "attacks";
var typeNameAttacks = "attack";

exports.newAttack = function(attack, callback){
    var commands = [];
    commands.push({ "index" : { "_index" :indexNameAttacks, "_type" : typeNameAttacks} });
    commands.push(attack);

    elasticSearchClient.bulk(commands, {})
        .on('data', function(data) {
            console.log(data);
        })
        .on('done', function(done){
            console.log(done);
            callback(OK_REQUEST);
        })
        .on('error', function(error){
            console.log(error);
            callback(BAD_REQUEST);
        })
        .exec();
}