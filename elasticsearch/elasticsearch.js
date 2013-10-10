var serverOptions = {
    host: 'localhost',
    port: 9200,
    secure: false
};

var indexName = "attacks";
var typeName = "attacks";

ElasticSearchClient = require('elasticsearchclient');

var elasticSearchClient = new ElasticSearchClient(serverOptions);

var commands = [];
commands.push({ "index" : { "_index" :indexName, "_type" : typeName} });

// commands.push({
// 	"matchId": 1,
//     "hometeam" : "Tromsø",
//     "awayteam" : "Rosenborg",
//     "match": "Tromsø - Rosenborg",
//     "score" : "1-0",
//     "date" : Date.now(),
//     "attacks": [
//         {
//             "time": 24,
//             "touch" : 7,
//             "team" : "Tromsø",
//             "breakthrough" : "Pasning Mellomrom",
//             "breakthroughPlayer" : "Morten Moldskred",
//             "typeOfAttack" : "Etablert spill",
//             "attackStart" : {
//                 "pos" : 11,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 402,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 402,
//                     "toPlayer": 406,
//                     "fromPos": 11,
//                     "toPos": 14,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 406,
//                     "toPlayer": 394,
//                     "fromPos": 14,
//                     "toPos": 16,
//                     "action": "KEYPASS"
//                 },
//                  {
//                     "fromPlayer": 394,
//                     "toPlayer": 413,
//                     "fromPos": 16,
//                     "toPos": 17,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 413,
//                 "pos": 17,
//                 "action": "SHOTGOAL"
//             }
//         },
//         {
//             "time": 23,
//             "touch" : 5,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 11,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 402,

//             },
//             "passes": [
//                 {
//                     "fromPlayer": 402,
//                     "toPlayer": 407,
//                     "fromPos": 11,
//                     "toPos": 18,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 407,
//                     "toPlayer": 413,
//                     "fromPos": 18,
//                     "toPos": 17,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 413,
//                 "pos": 17,
//                 "action": "SHOTTARGET"
//             }
//         },
//         {
//             "time": 44,
//             "touch" : 10,
//             "team" : "Tromsø",
//             "breakthrough" : "1vs1 Mellomrom",
//             "breakthroughPlayer" : "Josh Pritchard",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 1,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 402,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 402,
//                     "toPlayer": 407,
//                     "fromPos": 4,
//                     "toPos": 8,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 407, 
//                     "toPlayer": 397,
//                     "fromPos": 11,
//                     "toPos": 15,
//                     "action": "KEYPASS"
//                 },
//                 {
//                     "fromPlayer": 397,
//                     "toPlayer": 413,
//                     "fromPos": 18,
//                     "toPos": 17,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 397,
//                 "pos": 17,
//                 "action": "SHOTMISS"
//             }
//         },
//           {
//             "time": 60,
//             "touch" : 15,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning langt angrep",
//             "attackStart" : {
//                 "pos" : 5,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 406,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 406,
//                     "toPlayer": 403,
//                     "fromPos": 5,
//                     "toPos": 7,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 403,
//                     "toPlayer": 394,
//                     "fromPos": 7,
//                     "toPos": 10,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 394,
//                     "toPlayer": 402,
//                     "fromPos": 13,
//                     "toPos": 14,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 402,
//                 "pos": 14,
//                 "action": "SHOTMISS"
//             }
//         }
//     ]
// });

