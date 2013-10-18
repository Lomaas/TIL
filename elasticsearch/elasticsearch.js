var serverOptions = {
    host: 'localhost',
    port: 9200,
    secure: false
};

ElasticSearchClient = require('elasticsearchclient');


// insertMatch({
//     "hometeam" : "Tromsø",
//     "awayteam" : "Rosenborg",
//     "score" : "1-0",
//     "date" : Date.now(),
//     "attacks": [
//         {
//             "time": 4,
//             "touch" : 1,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Dødball",
//             "attackStart" : {
//                 "pos" : 17,
//                 "typeAction" : "Frispark",
//                 "player" : 403,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 403,
//                     "toPlayer": 393,
//                     "fromPos": 17,
//                     "toPos": 23,
//                     "action": "CROSS"
//                 }
//             ],
//             "finish" : {
//                 "player": 393,
//                 "pos": 23,
//                 "action": "SHOTMISS"
//             }
//         },
//         {
//             "time": 11,
//             "touch" : 7,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Kontring",
//             "attackStart" : {
//                 "pos" : 8,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 402,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 402,
//                     "toPlayer": 404,
//                     "fromPos": 8,
//                     "toPos": 8,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 404,
//                     "toPlayer": 407,
//                     "fromPos": 8,
//                     "toPos": 11,
//                     "action": "PASS"
//                 },
//                  {
//                     "fromPlayer": 407,
//                     "toPlayer": 403,
//                     "fromPos": 11,
//                     "toPos": 13,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 403,
//                     "toPlayer": 411,
//                     "fromPos": 17,
//                     "toPos": 23,
//                     "action": "CROSS"
//                 }
//             ],
//             "finish" : {
//                 "player": 411,
//                 "pos": 23,
//                 "action": "SHOTTARGET"
//             }
//         },
//         {
//             "time": 21,
//             "touch" : 5,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Etablert spill",
//             "attackStart" : {
//                 "pos" : 17,
//                 "typeAction" : "Innkast",
//                 "player" : 403,

//             },
//             "passes": [
//                 {
//                     "fromPlayer": 403,
//                     "toPlayer": 402,
//                     "fromPos": 17,
//                     "toPos": 17,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 402,
//                     "toPlayer": 403,
//                     "fromPos": 17,
//                     "toPos": 17,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 403,
//                     "toPlayer": 394,
//                     "fromPos": 17,
//                     "toPos": 21,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 394,
//                     "toPlayer": 411,
//                     "fromPos": 21,
//                     "toPos": 21,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 411,
//                 "pos": 22,
//                 "action": "SHOTTARGET"
//             }
//         },
//         {
//             "time": 22,
//             "touch" : 5,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 13,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 394,

