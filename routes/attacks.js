
exports.putAttack = function (req, res){
    console.log("Put attack");
    var attack = req.body;

    console.log(JSON.stringify(req.attack));

    var commands = [];
    commands.push({ "index" : { "_index" :indexNameAttacks, "_type" : typeNameAttacks} });
    commands.push(attack);

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