// commands.push({
//     "matchId": 2,
//     "hometeam" : "Tromsø",
//     "awayteam" : "Start",
//     "match": "Tromsø - Start",
//     "score" : "2-3",
//     "date" : Date.now(),
//     "attacks": [
//         {
//             "time": 40,
//             "touch" : 4,
//             "team" : "Start",
//             "breakthrough" : "Pasning bakrom",
//             "breakthroughPlayer" : "Håkon Opdal",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 5,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 341,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 341,
//                     "toPlayer": 333,
//                     "fromPos": 5,
//                     "toPos": 2,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 333,
//                     "toPlayer": 347,
//                     "fromPos": 2,
//                     "toPos": 14,
//                     "action": "KEYPASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 347,
//                 "pos": 17,
//                 "action": "SHOTGOAL"
//             }
//         },
//         {
//             "time": 48,
//             "touch" : 3,
//             "team" : "Start",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Dødball",
//             "attackStart" : {
//                 "pos" : 21,
//                 "typeAction" : "Corner",
//                 "player" : 349,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 349,
//                     "toPlayer": 338,
//                     "fromPos": 21,
//                     "toPos": 17,
//                     "action": "CROSS"
//                 }
//             ],
//             "finish" : {
//                 "player": 338,
//                 "pos": 17,
//                 "action": "SHOTGOAL"
//             }
//         },
//         {
//             "time": 62,
//             "touch" : 3,
//             "team" : "Start",
//             "breakthrough" : "1vs1 Mellomrom",
//             "breakthroughPlayer" : "Espen Hoff",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 11,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 347,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 347,
//                     "toPlayer": 356,
//                     "fromPos": 14,
//                     "toPos": 17,
//                     "action": "KEYPASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 356,
//                 "pos": 17,
//                 "action": "SHOTGOAL"
//             }
//         },
//         {
//             "time": 67,
//             "touch" : 7,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning langt angrep",
//             "attackStart" : {
//                 "pos" : 11,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 402,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 402,
//                     "toPlayer": 412,
//                     "fromPos": 13,
//                     "toPos": 16,
//                     "action": "KEYPASS"
//                 },
//                 {
//                     "fromPlayer": 412,
//                     "toPlayer": 413,
//                     "fromPos": 16,
//                     "toPos": 17,
//                     "action": "CROSS"
//                 }
//             ],
//             "finish" : {
//                 "player": 413,
//                 "pos": 17,
//                 "action": "SHOTGOAL",
//                 "touch" : 1
//             }
//         },
//         {
//             "time": 71,
//             "touch" : 7,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning langt angrep",
//             "attackStart" : {
//                 "pos" : 10,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 393,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 393,
//                     "toPlayer": 413,
//                     "fromPos": 10,
//                     "toPos": 17,
//                     "action": "LONGPASS"
//                 },
//                 {
//                     "fromPlayer": 413,
//                     "toPlayer": 411,
//                     "fromPos": 17,
//                     "toPos": 17,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 411,
//                     "toPlayer": 404,
//                     "fromPos": 17,
//                     "toPos": 17,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 404,
//                     "toPlayer": 412,
//                     "fromPos": 17,
//                     "toPos": 17,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 412,
//                 "pos": 17,
//                 "action": "SHOTGOAL",
//                 "touch" : 1
//             }
//         },
//         {
//             "time": 71,
//             "touch" : 1,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Dødball",
//             "attackStart" : {
//                 "pos" : 14,
//                 "typeAction" : "Frispark",
//                 "player" : 412,
//             },
//             "passes" : [],
//             "finish" : {
//                 "player": 412,
//                 "pos": 14,
//                 "action": "SHOTTARGET",
//                 "touch" : 1
//             }
//         }
//     ]
// });

// commands.push(
// {
//     "time": 24,
//     "touch" : 7,
//     "team" : "Tromsø",
//     "breakthrough" : "Pasning Mellomrom",
//     "breakthroughPlayer" : "Morten Moldskred",
//     "typeOfAttack" : "Etablert spill",
//     "attackStart" : {
//         "pos" : 11,
//         "typeAction" : "Gjenvinning",
//         "player" : 402,
//     },
//     "passes": [
//         {
//             "fromPlayer": 402,
//             "toPlayer": 406,
//             "fromPos": 11,
//             "toPos": 14,
//             "action": "PASS"
//         },
//         {
//             "fromPlayer": 406,
//             "toPlayer": 394,
//             "fromPos": 14,
//             "toPos": 16,
//             "action": "KEYPASS"
//         },
//          {
//             "fromPlayer": 394,
//             "toPlayer": 413,
//             "fromPos": 16,
//             "toPos": 17,
//             "action": "PASS"
//         }
//     ],
//     "finish" : {
//         "player": 413,
//         "pos": 17,
//         "action": "SHOTGOAL"
//     }
// });

commands.push({
    "time": 71,
    "touch" : 7,
    "team" : "Tromsø",
    "breakthrough" : "None",
    "breakthroughPlayer" : "None",
    "typeOfAttack" : "Gjenvinning langt angrep",
    "attackStart" : {
        "pos" : 10,
        "typeAction" : "Gjenvinning",
        "player" : 393,
    },
    "passes": [
        {
            "fromPlayer": 393,
            "toPlayer": 413,
            "fromPos": 10,
            "toPos": 17,
            "action": "LONGPASS"
        },
        {
            "fromPlayer": 413,
            "toPlayer": 411,
            "fromPos": 17,
            "toPos": 17,
            "action": "PASS"
        },
        {
            "fromPlayer": 411,
            "toPlayer": 404,
            "fromPos": 17,
            "toPos": 17,
            "action": "PASS"
        },
        {
            "fromPlayer": 404,
            "toPlayer": 412,
            "fromPos": 17,
            "toPos": 17,
            "action": "PASS"
        }
    ],
    "finish" : {
        "player": 412,
        "pos": 17,
        "action": "SHOTGOAL",
        "touch" : 1
    }
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