//             },
//             "passes": [
//                 {
//                     "fromPlayer": 394,
//                     "toPlayer": 407,
//                     "fromPos": 17,
//                     "toPos": 18,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 407,
//                     "toPlayer": 402,
//                     "fromPos": 18,
//                     "toPos": 14,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 402,
//                     "toPlayer": 395,
//                     "fromPos": 14,
//                     "toPos": 26,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 395,
//                     "toPlayer": 404,
//                     "fromPos": 26,
//                     "toPos": 25,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 404,
//                 "pos": 24,
//                 "action": "SHOTTARGET"
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
//                 "pos" : 15,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 406,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 406,
//                     "toPlayer": 393,
//                     "fromPos": 15,
//                     "toPos": 10,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 393,
//                     "toPlayer": 402,
//                     "fromPos": 10,
//                     "toPos": 14,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 402,
//                     "toPlayer": 411,
//                     "fromPos": 14,
//                     "toPos": 18,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 411,
//                     "toPlayer": 394,
//                     "fromPos": 18,
//                     "toPos": 17,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 394,
//                     "toPlayer": 404,
//                     "fromPos": 17,
//                     "toPos": 23,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 404,
//                 "pos": 23,
//                 "action": "SHOTGOAL"
//             }
//         },
//         {
//             "time": 40,
//             "touch" : 10,
//             "team" : "Rosenborg",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 10,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 13,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 13,
//                     "toPlayer": 17,
//                     "fromPos": 10,
//                     "toPos": 15,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 17, 
//                     "toPlayer": 26,
//                     "fromPos": 15,
//                     "toPos": 20,
//                     "action": "KEYPASS"
//                 },
//                 {
//                     "fromPlayer": 26,
//                     "toPlayer": 23,
//                     "fromPos": 26,
//                     "toPos": 23,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 23,
//                 "pos": 23,
//                 "action": "SHOTMISS"
//             }
//         },
//         {
//             "time": 45,
//             "touch" : 15,
//             "team" : "Rosenborg",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 18,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 26
//             },
//             "passes": [],
//             "finish" : {
//                 "player": 26,
//                 "pos": 18,
//                 "action": "SHOTTARGET"
//             }
//         },
//         {
//             "time": 48,
//             "touch" : 15,
//             "team" : "Rosenborg",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Etablert spill",
//             "attackStart" : {
//                 "pos" : 3,
//                 "typeAction" : "5 meter",
//                 "player" : 1
//             },
//             "passes": [                
//                 {
//                     "fromPlayer": 1,
//                     "toPlayer": 13,
//                     "fromPos": 3,
//                     "toPos": 7,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 13,
//                     "toPlayer": 1,
//                     "fromPos": 7,
//                     "toPos": 3,
//                     "action": "PASS"
//                 },
//                 {
//                    "fromPlayer": 1,
//                     "toPlayer": 13,
//                     "fromPos": 3,
//                     "toPos": 7,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 13,
//                     "toPlayer": 18,
//                     "fromPos": 15,
//                     "toPos": 14,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 18,
//                     "toPlayer": 22,
//                     "fromPos": 14,
//                     "toPos": 19,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 22,
//                     "toPlayer": 26,
//                     "fromPos": 19,
//                     "toPos": 20,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 26,
//                     "toPlayer": 7,
//                     "fromPos": 19,
//                     "toPos": 18,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 7,
//                     "toPlayer": 16,
//                     "fromPos": 18,
//                     "toPos": 23,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 16,
//                 "pos": 23,
//                 "action": "SHOTTARGET"
//             }
//         },
//        {
//             "time": 57,
//             "touch" : 15,
//             "team" : "Rosenborg",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Etablert spill",
//             "attackStart" : {
//                 "pos" : 17,
//                 "typeAction" : "Innkast",
//                 "player" : 7
//             },
//             "passes": [                
//                 {
//                     "fromPlayer": 7,
//                     "toPlayer": 23,
//                     "fromPos": 17,
//                     "toPos": 17,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 23,
//                     "toPlayer": 7,
//                     "fromPos": 17,
//                     "toPos": 17,
//                     "action": "PASS"
//                 },
//                 {
//                    "fromPlayer": 7,
//                     "toPlayer": 23,
//                     "fromPos": 17,
//                     "toPos": 17,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 23,
//                     "toPlayer": 8,
//                     "fromPos": 17,
//                     "toPos": 9,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 8,
//                     "toPlayer": 13,
//                     "fromPos": 10,
//                     "toPos": 11,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 13,
//                     "toPlayer": 26,
//                     "fromPos": 15,
//                     "toPos": 20,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 26,
//                     "toPlayer": 6,
//                     "fromPos": 20,
//                     "toPos": 20,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 6,
//                     "toPlayer": 13,
//                     "fromPos": 20,
//                     "toPos": 15,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 13,
//                     "toPlayer": 18,
//                     "fromPos": 15,
//                     "toPos": 14,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 18,
//                     "toPlayer": 7,
//                     "fromPos": 15,
//                     "toPos": 17,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 7,
//                     "toPlayer": 26,
//                     "fromPos": 21,
//                     "toPos": 24,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 26,
//                     "toPlayer": 23,
//                     "fromPos": 24,
//                     "toPos": 24,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 23,
//                 "pos": 24,
//                 "action": "SHOTTARGET"
//             }
//         },
//         {
//             "time": 76,
//             "touch" : 5,
//             "team" : "Tromsø",
//             "breakthrough" : "Pasning bakrom",
//             "breakthroughPlayer" : "Remi Johansen",
//             "typeOfAttack" : "Gjenvinning langt angrep",
//             "attackStart" : {
//                 "pos" : 11,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 396,

