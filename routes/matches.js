var matchCollection = "matches"

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

exports.getAllMatches = function (req, res) {
    console.log("Find all matches");
    db.collection(matchCollection, function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.jsonp(items);
            console.log(items);
        });
    });
};

exports.postNewMatch = function (req, res) {
    console.log("New match");

    var matchdata = req.body;

    console.log('New match rating');
    console.log(JSON.stringify(matchdata));
    
    db.collection(matchCollection, function(err, collection) {
        collection.insert(matchdata, {safe:true}, function(err, item) {
              res.send(201, {"success" : true});
        });
    });
};

exports.postNewAttack = function (req, res) {
    console.log("New attack for match ");
};

var populateDB = function() {
 
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
                },
                {

                }
            ]
        },

    ];
 
    db.collection(matchCollection, function(err, collection) {
        collection.insert(matches, {safe:true}, function(err, result) {});
    });
};