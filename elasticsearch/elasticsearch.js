var serverOptions = {
    host: 'localhost',
    port: 9200,
    secure: false
    //Optional basic HTTP Auth
  //   auth: {
  //   username: process.env.ES_USERNAME,
  //       password: process.env.ES_PASSWORD
  // }
};

var indexName = "matches";
var typeName = "match";

ElasticSearchClient = require('elasticsearchclient');

var elasticSearchClient = new ElasticSearchClient(serverOptions);

var commands = []
commands.push({ "index" : { "_index" :indexName, "_type" : typeName} });

commands.push({
	"matchId": 2,
    "hometeam" : "Strømsgodset",
    "awayteam" : "Rosenborg BK",
    "match": "Strømsgodset - Rosenborg BK",
    "score" : "1-2",
    "attacks": [
    	{
        	"time": 19,
            "touch" : 5,
            "team" : "Strømsgodset",
            "breakthrough" : "Pasning mellomrom",
            "breakthroughPlayer" : "LEif Stokke",
            "typeOfAttack" : "Etablert spill",
            "attackStart" : {
                "pos" : 10,
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


var queryObject = {
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


elasticSearchClient.search(indexName, typeName, queryObject)
    .on('data', function(data) {
        console.log("Data %s", JSON.stringify(JSON.parse(data), undefined, 2));
    })
    .on('done', function(done){
        //always returns 0 right now
        console.log(done);
    })
    .on('error', function(error){
        console.log(error)
    })
    .exec()