//             },
//             "passes": [
//                 {
//                     "fromPlayer": 396,
//                     "toPlayer": 413,
//                     "fromPos": 11,
//                     "toPos": 14,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 413,
//                     "toPlayer": 403,
//                     "fromPos": 14,
//                     "toPos": 113,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 403,
//                     "toPlayer": 402,
//                     "fromPos": 13,
//                     "toPos": 14,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 402,
//                     "toPlayer": 406,
//                     "fromPos": 14,
//                     "toPos": 14,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 406,
//                     "toPlayer": 403,
//                     "fromPos": 18,
//                     "toPos": 22,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 403,
//                     "toPlayer": 407,
//                     "fromPos": 22,
//                     "toPos": 23,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 411,
//                 "pos": 25,
//                 "action": "SHOTTARGET"
//             }
//         },
//         {
//             "time": 80,
//             "touch" : 15,
//             "team" : "Rosenborg",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Etablert spill",
//             "attackStart" : {
//                 "pos" : 16,
//                 "typeAction" : "Innkast",
//                 "player" : 6
//             },
//             "passes": [                
//                 {
//                     "fromPlayer": 6,
//                     "toPlayer": 25,
//                     "fromPos": 16,
//                     "toPos": 19,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 25,
//                     "toPlayer": 6,
//                     "fromPos": 16,
//                     "toPos": 16,
//                     "action": "PASS"
//                 },
//                 {
//                    "fromPlayer": 6,
//                     "toPlayer": 22,
//                     "fromPos": 16,
//                     "toPos": 16,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 22,
//                     "toPlayer": 7,
//                     "fromPos": 20,
//                     "toPos": 21,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 7,
//                     "toPlayer": 26,
//                     "fromPos": 21,
//                     "toPos": 18,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 26,
//                     "toPlayer": 7,
//                     "fromPos": 18,
//                     "toPos": 21,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 7,
//                     "toPlayer": 16,
//                     "fromPos": 21,
//                     "toPos": 22,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 16,
//                     "toPlayer": 25,
//                     "fromPos": 22,
//                     "toPos": 23,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 25,
//                 "pos": 23,
//                 "action": "SHOTTARGET"
//             }
//         },
//         {
//             "time": 83,
//             "touch" : 1,
//             "team" : "Rosenborg",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 20,
//                 "typeAction" : "Frispark",
//                 "player" : 6
//             },
//             "passes": [   
//                 {
//                     "fromPlayer": 6,
//                     "toPlayer": 16,
//                     "fromPos": 26,
//                     "toPos": 23,
//                     "action": "PASS"
//                 }             
//             ],
//             "finish" : {
//                 "player": 16,
//                 "pos": 23,
//                 "action": "SHOTTARGET"
//             }
//         },
//     ]
// });

// insertMatch({
//     "hometeam" : "Tromsø",
//     "awayteam" : "Start",
//     "score" : "2-3",
//     "date" : Date.now(),
//     "attacks": [
//              {
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

