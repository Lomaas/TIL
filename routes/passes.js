exports.newPass = function (req, res) {
    console.log("NewPass");
    var commands = []
    commands.push({ "index" : { "_index" :indexNamePasses, "_type" : typeNamePasses} });
    commands.push(req.body);

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