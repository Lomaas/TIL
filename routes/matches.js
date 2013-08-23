var matchCollection = "matches"

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/data');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("Yay open db")
});

var attacksSchema = mongoose.Schema({
    matchId : Number,
    match : String,
    attacks : 
        [
            {
                time : Number, 
                passes : [
                    {
                        fromPlayer : Number, 
                        toPlayer : Number, 
                        fromPos : Number, 
                        toPos : Number, 
                        type : String
                    }
                ]
            }
        ]
})

attacksSchema.methods.speak = function () {

};
var Attacks = mongoose.model('Attacks', attacksSchema);


exports.getAllMatches = function (req, res) {
    console.log("Find all matches");

    Attacks.find(function (err, matches) {
        if (err) res.send(400, {"msg" : "someting wrong happend during query executing"})
        console.log("Session: %j", matches);
        res.jsonp(matches);
    })
};

exports.postNewMatch = function (req, res) {
    console.log("New match");
    console.log(JSON.stringify(req.body));

    var matchdata = new Attacks(req.body);

    matchdata.save(function (err, fluffy) {
        if (err){
            res.send(400, {"msg" : "someting wrong happend during saving"})
        }
        else {
            res.send(201, {"msg" : "success"});
        }
    });
};

exports.postNewAttack = function (req, res) {
    console.log("New attack for match ");

};

exports.deleteAttack = function (req, res) {
    matchId = parseInt(req.params.matchId)

    Attacks.remove({ 'matchId': matchId }, function (err) {
        if (err) res.send(400, {"msg" : "error deleting matchId"});

        console.log("removeed")
        res.send(200, {"msg" : "success"});
    });
}

var populateDB = function() {
    
    var MongoClient = require('mongodb').MongoClient,
        Server = require('mongodb').Server,
        db;

    var mongoClient = new MongoClient(new Server('localhost', 27017));

    mongoClient.open(function(err, mongoClient) {
        db = mongoClient.db("data");
        db.collection(matchCollection, {strict:true}, function(err, collection) {
            if (err) {
                console.log("The " + matchCollection + " collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    });

    console.log("Populating " + matchCollection + " database...");
    var matches = [
        {matchId : 1, match : "TIL - VIF", attacks :
            [
                {
                    time : 9, passes :
                    [
                        {
                            fromPlayer : 4, toPlayer : 10, fromPos : 19, toPos : 20, type : "PASS"
                        },
                        {
                            fromPlayer : 10, toPlayer : 15, fromPos : 19, toPos : 20, type : "PASS"
                        },
                        {           
                           fromPlayer : 15, fromPos : 19, toPos : 39, type : "SHOTMISS"
                        }
                    ]
                }
            ]
        },

    ];
 
    db.collection(matchCollection, function(err, collection) {
        collection.insert(matches, {safe:true}, function(err, result) {});
    });
};