// insertMatch({
//     "hometeam" : "Molde",
//     "awayteam" : "Tromsø",
//     "score" : "1-0",
//     "date" : Date.now(),
//     "attacks": [
//              {
//             "time": 3,
//             "touch" : 4,
//             "team" : "Molde",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Kontring",
//             "attackStart" : {
//                 "pos" : 6,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 167,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 167,
//                     "toPlayer": 175,
//                     "fromPos": 6,
//                     "toPos": 17,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 175,
//                 "pos": 18,
//                 "action": "SHOTGOAL"
//             }
//         },
//         {
//             "time": 9,
//             "touch" : 3,
//             "team" : "Molde",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Kontring",
//             "attackStart" : {
//                 "pos" : 12,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 159,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 159,
//                     "toPlayer": 165,
//                     "fromPos": 12,
//                     "toPos": 16,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 165,
//                     "toPlayer": 169,
//                     "fromPos": 16,
//                     "toPos": 15,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 169,
//                     "toPlayer": 159,
//                     "fromPos": 15,
//                     "toPos": 20,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 159,
//                 "pos": 26,
//                 "action": "SHOTMISS"
//             }
//         },
//         {
//             "time": 14,
//             "touch" : 3,
//             "team" : "Molde",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 21,
//                 "typeAction" : "Innkast",
//                 "player" : 162,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 162,
//                     "toPlayer": 172,
//                     "fromPos": 22,
//                     "toPos": 22,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 172,
//                     "toPlayer": 169,
//                     "fromPos": 22,
//                     "toPos": 22,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 169,
//                 "pos": 22,
//                 "action": "SHOTMISS"
//             }
//         },
//         {
//             "time": 17,
//             "touch" : 7,
//             "team" : "Tromsø",
//             "breakthrough" : "Pasning bakrom",
//             "breakthroughPlayer" : "Thomas Kind Bendiksen",
//             "typeOfAttack" : "Kontring",
//             "attackStart" : {
//                 "pos" : 11,
//                 "typeAction" : "5 meter",
//                 "player" : 390,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 402,
//                     "toPlayer": 411,
//                     "fromPos": 10,
//                     "toPos": 21,
//                     "action": "KEYPASS"
//                 },
//                 {
//                     "fromPlayer": 411,
//                     "toPlayer": 413,
//                     "fromPos": 22,
//                     "toPos": 24,
//                     "action": "CROSS"
//                 }
//             ],
//             "finish" : {
//                 "player": 413,
//                 "pos": 24,
//                 "action": "SHOTMISS"
//             }
//         },
//         {
//             "time": 18,
//             "touch" : 3,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 18,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 165,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 165,
//                     "toPlayer": 177,
//                     "fromPos": 18,
//                     "toPos": 18,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 177,
//                 "pos": 18,
//                 "action": "SHOTTARGET"
//             }
//         },
//         {
//             "time": 26,
//             "touch" : 3,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 15,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 411,
//             },
//             "passes" : [],
//             "finish" : {
//                 "player": 411,
//                 "pos": 25,
//                 "action": "SHOTTARGET"
//             }
//         },
//         {
//             "time": 44,
//             "touch" : 3,
//             "team" : "Molde",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 22,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 175,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 175,
//                     "toPlayer": 177,
//                     "fromPos": 22,
//                     "toPos": 22,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 177,
//                     "toPlayer": 167,
//                     "fromPos": 22,
//                     "toPos": 23,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 167,
//                 "pos": 23,
//                 "action": "SHOTTARGET"
//             }
//         },
//         {
//             "time": 54,
//             "touch" : 3,
//             "team" : "Molde",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning langt angrep",
//             "attackStart" : {
//                 "pos" : 10,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 163,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 163,
//                     "toPlayer": 172,
//                     "fromPos": 22,
//                     "toPos": 22,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 172,
//                     "toPlayer": 159,
//                     "fromPos": 22,
//                     "toPos": 23,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 159,
//                     "toPlayer": 169,
//                     "fromPos": 11,
//                     "toPos": 13,
//                     "action": "LONGPASS"
//                 },
//                 {
//                     "fromPlayer": 169,
//                     "toPlayer": 167,
//                     "fromPos": 22,
//                     "toPos": 18,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 167,
//                 "pos": 18,
//                 "action": "SHOTMISS"
//             }
//         },
//         {
//             "time": 57,
//             "touch" : 3,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Etablert spill",
//             "attackStart" : {
//                 "pos" : 20,
//                 "typeAction" : "Innkast",
//                 "player" : 163,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 402,
//                     "toPlayer": 394,
//                     "fromPos": 15,
//                     "toPos": 14,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 394,
//                     "toPlayer": 412,
//                     "fromPos": 14,
//                     "toPos": 18,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 412,
//                     "toPlayer": 402,
//                     "fromPos": 14,
//                     "toPos": 14,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 402,
//                     "toPlayer": 394,
//                     "fromPos": 14,
//                     "toPos": 17,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 394,
//                     "toPlayer": 396,
//                     "fromPos": 13,
//                     "toPos": 12,
//                     "action": "PASS"
//                 },

