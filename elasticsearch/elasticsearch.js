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

var indexName = "teams";
var typeName = "team";

ElasticSearchClient = require('elasticsearchclient');

var elasticSearchClient = new ElasticSearchClient(serverOptions);

var commands = [];
commands.push({ "index" : { "_index" :indexName, "_type" : typeName} });

commands.push([
    {
        "name" : "Tromsø",
    }
);

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

// command.push({
//     "name" : "Tromsø IL",
//     "team_id" : 5,
//     "players" : [
//         {
//             "number" : 1,
//             "name" : "M. Sahlman"
//         },    
//         {
//             "name" : "H. Norbye",
//             "number" : 14
//         },
//         {
//             "number" : 7,
//             "name" :   "M. Koppinen"    
//         },
//         {
//             "number" : 3,
//             "name" :   "J. Fojut"       
//         },
//         { 
//             "number" : 4, 
//             "name" : "R. Kristiansen"  
//         },
//         { 
//             "number" : 8,
//             "name"  :  "T. Bendiksen"
//         },  
//         {
//             "number" :17,
//             "name" :  "R. Johansen"
//         },
//         {
//             "number" : 15,
//             "name" :  "M. Andersen"    
//         },
//         {
//             "number" : 18,
//             "name" :  "J. Pritchard"   
//         },
//         {
//             "number" : 10,
//             "name" : "T. Drage"    
//         },
//         { "name" : "T. Drage" 
//             "number" : 10
//         },
//         {
//             "name" : "M. Moldskred"
//             "number" : 5
//         }
//     ]
// });

// commands.push({
// 	"matchId": 4,
//             "hometeam" : "Tromsø IL",
//             "awayteam" : "Rosenborg BK",
//             "match": "Tromsø IL - Rosenborg BK",
//             "score" : "1-0",
//             "attacks": [
//                 {
//                     "time": 24,
//                     "touch" : 7,
//                     "team" : "Tromsø IL",
//                     "breakthrough" : "Pasning Mellomrom",
//                     "breakthroughPlayer" : "Morten Moldskred",
//                     "typeOfAttack" : "Etablert spill",
//                     "attackStart" : {
//                         "pos" : 11,
//                         "type" : "",
//                         "player" : 8,

//                     },
//                     "passes": [
//                         {
//                             "fromPlayer": 8,
//                             "toPlayer": 5,
//                             "fromPos": 11,
//                             "toPos": 14,
//                             "action": "PASS"
//                         },
//                         {
//                             "fromPlayer": 5,
//                             "toPlayer": 4,
//                             "fromPos": 14,
//                             "toPos": 16,
//                             "action": "PASS"
//                         },
//                          {
//                             "fromPlayer": 4,
//                             "toPlayer": 15,
//                             "fromPos": 16,
//                             "toPos": 17,
//                             "action": "PASS"
//                         }
//                     ],
//                     "finish" : {
//                         "player": 15,
//                         "fromPos": 17,
//                         "action": "SHOTGOAL"
//                     }
//                 },
//                 {
//                     "time": 23,
//                     "touch" : 5,
//                     "team" : "Tromsø IL",
//                     "breakthrough" : "Nei",
//                     "breakthroughPlayer" : "",
//                     "typeOfAttack" : "Gjenvinning kort angrep",
//                     "attackStart" : {
//                         "pos" : 11,
//                         "type" : "",
//                         "player" : 8,

//                     },
//                     "passes": [
//                         {
//                             "fromPlayer": 8,
//                             "toPlayer": 6,
//                             "fromPos": 11,
//                             "toPos": 18,
//                             "action": "PASS"
//                         },
//                         {
//                             "fromPlayer": 6,
//                             "toPlayer": 15,
//                             "fromPos": 18,
//                             "toPos": 17,
//                             "action": "PASS"
//                         }
//                     ],
//                     "finish" : {
//                         "player": 15,
//                         "fromPos": 17,
//                         "action": "SHOTTARGET"
//                     }
//                 }
//             ]
//         });





//     var queryObject = {        
//         "query" : {
//             "match_all" : {
//             }
//         }
//     };

// elasticSearchClient.search(indexName, typeName, queryObject)
//     .on('data', function(data) {
//         console.log("Data %s", JSON.stringify(JSON.parse(data), undefined, 2));
//     })
//     .on('done', function(done){
//         //always returns 0 right now
//         console.log(done);
//     })
//     .on('error', function(error){
//         data = JSON.parse(error);
//         console.log("Data %s", JSON.stringify(data, undefined, 2));
//     })
//     .exec()