//                 {
//                     "fromPlayer": 396,
//                     "toPlayer": 407,
//                     "fromPos": 12,
//                     "toPos": 16,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 407,
//                 "pos": 25,
//                 "action": "SHOTTARGET"
//             }
//         },
//         {
//             "time": 58,
//             "touch" : 3,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 26,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 404,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 404,
//                     "toPlayer": 413,
//                     "fromPos": 26,
//                     "toPos": 23,
//                     "action": "CROSS"
//                 }
//             ],
//             "finish" : {
//                 "player": 413,
//                 "pos": 23,
//                 "action": "SHOTMISS"
//             }
//         },
//         {
//             "time": 82,
//             "touch" : 2,
//             "team" : "Molde",
//             "breakthrough" : "1vs1 Mellomrom",
//             "breakthroughPlayer" : "Mats Møller Dæhli",
//             "typeOfAttack" : "Gjenvinning langt angrep",
//             "attackStart" : {
//                 "pos" : 11,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 165,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 165,
//                     "toPlayer": 159,
//                     "fromPos": 11,
//                     "toPos": 11,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 159,
//                     "toPlayer": 163,
//                     "fromPos": 11,
//                     "toPos": 11,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 163,
//                     "toPlayer": 167,
//                     "fromPos": 11,
//                     "toPos": 10,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 167,
//                     "toPlayer": 162,
//                     "fromPos": 10,
//                     "toPos": 9,
//                     "action": "PASS"
//                 },
//                  {
//                     "fromPlayer": 162,
//                     "toPlayer": 167,
//                     "fromPos": 13,
//                     "toPos": 14,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 167,
//                     "toPlayer": 162,
//                     "fromPos": 13,
//                     "toPos": 21,
//                     "action": "PASS"
//                 },
//                  {
//                     "fromPlayer": 162,
//                     "toPlayer": 166,
//                     "fromPos": 21,
//                     "toPos": 21,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 166,
//                     "toPlayer": 177,
//                     "fromPos": 22,
//                     "toPos": 22,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 177,
//                 "pos": 22,
//                 "action": "SHOTMISS"
//             }
//         },
//         {
//             "time": 84,
//             "touch" : 3,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Kontring",
//             "attackStart" : {
//                 "pos" : 15,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 403,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 403,
//                     "toPlayer": 413,
//                     "fromPos": 15,
//                     "toPos": 20,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 413,
//                     "toPlayer": 406,
//                     "fromPos": 20,
//                     "toPos": 26,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 406,
//                     "toPlayer": 394,
//                     "fromPos": 26,
//                     "toPos": 23,
//                     "action": "CROSS"
//                 },
//                 {
//                     "fromPlayer": 394,
//                     "toPlayer": 402,
//                     "fromPos": 23,
//                     "toPos": 19,
//                     "action": "PASS"
//                 },
//             ],
//             "finish" : {
//                 "player": 402,
//                 "pos": 19,
//                 "action": "SHOTMISS"
//             }
//         },
//         {
//             "time": 87,
//             "touch" : 3,
//             "team" : "Molde",
//             "breakthrough" : "Pasning Mellomrom",
//             "breakthroughPlayer" : "Mats Møller Dæhli",
//             "typeOfAttack" : "Etablert spill",
//             "attackStart" : {
//                 "pos" : 10,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 162,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 162,
//                     "toPlayer": 163,
//                     "fromPos": 10,
//                     "toPos": 6,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 163,
//                     "toPlayer": 159,
//                     "fromPos": 6,
//                     "toPos": 12,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 159,
//                     "toPlayer": 177,
//                     "fromPos": 12,
//                     "toPos": 15,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 177,
//                     "toPlayer": 166,
//                     "fromPos": 15,
//                     "toPos": 15,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 166,
//                     "toPlayer": 159,
//                     "fromPos": 15,
//                     "toPos": 15,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 159,
//                     "toPlayer": 162,
//                     "fromPos": 15,
//                     "toPos": 13,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 162,
//                     "toPlayer": 157,
//                     "fromPos": 14,
//                     "toPos": 11,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 157,
//                     "toPlayer": 166,
//                     "fromPos": 11,
//                     "toPos": 16,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 166,
//                     "toPlayer": 167,
//                     "fromPos": 16,
//                     "toPos": 19,
//                     "action": "KEYPASS"
//                 },
//                 {
//                     "fromPlayer": 167,
//                     "toPlayer": 181,
//                     "fromPos": 19,
//                     "toPos": 19,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 181,
//                     "toPlayer": 167,
//                     "fromPos": 19,
//                     "toPos": 19,
//                     "action": "KEYPASS"
//                 },
//             ],
//             "finish" : {
//                 "player": 167,
//                 "pos": 19,
//                 "action": "SHOTMISS"
//             }
//         },
//        {
//             "time": 89,
//             "touch" : 3,
//             "team" : "Tromsø",
//             "breakthrough" : "None",
//             "breakthroughPlayer" : "None",
//             "typeOfAttack" : "Gjenvinning kort angrep",
//             "attackStart" : {
//                 "pos" : 15,
//                 "typeAction" : "Gjenvinning",
//                 "player" : 399,
//             },
//             "passes": [
//                 {
//                     "fromPlayer": 399,
//                     "toPlayer": 396,
//                     "fromPos": 15,
//                     "toPos": 19,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 396,
//                     "toPlayer": 406,
//                     "fromPos": 19,
//                     "toPos": 18,
//                     "action": "PASS"
//                 },
//                 {
//                     "fromPlayer": 406,
//                     "toPlayer": 403,
//                     "fromPos": 18,
//                     "toPos": 22,
//                     "action": "PASS"
//                 }
//             ],
//             "finish" : {
//                 "player": 403,
//                 "pos": 22,
//                 "action": "SHOTTARGET"
//             }
//         },
//     ]
// });

insertMatch({
    "hometeam" : "Tromsø",
    "awayteam" : "Valerenga",
    "score" : "1-0",
    "date" : Date.now(),
    "attacks": [
             {
            "time": 7,
            "touch" : 4,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 17,
                "typeAction" : "Gjenvinning",
                "player" : 394,
            },
            "passes": [
                {
                    "fromPlayer": 394,
                    "toPlayer": 407,
                    "fromPos": 17,
                    "toPos": 18,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 407,
                "pos": 18,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 8,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "Pasning bakrom",
            "breakthroughPlayer" : "Thomas Drage",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 11,
                "typeAction" : "Gjenvinning",
                "player" : 406,
            },
            "passes": [
                {
                    "fromPlayer": 406,
                    "toPlayer": 394,
                    "fromPos": 11,
                    "toPos": 13,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 394,
                    "toPlayer": 403,
                    "fromPos": 13,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 403,
                    "toPlayer": 404,
                    "fromPos": 18,
                    "toPos": 23,
                    "action": "KEYPASS"
                }
            ],
            "finish" : {
                "player": 404,
                "pos": 23,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 12,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Kontring",
            "attackStart" : {
                "pos" : 11,
                "typeAction" : "Gjenvinning",
                "player" : 413,
            },
            "passes": [
                {
                    "fromPlayer": 413,
                    "toPlayer": 404,
                    "fromPos": 11,
                    "toPos": 12,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 404,
                    "toPlayer": 413,
                    "fromPos": 12,
                    "toPos": 15,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 413,
                    "toPlayer": 403,
                    "fromPos": 14,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 403,
                    "toPlayer": 394,
                    "fromPos": 18,
                    "toPos": 22,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 394,
                    "toPlayer": 413,
                    "fromPos": 22,
                    "toPos": 23,
                    "action": "PASS"
                },
            ],
            "finish" : {
                "player": 413,
                "pos": 23,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 15,
            "touch" : 7,
            "team" : "Vålerenga",
            "breakthrough" : "Pasning bakrom",
            "breakthroughPlayer" : "Diego Calvo",
            "typeOfAttack" : "Etablert langt angrep",
            "attackStart" : {
                "pos" : 6,
                "typeAction" : "Gjenvinning",
                "player" : 255,
            },
            "passes": [
                {
                    "fromPlayer": 255,
                    "toPlayer": 252,
                    "fromPos": 6,
                    "toPos": 6,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 252,
                    "toPlayer": 266,
                    "fromPos": 10,
                    "toPos": 10,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 266,
                    "toPlayer": 261,
                    "fromPos": 10,
                    "toPos": 11,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 261,
                    "toPlayer": 256,
                    "fromPos": 11,
                    "toPos": 11,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 256,
                    "toPlayer": 260,
                    "fromPos": 11,
                    "toPos": 16,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 260,
                    "toPlayer": 256,
                    "fromPos": 16,
                    "toPos": 12,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 256,
                    "toPlayer": 250,
                    "fromPos": 12,
                    "toPos": 7,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 250,
                    "toPlayer": 255,
                    "fromPos": 7,
                    "toPos": 6,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 255,
                    "toPlayer": 251,
                    "fromPos": 10,
                    "toPos": 13,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 251,
                    "toPlayer": 255,
                    "fromPos": 13,
                    "toPos": 9,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 255,
                    "toPlayer": 250,
                    "fromPos": 9,
                    "toPos": 7,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 250,
                    "toPlayer": 255,
                    "fromPos": 11,
                    "toPos": 10,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 255,
                    "toPlayer": 260,
                    "fromPos": 10,
                    "toPos": 16,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 260,
                    "toPlayer": 256,
                    "fromPos": 20,
                    "toPos": 25,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 256,
                    "toPlayer": 480,
                    "fromPos": 25,
                    "toPos": 24,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 480,
                "pos": 24,
                "action": "SHOTGOAL"
            }
        },
        {
            "time": 18,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 18,
                "typeAction" : "Gjenvinning",
                "player" : 165,
            },
            "passes": [
                {
                    "fromPlayer": 165,
                    "toPlayer": 177,
                    "fromPos": 18,
                    "toPos": 18,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 177,
                "pos": 18,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 26,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 15,
                "typeAction" : "Gjenvinning",
                "player" : 411,
            },
            "passes" : [],
            "finish" : {
                "player": 411,
                "pos": 25,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 44,
            "touch" : 3,
            "team" : "Molde",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 22,
                "typeAction" : "Gjenvinning",
                "player" : 175,
            },
            "passes": [
                {
                    "fromPlayer": 175,
                    "toPlayer": 177,
                    "fromPos": 22,
                    "toPos": 22,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 177,
                    "toPlayer": 167,
                    "fromPos": 22,
                    "toPos": 23,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 167,
                "pos": 23,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 54,
            "touch" : 3,
            "team" : "Molde",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning langt angrep",
            "attackStart" : {
                "pos" : 10,
                "typeAction" : "Gjenvinning",
                "player" : 163,
            },
            "passes": [
                {
                    "fromPlayer": 163,
                    "toPlayer": 172,
                    "fromPos": 22,
                    "toPos": 22,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 172,
                    "toPlayer": 159,
                    "fromPos": 22,
                    "toPos": 23,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 159,
                    "toPlayer": 169,
                    "fromPos": 11,
                    "toPos": 13,
                    "action": "LONGPASS"
                },
                {
                    "fromPlayer": 169,
                    "toPlayer": 167,
                    "fromPos": 22,
                    "toPos": 18,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 167,
                "pos": 18,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 57,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Etablert spill",
            "attackStart" : {
                "pos" : 20,
                "typeAction" : "Innkast",
                "player" : 163,
            },
            "passes": [
                {
                    "fromPlayer": 402,
                    "toPlayer": 394,
                    "fromPos": 15,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 394,
                    "toPlayer": 412,
                    "fromPos": 14,
                    "toPos": 18,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 412,
                    "toPlayer": 402,
                    "fromPos": 14,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 402,
                    "toPlayer": 394,
                    "fromPos": 14,
                    "toPos": 17,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 394,
                    "toPlayer": 396,
                    "fromPos": 13,
                    "toPos": 12,
                    "action": "PASS"
                },

                {
                    "fromPlayer": 396,
                    "toPlayer": 407,
                    "fromPos": 12,
                    "toPos": 16,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 407,
                "pos": 25,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 58,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 26,
                "typeAction" : "Gjenvinning",
                "player" : 404,
            },
            "passes": [
                {
                    "fromPlayer": 404,
                    "toPlayer": 413,
                    "fromPos": 26,
                    "toPos": 23,
                    "action": "CROSS"
                }
            ],
            "finish" : {
                "player": 413,
                "pos": 23,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 82,
            "touch" : 2,
            "team" : "Molde",
            "breakthrough" : "1vs1 Mellomrom",
            "breakthroughPlayer" : "Mats Møller Dæhli",
            "typeOfAttack" : "Gjenvinning langt angrep",
            "attackStart" : {
                "pos" : 11,
                "typeAction" : "Gjenvinning",
                "player" : 165,
            },
            "passes": [
                {
                    "fromPlayer": 165,
                    "toPlayer": 159,
                    "fromPos": 11,
                    "toPos": 11,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 159,
                    "toPlayer": 163,
                    "fromPos": 11,
                    "toPos": 11,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 163,
                    "toPlayer": 167,
                    "fromPos": 11,
                    "toPos": 10,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 167,
                    "toPlayer": 162,
                    "fromPos": 10,
                    "toPos": 9,
                    "action": "PASS"
                },
                 {
                    "fromPlayer": 162,
                    "toPlayer": 167,
                    "fromPos": 13,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 167,
                    "toPlayer": 162,
                    "fromPos": 13,
                    "toPos": 21,
                    "action": "PASS"
                },
                 {
                    "fromPlayer": 162,
                    "toPlayer": 166,
                    "fromPos": 21,
                    "toPos": 21,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 166,
                    "toPlayer": 177,
                    "fromPos": 22,
                    "toPos": 22,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 177,
                "pos": 22,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 84,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Kontring",
            "attackStart" : {
                "pos" : 15,
                "typeAction" : "Gjenvinning",
                "player" : 403,
            },
            "passes": [
                {
                    "fromPlayer": 403,
                    "toPlayer": 413,
                    "fromPos": 15,
                    "toPos": 20,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 413,
                    "toPlayer": 406,
                    "fromPos": 20,
                    "toPos": 26,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 406,
                    "toPlayer": 394,
                    "fromPos": 26,
                    "toPos": 23,
                    "action": "CROSS"
                },
                {
                    "fromPlayer": 394,
                    "toPlayer": 402,
                    "fromPos": 23,
                    "toPos": 19,
                    "action": "PASS"
                },
            ],
            "finish" : {
                "player": 402,
                "pos": 19,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 87,
            "touch" : 3,
            "team" : "Molde",
            "breakthrough" : "Pasning Mellomrom",
            "breakthroughPlayer" : "Mats Møller Dæhli",
            "typeOfAttack" : "Etablert spill",
            "attackStart" : {
                "pos" : 10,
                "typeAction" : "Gjenvinning",
                "player" : 162,
            },
            "passes": [
                {
                    "fromPlayer": 162,
                    "toPlayer": 163,
                    "fromPos": 10,
                    "toPos": 6,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 163,
                    "toPlayer": 159,
                    "fromPos": 6,
                    "toPos": 12,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 159,
                    "toPlayer": 177,
                    "fromPos": 12,
                    "toPos": 15,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 177,
                    "toPlayer": 166,
                    "fromPos": 15,
                    "toPos": 15,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 166,
                    "toPlayer": 159,
                    "fromPos": 15,
                    "toPos": 15,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 159,
                    "toPlayer": 162,
                    "fromPos": 15,
                    "toPos": 13,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 162,
                    "toPlayer": 157,
                    "fromPos": 14,
                    "toPos": 11,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 157,
                    "toPlayer": 166,
                    "fromPos": 11,
                    "toPos": 16,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 166,
                    "toPlayer": 167,
                    "fromPos": 16,
                    "toPos": 19,
                    "action": "KEYPASS"
                },
                {
                    "fromPlayer": 167,
                    "toPlayer": 181,
                    "fromPos": 19,
                    "toPos": 19,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 181,
                    "toPlayer": 167,
                    "fromPos": 19,
                    "toPos": 19,
                    "action": "KEYPASS"
                },
            ],
            "finish" : {
                "player": 167,
                "pos": 19,
                "action": "SHOTMISS"
            }
        }
    ]
});



function insertMatch(object){
    var commands = [];
    commands.push({ "index" : { "_index" :"matches", "_type" : "match"} });
    commands.push(object);
    var elasticSearchClient = new ElasticSearchClient(serverOptions);

    elasticSearchClient.bulk(commands, {})
        .on('data', function(data) {
            data = JSON.parse(data);
            insertAttacksAndPasses(object.attacks, data.items[0].create._id);
        })
        .on('done', function(done){
            console.log(done);
        })
        .on('error', function(error){
            console.log(error);

        })
        .exec();

}

function insertAttacksAndPasses(attackObj, matchId){
    var i, y;
    var passes = null;
    var pass = null;
    var attack = null;
    for(i=0; i < attackObj.length; i++){
        attack = attackObj[i];
        attack["matchId"] = matchId;

        insertObject(attack, "attacks", "attack");
        passes = attackObj[i].passes;

        for(y=0; y < passes.length; y++){
            pass = passes[y];
            pass["matchId"] = matchId;
            insertObject(pass, "passes", "pass");
        }
    }    
}

function insertPasses(attackObj, matchId){
    var i, y;
    var passes = null;
    var pass = null;

    for(i=0; i < attackObj.length; i++){
        passes = attackObj[i].passes;

        for(y=0; y < passes.length; y++){
            pass = passes[y];
            pass["matchId"] = matchId;
            insertObject(pass, "passes", "pass");
        }
    }    
}

function insertObject(object, indexName, typeName){
    var commands = [];
    commands.push({ "index" : { "_index" :indexName, "_type" : typeName} });

    commands.push(object);

    var elasticSearchClient = new ElasticSearchClient(serverOptions);

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
}
