var serverOptions = {
    host: 'localhost',
    port: 9200,
    secure: false
};

ElasticSearchClient = require('elasticsearchclient');


insertMatch({
    "hometeam" : "Tromsø",
    "awayteam" : "Rosenborg",
    "score" : "1-0",
    "date" : '2013-15-09',
    "attacks": [
        {
            "time": 4,
            "touch" : 1,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Dødball",
            "attackStart" : {
                "pos" : 17,
                "typeAction" : "Frispark",
                "player" : 403,
            },
            "passes": [
                {
                    "fromPlayer": 403,
                    "toPlayer": 393,
                    "fromPos": 17,
                    "toPos": 23,
                    "action": "CROSS"
                }
            ],
            "finish" : {
                "player": 393,
                "pos": 23,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 11,
            "touch" : 7,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Kontring",
            "attackStart" : {
                "pos" : 8,
                "typeAction" : "Gjenvinning",
                "player" : 402,
            },
            "passes": [
                {
                    "fromPlayer": 402,
                    "toPlayer": 404,
                    "fromPos": 8,
                    "toPos": 8,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 404,
                    "toPlayer": 407,
                    "fromPos": 8,
                    "toPos": 11,
                    "action": "PASS"
                },
                 {
                    "fromPlayer": 407,
                    "toPlayer": 403,
                    "fromPos": 11,
                    "toPos": 13,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 403,
                    "toPlayer": 411,
                    "fromPos": 17,
                    "toPos": 23,
                    "action": "CROSS"
                }
            ],
            "finish" : {
                "player": 411,
                "pos": 23,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 21,
            "touch" : 5,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Etablert spill",
            "attackStart" : {
                "pos" : 17,
                "typeAction" : "Innkast",
                "player" : 403,

            },
            "passes": [
                {
                    "fromPlayer": 403,
                    "toPlayer": 402,
                    "fromPos": 17,
                    "toPos": 17,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 402,
                    "toPlayer": 403,
                    "fromPos": 17,
                    "toPos": 17,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 403,
                    "toPlayer": 394,
                    "fromPos": 17,
                    "toPos": 21,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 394,
                    "toPlayer": 411,
                    "fromPos": 21,
                    "toPos": 21,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 411,
                "pos": 22,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 22,
            "touch" : 5,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 13,
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
                },
                {
                    "fromPlayer": 407,
                    "toPlayer": 402,
                    "fromPos": 18,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 402,
                    "toPlayer": 395,
                    "fromPos": 14,
                    "toPos": 26,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 395,
                    "toPlayer": 404,
                    "fromPos": 26,
                    "toPos": 25,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 404,
                "pos": 24,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 23,
            "touch" : 5,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 15,
                "typeAction" : "Gjenvinning",
                "player" : 406,
            },
            "passes": [
                {
                    "fromPlayer": 406,
                    "toPlayer": 393,
                    "fromPos": 15,
                    "toPos": 10,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 393,
                    "toPlayer": 402,
                    "fromPos": 10,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 402,
                    "toPlayer": 411,
                    "fromPos": 14,
                    "toPos": 18,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 411,
                    "toPlayer": 394,
                    "fromPos": 18,
                    "toPos": 17,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 394,
                    "toPlayer": 404,
                    "fromPos": 17,
                    "toPos": 23,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 404,
                "pos": 23,
                "action": "SHOTGOAL"
            }
        },
        {
            "time": 76,
            "touch" : 5,
            "team" : "Tromsø",
            "breakthrough" : "Pasning Bakrom",
            "breakthroughPlayer" : "Remi Johansen",
            "typeOfAttack" : "Gjenvinning langt angrep",
            "attackStart" : {
                "pos" : 11,
                "typeAction" : "Gjenvinning",
                "player" : 396,

            },
            "passes": [
                {
                    "fromPlayer": 396,
                    "toPlayer": 413,
                    "fromPos": 11,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 413,
                    "toPlayer": 403,
                    "fromPos": 14,
                    "toPos": 113,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 403,
                    "toPlayer": 402,
                    "fromPos": 13,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 402,
                    "toPlayer": 406,
                    "fromPos": 14,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 406,
                    "toPlayer": 403,
                    "fromPos": 18,
                    "toPos": 22,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 403,
                    "toPlayer": 407,
                    "fromPos": 22,
                    "toPos": 23,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 411,
                "pos": 25,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 80,
            "touch" : 15,
            "team" : "Rosenborg",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Etablert spill",
            "attackStart" : {
                "pos" : 16,
                "typeAction" : "Innkast",
                "player" : 6
            },
            "passes": [                
                {
                    "fromPlayer": 6,
                    "toPlayer": 25,
                    "fromPos": 16,
                    "toPos": 19,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 25,
                    "toPlayer": 6,
                    "fromPos": 16,
                    "toPos": 16,
                    "action": "PASS"
                },
                {
                   "fromPlayer": 6,
                    "toPlayer": 22,
                    "fromPos": 16,
                    "toPos": 16,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 22,
                    "toPlayer": 7,
                    "fromPos": 20,
                    "toPos": 21,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 7,
                    "toPlayer": 26,
                    "fromPos": 21,
                    "toPos": 18,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 26,
                    "toPlayer": 7,
                    "fromPos": 18,
                    "toPos": 21,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 7,
                    "toPlayer": 16,
                    "fromPos": 21,
                    "toPos": 22,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 16,
                    "toPlayer": 25,
                    "fromPos": 22,
                    "toPos": 23,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 25,
                "pos": 23,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 83,
            "touch" : 1,
            "team" : "Rosenborg",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 20,
                "typeAction" : "Frispark",
                "player" : 6
            },
            "passes": [   
                {
                    "fromPlayer": 6,
                    "toPlayer": 16,
                    "fromPos": 26,
                    "toPos": 23,
                    "action": "PASS"
                }             
            ],
            "finish" : {
                "player": 16,
                "pos": 23,
                "action": "SHOTTARGET"
            }
        },
    ]
});

insertMatch({
    "hometeam" : "Tromsø",
    "awayteam" : "Start",
    "score" : "2-3",
    "date" : '2013-09-29',
    "attacks": [
             {
            "time": 40,
            "touch" : 4,
            "team" : "Start",
            "breakthrough" : "Pasning Bakrom",
            "breakthroughPlayer" : "Håkon Opdal",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 5,
                "typeAction" : "Gjenvinning",
                "player" : 341,
            },
            "passes": [
                {
                    "fromPlayer": 341,
                    "toPlayer": 333,
                    "fromPos": 5,
                    "toPos": 2,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 333,
                    "toPlayer": 347,
                    "fromPos": 2,
                    "toPos": 14,
                    "action": "KEYPASS"
                }
            ],
            "finish" : {
                "player": 347,
                "pos": 17,
                "action": "SHOTGOAL"
            }
        },
        {
            "time": 48,
            "touch" : 3,
            "team" : "Start",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Dødball",
            "attackStart" : {
                "pos" : 21,
                "typeAction" : "Corner",
                "player" : 349,
            },
            "passes": [
                {
                    "fromPlayer": 349,
                    "toPlayer": 338,
                    "fromPos": 21,
                    "toPos": 17,
                    "action": "CROSS"
                }
            ],
            "finish" : {
                "player": 338,
                "pos": 17,
                "action": "SHOTGOAL"
            }
        },
        {
            "time": 62,
            "touch" : 3,
            "team" : "Start",
            "breakthrough" : "1vs1 Mellomrom",
            "breakthroughPlayer" : "Espen Hoff",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 11,
                "typeAction" : "Gjenvinning",
                "player" : 347,
            },
            "passes": [
                {
                    "fromPlayer": 347,
                    "toPlayer": 356,
                    "fromPos": 14,
                    "toPos": 17,
                    "action": "KEYPASS"
                }
            ],
            "finish" : {
                "player": 356,
                "pos": 17,
                "action": "SHOTGOAL"
            }
        },
        {
            "time": 67,
            "touch" : 7,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning langt angrep",
            "attackStart" : {
                "pos" : 11,
                "typeAction" : "Gjenvinning",
                "player" : 402,
            },
            "passes": [
                {
                    "fromPlayer": 402,
                    "toPlayer": 412,
                    "fromPos": 13,
                    "toPos": 16,
                    "action": "KEYPASS"
                },
                {
                    "fromPlayer": 412,
                    "toPlayer": 413,
                    "fromPos": 16,
                    "toPos": 17,
                    "action": "CROSS"
                }
            ],
            "finish" : {
                "player": 413,
                "pos": 17,
                "action": "SHOTGOAL",
                "touch" : 1
            }
        },
        {
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
        },
        {
            "time": 71,
            "touch" : 1,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Dødball",
            "attackStart" : {
                "pos" : 14,
                "typeAction" : "Frispark",
                "player" : 412,
            },
            "passes" : [],
            "finish" : {
                "player": 412,
                "pos": 14,
                "action": "SHOTTARGET",
                "touch" : 1
            }
        }
    ]
});

insertMatch({
    "hometeam" : "Molde",
    "awayteam" : "Tromsø",
    "score" : "1-0",
    "date" : '2013-06-10',
    "attacks": [
             {
            "time": 3,
            "touch" : 4,
            "team" : "Molde",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Kontring",
            "attackStart" : {
                "pos" : 6,
                "typeAction" : "Gjenvinning",
                "player" : 167,
            },
            "passes": [
                {
                    "fromPlayer": 167,
                    "toPlayer": 175,
                    "fromPos": 6,
                    "toPos": 17,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 175,
                "pos": 18,
                "action": "SHOTGOAL"
            }
        },
        {
            "time": 9,
            "touch" : 3,
            "team" : "Molde",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Kontring",
            "attackStart" : {
                "pos" : 12,
                "typeAction" : "Gjenvinning",
                "player" : 159,
            },
            "passes": [
                {
                    "fromPlayer": 159,
                    "toPlayer": 165,
                    "fromPos": 12,
                    "toPos": 16,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 165,
                    "toPlayer": 169,
                    "fromPos": 16,
                    "toPos": 15,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 169,
                    "toPlayer": 159,
                    "fromPos": 15,
                    "toPos": 20,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 159,
                "pos": 26,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 14,
            "touch" : 3,
            "team" : "Molde",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 21,
                "typeAction" : "Innkast",
                "player" : 162,
            },
            "passes": [
                {
                    "fromPlayer": 162,
                    "toPlayer": 172,
                    "fromPos": 22,
                    "toPos": 22,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 172,
                    "toPlayer": 169,
                    "fromPos": 22,
                    "toPos": 22,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 169,
                "pos": 22,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 17,
            "team" : "Tromsø",
            "breakthrough" : "Pasning Bakrom",
            "breakthroughPlayer" : "Thomas Kind Bendiksen",
            "typeOfAttack" : "Kontring",
            "attackStart" : {
                "pos" : 11,
                "typeAction" : "5-meter",
                "player" : 390,
            },
            "passes": [
                {
                    "fromPlayer": 402,
                    "toPlayer": 411,
                    "fromPos": 10,
                    "toPos": 21,
                    "action": "KEYPASS"
                },
                {
                    "fromPlayer": 411,
                    "toPlayer": 413,
                    "fromPos": 22,
                    "toPos": 24,
                    "action": "CROSS"
                }
            ],
            "finish" : {
                "player": 413,
                "pos": 24,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 18,
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
        },
       {
            "time": 89,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 15,
                "typeAction" : "Gjenvinning",
                "player" : 399,
            },
            "passes": [
                {
                    "fromPlayer": 399,
                    "toPlayer": 396,
                    "fromPos": 15,
                    "toPos": 19,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 396,
                    "toPlayer": 406,
                    "fromPos": 19,
                    "toPos": 18,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 406,
                    "toPlayer": 403,
                    "fromPos": 18,
                    "toPos": 22,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 403,
                "pos": 22,
                "action": "SHOTTARGET"
            }
        },
    ]
});

insertMatch({
    "hometeam" : "Tromsø",
    "awayteam" : "Vålerenga",
    "score" : "2-2",
    "date" : '2013-08-04',
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
            "team" : "Tromsø",
            "breakthrough" : "Pasning Bakrom",
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
            "team" : "Vålerenga",
            "breakthrough" : "Pasning Bakrom",
            "breakthroughPlayer" : "Diego Calvo",
            "typeOfAttack" : "Etablert angrep",
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
                "pos" : 15,
                "typeAction" : "Gjenvinning",
                "player" : 406,
            },
            "passes": [
                {
                    "fromPlayer": 406,
                    "toPlayer": 413,
                    "fromPos": 18,
                    "toPos": 22,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 413,
                "pos": 22,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 20,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 19,
                "typeAction" : "Gjenvinning",
                "player" : 402,
            },
            "passes" : [],
            "finish" : {
                "player": 402,
                "pos": 29,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 25,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Dødball",
            "attackStart" : {
                "pos" : 33,
                "typeAction" : "Corner",
                "player" : 402,
            },
            "passes": [
                {
                    "fromPlayer": 402,
                    "toPlayer": 406,
                    "fromPos": 33,
                    "toPos": 23,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 406,
                "pos": 23,
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
                "pos" : 18,
                "typeAction" : "Gjenvinning",
                "player" : 407,
            },
            "passes": [
            ],
            "finish" : {
                "player": 407,
                "pos": 18,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 32,
            "touch" : 3,
            "team" : "Vålerenga",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 18,
                "typeAction" : "Gjenvinning",
                "player" : 261,
            },
            "passes": [
                
            ],
            "finish" : {
                "player": 261,
                "pos": 18,
                "action": "SHOTGOAL"
            }
        },
        {
            "time": 36,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 23,
                "typeAction" : "Gjenvinning",
                "player" : 406,
            },
            "passes": [
                {
                    "fromPlayer": 406,
                    "toPlayer": 413,
                    "fromPos": 23,
                    "toPos": 25,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 413,
                    "toPlayer": 402,
                    "fromPos": 25,
                    "toPos": 19,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 402,
                "pos": 19,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 56,
            "team" : "Tromsø",
            "breakthrough" : "Pasning Bakrom",
            "breakthroughPlayer" : "Ruben Kristiansen",
            "typeOfAttack" : "Gjenvinning langt angrep",
            "attackStart" : {
                "pos" : 14,
                "typeAction" : "Gjenvinning",
                "player" : 406,
            },
            "passes": [
                {
                    "fromPlayer": 406,
                    "toPlayer": 393,
                    "fromPos": 14,
                    "toPos": 10,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 393,
                    "toPlayer": 402,
                    "fromPos": 10,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 402,
                    "toPlayer": 394,
                    "fromPos": 13,
                    "toPos": 13,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 394,
                    "toPlayer": 403,
                    "fromPos": 14,
                    "toPos": 17,
                    "action": "PASS"
                },
                 {
                    "fromPlayer": 403,
                    "toPlayer": 413,
                    "fromPos": 21,
                    "toPos": 23,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 413,
                "pos": 23,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 56,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 20,
                "typeAction" : "Gjenvinning",
                "player" : 397,
            },
            "passes": [
                {
                    "fromPlayer": 397,
                    "toPlayer": 406,
                    "fromPos": 20,
                    "toPos": 19,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 406,
                "pos": 19,
                "action": "SHOTGOAL"
            }
        },
        {
            "time": 62,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "Pasning Mellomrom",
            "breakthroughPlayer" : "Thomas Kind Bendiksen",
            "typeOfAttack" : "Gjenvinning langt angrep",
            "attackStart" : {
                "pos" : 13,
                "typeAction" : "Gjenvinning",
                "player" : 402,
            },
            "passes": [
                {
                    "fromPlayer": 402,
                    "toPlayer": 393,
                    "fromPos": 13,
                    "toPos": 9,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 393,
                    "toPlayer": 395,
                    "fromPos": 9,
                    "toPos": 11,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 395,
                    "toPlayer": 397,
                    "fromPos": 11,
                    "toPos": 12,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 397,
                    "toPlayer": 407,
                    "fromPos": 12,
                    "toPos": 15,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 407,
                    "toPlayer": 404,
                    "fromPos": 15,
                    "toPos": 16,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 404,
                    "toPlayer": 397,
                    "fromPos": 16,
                    "toPos": 16,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 397,
                    "toPlayer": 395,
                    "fromPos": 16,
                    "toPos": 11,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 395,
                    "toPlayer": 402,
                    "fromPos": 15,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 402,
                    "toPlayer": 407,
                    "fromPos": 14,
                    "toPos": 19,
                    "action": "KEYPASS"
                },
                {
                    "fromPlayer": 407,
                    "toPlayer": 413,
                    "fromPos": 19,
                    "toPos": 19,
                    "action": "KEYPASS"
                }
            ],
            "finish" : {
                "player": 413,
                "pos": 23,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 79,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 20,
                "typeAction" : "Innkast",
                "player" : 411,
            },
            "passes": [
                {
                    "fromPlayer": 411,
                    "toPlayer": 404,
                    "fromPos": 20,
                    "toPos": 25,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 404,
                    "toPlayer": 413,
                    "fromPos": 25,
                    "toPos": 23,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 413,
                    "toPlayer": 411,
                    "fromPos": 23,
                    "toPos": 23,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 411,
                "pos": 23,
                "action": "SHOTGOAL"
            }
        },
        {
            "time": 87,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 15,
                "typeAction" : "Innkast",
                "player" : 406,
            },
            "passes": [
                {
                    "fromPlayer": 406,
                    "toPlayer": 397,
                    "fromPos": 15,
                    "toPos": 15,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 397,
                    "toPlayer": 411,
                    "fromPos": 19,
                    "toPos": 25,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 411,
                "pos": 25,
                "action": "SHOTMISS"
            }
        }
    ]
});


insertMatch({
    "hometeam" : "Tromsø",
    "awayteam" : "Ålesund",
    "score" : "1-2",
    "date" : '2013-08-18',
    "attacks": [
		{
            "time": 13,
            "touch" : 4,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Dødball",
            "attackStart" : {
                "pos" : 33,
                "typeAction" : "Corner",
                "player" : 413,
            },
            "passes": [
                {
                    "fromPlayer": 413,
                    "toPlayer": 406,
                    "fromPos": 33,
                    "toPos": 23,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 406,
                "pos": 23,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 17,
            "touch" : 3,
            "team" : "Aalesund",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 23,
                "typeAction" : "Gjenvinning",
                "player" : 113,
            },
            "passes": [

            ],
            "finish" : {
                "player": 113,
                "pos": 23,
                "action": "SHOTGOAL"
            }
        },
        {
            "time": 24,
            "touch" : 3,
            "team" : "Aalesund",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Dødball",
            "attackStart" : {
                "pos" : 31,
                "typeAction" : "Corner",
                "player" : 105,
            },
            "passes": [
                {
                    "fromPlayer": 105,
                    "toPlayer": 115,
                    "fromPos": 31,
                    "toPos": 24,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 115,
                "pos": 24,
                "action": "SHOTGOAL"
            }
        },
        {
            "time": 36,
            "touch" : 7,
            "team" : "Aalesund",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Kontring",
            "attackStart" : {
                "pos" : 7,
                "typeAction" : "Gjenvinning",
                "player" : 104,
            },
            "passes": [
                {
                    "fromPlayer": 104,
                    "toPlayer": 113,
                    "fromPos": 7,
                    "toPos": 11,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 113,
                    "toPlayer": 106,
                    "fromPos": 18,
                    "toPos": 22,
                    "action": "KEYPASS"
                }
            ],
            "finish" : {
                "player": 106,
                "pos": 22,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 43,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 26,
                "typeAction" : "Gjenvinning",
                "player" : 407,
            },
            "passes": [
                {
                    "fromPlayer": 407,
                    "toPlayer": 404,
                    "fromPos": 26,
                    "toPos": 25,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 404,
                    "toPlayer": 402,
                    "fromPos": 24,
                    "toPos": 23,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 402,
                "pos": 23,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 47,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 3,
                "typeAction" : "Gjenvinning",
                "player" : 393,
            },
            "passes" : [
            	{
                    "fromPlayer": 393,
                    "toPlayer": 394,
                    "fromPos": 2,
                    "toPos": 5,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 394,
                    "toPlayer": 406,
                    "fromPos": 9,
                    "toPos": 10,
                    "action": "PASS"
                },
            	{
                    "fromPlayer": 406,
                    "toPlayer": 394,
                    "fromPos": 10,
                    "toPos": 9,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 394,
                    "toPlayer": 393,
                    "fromPos": 10,
                    "toPos": 6,
                    "action": "PASS"
                },
             	{
                    "fromPlayer": 393,
                    "toPlayer": 396,
                    "fromPos": 10,
                    "toPos": 11,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 396,
                    "toPlayer": 410,
                    "fromPos": 11,
                    "toPos": 10,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 402,
                "pos": 29,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 50,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Etablert angrep",
            "attackStart" : {
                "pos" : 11,
                "typeAction" : "Corner",
                "player" : 410,
            },
            "passes": [
                {
                    "fromPlayer": 410,
                    "toPlayer": 413,
                    "fromPos": 15,
                    "toPos": 15,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 413,
                    "toPlayer": 404,
                    "fromPos": 15,
                    "toPos": 9,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 404,
                    "toPlayer": 413,
                    "fromPos": 9,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 413,
                    "toPlayer": 410,
                    "fromPos": 14,
                    "toPos": 15,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 410,
                    "toPlayer": 413,
                    "fromPos": 15,
                    "toPos": 19,
                    "action": "PASS"
                },
				{
                    "fromPlayer": 413,
                    "toPlayer": 404,
                    "fromPos": 19,
                    "toPos": 19,
                    "action": "PASS"
                },
        		{
                    "fromPlayer": 404,
                    "toPlayer": 397,
                    "fromPos": 20,
                    "toPos": 26,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 397,
                    "toPlayer": 404,
                    "fromPos": 26,
                    "toPos": 20,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 404,
                    "toPlayer": 411,
                    "fromPos": 19,
                    "toPos": 25,
                    "action": "PASS"
                },
            ],
            "finish" : {
                "player": 411,
                "pos": 25,
                "action": "SHOTMISS"
            }
        },
        {
            "time": 64,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Dødball",
            "attackStart" : {
                "pos" : 33,
                "typeAction" : "Corner",
                "player" : 406,
            },
            "passes": [
                {
                    "fromPlayer": 402,
                    "toPlayer": 393,
                    "fromPos": 33,
                    "toPos": 23,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 393,
                "pos": 23,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 68,
            "touch" : 2,
            "team" : "Tromsø",
            "breakthrough" : "Pasning Bakrom",
            "breakthroughPlayer" : "Ruben Kristiansen",
            "typeOfAttack" : "Etablert angrep",
            "attackStart" : {
                "pos" : 2,
                "typeAction" : "Gjenvinning",
                "player" : 390,
            },
            "passes": [
                {
                    "fromPlayer": 390,
                    "toPlayer": 413,
                    "fromPos": 2,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 413,
                    "toPlayer": 411,
                    "fromPos": 14,
                    "toPos": 14,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 411,
                    "toPlayer": 394,
                    "fromPos": 14,
                    "toPos": 13,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 394,
                    "toPlayer": 404,
                    "fromPos": 17,
                    "toPos": 23,
                    "action": "PASS"
                },
                 {
                    "fromPlayer": 404,
                    "toPlayer": 481,
                    "fromPos": 23,
                    "toPos": 26,
                    "action": "PASS"
                },
				{
                    "fromPlayer": 481,
                    "toPlayer": 394,
                    "fromPos": 25,
                    "toPos": 22,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 394,
                "pos": 22,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 76,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Dødball",
            "attackStart" : {
                "pos" : 31,
                "typeAction" : "Gjenvinning",
                "player" : 402,
            },
            "passes": [
                {
                    "fromPlayer": 402,
                    "toPlayer": 406,
                    "fromPos": 20,
                    "toPos": 19,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 406,
                "pos": 23,
                "action": "SHOTGOAL"
            }
        },
        {
            "time": 84,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 22,
                "typeAction" : "Gjenvinning",
                "player" : 394,
            },
            "passes": [
                {
                    "fromPlayer": 394,
                    "toPlayer": 413,
                    "fromPos": 22,
                    "toPos": 23,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 413,
                "pos": 23,
                "action": "SHOTTARGET"
            }
        },
        {
            "time": 79,
            "touch" : 3,
            "team" : "Tromsø",
            "breakthrough" : "None",
            "breakthroughPlayer" : "None",
            "typeOfAttack" : "Gjenvinning kort angrep",
            "attackStart" : {
                "pos" : 20,
                "typeAction" : "Innkast",
                "player" : 411,
            },
            "passes": [
                {
                    "fromPlayer": 411,
                    "toPlayer": 404,
                    "fromPos": 20,
                    "toPos": 25,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 404,
                    "toPlayer": 413,
                    "fromPos": 25,
                    "toPos": 23,
                    "action": "PASS"
                },
                {
                    "fromPlayer": 413,
                    "toPlayer": 411,
                    "fromPos": 23,
                    "toPos": 23,
                    "action": "PASS"
                }
            ],
            "finish" : {
                "player": 411,
                "pos": 23,
                "action": "SHOTGOAL"
            }
        }
    ]
});

insertMatch({
      "date": "2013-10-19",
      "hometeam": "Tromsø",
      "awayteam": "Viking",
      "score": "4-3",
      "attacks": [
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "68",
            "pos": "15"
          },
          "finish": {
            "player": "72",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "time": "4",
          "breakthroughPlayer": "Makthar Thioune",
          "team": "Viking",
          "passes": [
            {
              "fromPlayer": "68",
              "toPos": "23",
              "fromPos": "15",
              "toPlayer": "72",
              "action": "KEYPASS"
            }
          ],
          "breakthrough": "Pasning Bakrom"
        },
        {
          "finish": {
            "player": "404",
            "action": "SHOTGOAL",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "404",
            "pos": "23"
          },
          "time": "10",
          "breakthroughPlayer": "None",
          "passes": [],
          "team": "Tromsø",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "394",
            "pos": "2"
          },
          "finish": {
            "player": "411",
            "action": "SHOTGOAL",
            "pos": "23"
          },
          "time": "18",
          "breakthroughPlayer": "None",
          "team": "Tromsø",
          "passes": [
            {
              "fromPlayer": "394",
              "toPos": "5",
              "fromPos": "2",
              "toPlayer": "403",
              "action": "PASS"
            },
            {
              "fromPlayer": "403",
              "toPos": "22",
              "fromPos": "9",
              "toPlayer": "404",
              "action": "KEYPASS"
            },
            {
              "fromPlayer": "404",
              "toPos": "23",
              "fromPos": "22",
              "toPlayer": "411",
              "action": "PASS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "finish": {
            "player": "395",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "411",
            "pos": "26"
          },
          "time": "27",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "411",
              "toPos": "22",
              "fromPos": "26",
              "action": "CROSS",
              "toPlayer": "393"
            },
            {
              "fromPlayer": "393",
              "toPos": "23",
              "fromPos": "22",
              "action": "PASS",
              "toPlayer": "395"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "5-meter",
            "player": "390",
            "pos": "3"
          },
          "finish": {
            "player": "406",
            "action": "SHOTMISS",
            "pos": "19"
          },
          "time": "34",
          "breakthroughPlayer": "Morten Moldskred",
          "team": "Tromsø",
          "passes": [
            {
              "fromPlayer": "390",
              "toPos": "15",
              "fromPos": "3",
              "toPlayer": "413",
              "action": "LONGBALL"
            },
            {
              "fromPlayer": "413",
              "toPos": "20",
              "fromPos": "15",
              "toPlayer": "411",
              "action": "PASS"
            },
            {
              "fromPlayer": "411",
              "toPos": "26",
              "fromPos": "20",
              "toPlayer": "404",
              "action": "KEYPASS"
            },
            {
              "fromPlayer": "404",
              "toPos": "19",
              "fromPos": "26",
              "toPlayer": "406",
              "action": "CROSS"
            }
          ],
          "breakthrough": "Pasning Mellomrom"
        },
        {
          "finish": {
            "player": "404",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "403",
            "pos": "13"
          },
          "time": "35",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "403",
              "toPos": "13",
              "fromPos": "13",
              "action": "PASS",
              "toPlayer": "402"
            },
            {
              "fromPlayer": "402",
              "toPos": "17",
              "fromPos": "14",
              "action": "KEYPASS",
              "toPlayer": "403"
            },
            {
              "fromPlayer": "403",
              "toPos": "18",
              "fromPos": "17",
              "action": "PASS",
              "toPlayer": "404"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "394",
            "pos": "21"
          },
          "finish": {
            "player": "394",
            "action": "SHOTTARGET",
            "pos": "22"
          },
          "time": "43",
          "breakthroughPlayer": "None",
          "team": "Tromsø",
          "passes": [],
          "breakthrough": "None"
        },
        {
          "finish": {
            "player": "396",
            "action": "SHOTMISS",
            "pos": "25"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "403",
            "pos": "6"
          },
          "time": "45",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "403",
              "toPos": "10",
              "fromPos": "6",
              "action": "PASS",
              "toPlayer": "411"
            },
            {
              "fromPlayer": "411",
              "toPos": "9",
              "fromPos": "9",
              "action": "PASS",
              "toPlayer": "394"
            },
            {
              "fromPlayer": "394",
              "toPos": "9",
              "fromPos": "9",
              "action": "PASS",
              "toPlayer": "403"
            },
            {
              "fromPlayer": "403",
              "toPos": "14",
              "fromPos": "9",
              "action": "PASS",
              "toPlayer": "402"
            },
            {
              "fromPlayer": "402",
              "toPos": "17",
              "fromPos": "18",
              "action": "PASS",
              "toPlayer": "411"
            },
            {
              "fromPlayer": "411",
              "toPos": "18",
              "fromPos": "17",
              "action": "PASS",
              "toPlayer": "404"
            },
            {
              "fromPlayer": "404",
              "toPos": "18",
              "fromPos": "18",
              "action": "PASS",
              "toPlayer": "403"
            },
            {
              "fromPlayer": "403",
              "toPos": "19",
              "fromPos": "18",
              "action": "PASS",
              "toPlayer": "397"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Frispark",
            "player": "395",
            "pos": "7"
          },
          "finish": {
            "player": "413",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "time": "62",
          "breakthroughPlayer": "Adnan Causevic",
          "team": "Tromsø",
          "passes": [
            {
              "fromPlayer": "395",
              "toPos": "12",
              "fromPos": "7",
              "toPlayer": "399",
              "action": "PASS"
            },
            {
              "fromPlayer": "399",
              "toPos": "11",
              "fromPos": "12",
              "toPlayer": "395",
              "action": "PASS"
            },
            {
              "fromPlayer": "395",
              "toPos": "18",
              "fromPos": "11",
              "toPlayer": "413",
              "action": "PASS"
            }
          ],
          "breakthrough": "Pasning Bakrom"
        },
        {
          "finish": {
            "player": "411",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "411",
            "pos": "12"
          },
          "time": "64",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "406",
              "toPos": "16",
              "fromPos": "12",
              "action": "PASS",
              "toPlayer": "413"
            },
            {
              "fromPlayer": "413",
              "toPos": "16",
              "fromPos": "16",
              "action": "PASS",
              "toPlayer": "404"
            },
            {
              "fromPlayer": "404",
              "toPos": "16",
              "fromPos": "16",
              "action": "PASS",
              "toPlayer": "413"
            },
            {
              "fromPlayer": "413",
              "toPos": "20",
              "fromPos": "20",
              "action": "PASS",
              "toPlayer": "404"
            },
            {
              "fromPlayer": "404",
              "toPos": "23",
              "fromPos": "25",
              "action": "PASS",
              "toPlayer": "411"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Innkast",
            "player": "394",
            "pos": "9"
          },
          "finish": {
            "player": "413",
            "action": "SHOTGOAL",
            "pos": "22"
          },
          "time": "71",
          "breakthroughPlayer": "None",
          "team": "Tromsø",
          "passes": [
            {
              "fromPlayer": "394",
              "toPos": "6",
              "fromPos": "9",
              "toPlayer": "393",
              "action": "PASS"
            },
            {
              "fromPlayer": "393",
              "toPos": "11",
              "fromPos": "6",
              "toPlayer": "395",
              "action": "PASS"
            },
            {
              "fromPlayer": "395",
              "toPos": "21",
              "fromPos": "11",
              "toPlayer": "403",
              "action": "LONGBALL"
            },
            {
              "fromPlayer": "403",
              "toPos": "22",
              "fromPos": "21",
              "toPlayer": "413",
              "action": "PASS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "finish": {
            "player": "404",
            "action": "SHOTMISS",
            "pos": "25"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "402",
            "pos": "14"
          },
          "time": "78",
          "breakthroughPlayer": "Thomas Kind Bendiksen",
          "passes": [
            {
              "fromPlayer": "402",
              "toPos": "19",
              "fromPos": "15",
              "action": "KEYPASS",
              "toPlayer": "404"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "Pasning Mellomrom"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "412",
            "pos": "19"
          },
          "finish": {
            "player": "393",
            "action": "SHOTGOAL",
            "pos": "23"
          },
          "time": "81",
          "breakthroughPlayer": "None",
          "team": "Tromsø",
          "passes": [
            {
              "fromPlayer": "412",
              "toPos": "25",
              "fromPos": "19",
              "toPlayer": "404",
              "action": "PASS"
            },
            {
              "fromPlayer": "404",
              "toPos": "23",
              "fromPos": "25",
              "toPlayer": "393",
              "action": "PASS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "finish": {
            "player": "412",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "410",
            "pos": "10"
          },
          "time": "92",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "410",
              "toPos": "11",
              "fromPos": "10",
              "action": "PASS",
              "toPlayer": "404"
            },
            {
              "fromPlayer": "404",
              "toPos": "16",
              "fromPos": "11",
              "action": "PASS",
              "toPlayer": "411"
            },
            {
              "fromPlayer": "411",
              "toPos": "23",
              "fromPos": "20",
              "action": "KEYPASS",
              "toPlayer": "412"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "None"
        }
      ]
});

insertMatch({
    "date": "2013-05-26",
    "hometeam": "Viking",
    "awayteam": "Tromsø",
    "score": "2-1",
    "attacks" : [
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "396",
            "pos": "15"
          },
          "finish": {
            "player": "413",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "time": "7",
          "breakthroughPlayer": "Ruben Kristiansen",
          "touch": 0,
          "team": "Tromsø",
          "passes": [
            {
              "fromPlayer": "396",
              "toPos": "16",
              "fromPos": "15",
              "toPlayer": "397",
              "action": "PASS"
            },
            {
              "fromPlayer": "397",
              "toPos": "15",
              "fromPos": "16",
              "toPlayer": "482",
              "action": "PASS"
            },
            {
              "fromPlayer": "482",
              "toPos": "17",
              "fromPos": "15",
              "toPlayer": "394",
              "action": "LONGBALL"
            },
            {
              "fromPlayer": "394",
              "toPos": "23",
              "fromPos": "21",
              "toPlayer": "413",
              "action": "CROSS"
            }
          ],
          "breakthrough": "Gjennombrudd Kant"
        },
        {
          "finish": {
            "player": "413",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "393",
            "pos": "7"
          },
          "time": "10",
          "touch": 0,
          "breakthroughPlayer": "Morten Moldskred",
          "passes": [
            {
              "fromPlayer": "393",
              "toPos": "15",
              "fromPos": "6",
              "action": "LONGBALL",
              "toPlayer": "413"
            },
            {
              "fromPlayer": "413",
              "toPos": "15",
              "fromPos": "15",
              "action": "PASS",
              "toPlayer": "482"
            },
            {
              "fromPlayer": "482",
              "toPos": "15",
              "fromPos": "15",
              "action": "PASS",
              "toPlayer": "411"
            },
            {
              "fromPlayer": "411",
              "toPos": "25",
              "fromPos": "19",
              "action": "PASS",
              "toPlayer": "404"
            },
            {
              "fromPlayer": "404",
              "toPos": "23",
              "fromPos": "25",
              "action": "PASS",
              "toPlayer": "413"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "Pasning Bakrom"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "482",
            "pos": "19"
          },
          "finish": {
            "player": "482",
            "action": "SHOTGOAL",
            "pos": "19"
          },
          "time": "76",
          "breakthroughPlayer": "None",
          "touch": 0,
          "team": "Tromsø",
          "passes": [],
          "breakthrough": "None"
        },
        {
          "finish": {
            "player": "406",
            "action": "SHOTTARGET",
            "pos": "18"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "39",
            "pos": "9"
          },
          "time": "78",
          "touch": 0,
          "breakthroughPlayer": "Ruben Yttergård Jenssen",
          "passes": [
            {
              "fromPlayer": "394",
              "toPos": "9",
              "fromPos": "9",
              "action": "PASS",
              "toPlayer": "482"
            },
            {
              "fromPlayer": "482",
              "toPos": "9",
              "fromPos": "9",
              "action": "PASS",
              "toPlayer": "394"
            },
            {
              "fromPlayer": "394",
              "toPos": "6",
              "fromPos": "9",
              "action": "PASS",
              "toPlayer": "396"
            },
            {
              "fromPlayer": "396",
              "toPos": "10",
              "fromPos": "6",
              "action": "PASS",
              "toPlayer": "482"
            },
            {
              "fromPlayer": "482",
              "toPos": "16",
              "fromPos": "11",
              "action": "PASS",
              "toPlayer": "407"
            },
            {
              "fromPlayer": "407",
              "toPos": "18",
              "fromPos": "20",
              "action": "CROSS",
              "toPlayer": "413"
            },
            {
              "fromPlayer": "413",
              "toPos": "18",
              "fromPos": "19",
              "action": "PASS",
              "toPlayer": "406"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "406",
            "pos": "14"
          },
          "finish": {
            "player": "395",
            "action": "SHOTTARGET",
            "pos": "25"
          },
          "time": "83",
          "breakthroughPlayer": "None",
          "touch": 0,
          "team": "Tromsø",
          "passes": [
            {
              "fromPlayer": "406",
              "toPos": "19",
              "fromPos": "14",
              "toPlayer": "413",
              "action": "PASS"
            },
            {
              "fromPlayer": "413",
              "toPos": "15",
              "fromPos": "19",
              "toPlayer": "406",
              "action": "PASS"
            },
            {
              "fromPlayer": "406",
              "toPos": "20",
              "fromPos": "14",
              "toPlayer": "397",
              "action": "PASS"
            },
            {
              "fromPlayer": "397",
              "toPos": "19",
              "fromPos": "20",
              "toPlayer": "404",
              "action": "PASS"
            },
            {
              "fromPlayer": "404",
              "toPos": "25",
              "fromPos": "25",
              "toPlayer": "395",
              "action": "PASS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "finish": {
            "player": "413",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "482",
            "pos": "14"
          },
          "time": "85",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "482",
              "toPos": "23",
              "fromPos": "18",
              "action": "LONGBALL",
              "toPlayer": "407"
            },
            {
              "fromPlayer": "407",
              "toPos": "23",
              "fromPos": "23",
              "action": "PASS",
              "toPlayer": "413"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "None"
        }
      ]
});

insertMatch({
  "date": "2013-11-03",
  "hometeam": "Tromsø",
  "awayteam": "Strømsgodset",
  "score": "0-0",
  "attacks": [
        {
          "attackStart": {
            "typeAction": "Frispark",
            "player": "393",
            "pos": "10"
          },
          "finish": {
            "player": "404",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "time": "3",
          "breakthroughPlayer": "None",
          "team": "Tromsø",
          "passes": [
            {
              "fromPlayer": "393",
              "toPos": "22",
              "fromPos": "10",
              "toPlayer": "411",
              "action": "LONGBALL"
            },
            {
              "fromPlayer": "411",
              "toPos": "17",
              "fromPos": "21",
              "toPlayer": "403",
              "action": "CROSS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "finish": {
            "player": "411",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Innkast",
            "player": "397",
            "pos": "26"
          },
          "time": "6",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "397",
              "toPos": "26",
              "fromPos": "26",
              "action": "PASS",
              "toPlayer": "403"
            },
            {
              "fromPlayer": "403",
              "toPos": "26",
              "fromPos": "26",
              "action": "PASS",
              "toPlayer": "397"
            },
            {
              "fromPlayer": "397",
              "toPos": "26",
              "fromPos": "26",
              "action": "PASS",
              "toPlayer": "403"
            },
            {
              "fromPlayer": "403",
              "toPos": "23",
              "fromPos": "26",
              "action": "PASS",
              "toPlayer": "411"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "None"
        },
        {
          "finish": {
            "player": "48",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "50",
            "pos": "19"
          },
          "time": "15",
          "breakthroughPlayer": "Muhamed Keita",
          "passes": [
            {
              "fromPlayer": "50",
              "toPos": "19",
              "fromPos": "19",
              "action": "PASS",
              "toPlayer": "48"
            },
            {
              "fromPlayer": "48",
              "toPos": "19",
              "fromPos": "19",
              "action": "PASS",
              "toPlayer": "35"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "1vs1 Mellomrom"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "403",
            "pos": "19"
          },
          "finish": {
            "player": "403",
            "action": "SHOTMISS",
            "pos": "19"
          },
          "time": "18",
          "breakthroughPlayer": "None",
          "team": "Tromsø",
          "passes": [],
          "breakthrough": "None"
        },
        {
          "finish": {
            "player": "55",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "42",
            "pos": "16"
          },
          "time": "23",
          "breakthroughPlayer": "Muhamed Keita",
          "passes": [
            {
              "fromPlayer": "42",
              "toPos": "16",
              "fromPos": "16",
              "action": "PASS",
              "toPlayer": "32"
            },
            {
              "fromPlayer": "32",
              "toPos": "11",
              "fromPos": "12",
              "action": "PASS",
              "toPlayer": "33"
            },
            {
              "fromPlayer": "33",
              "toPos": "10",
              "fromPos": "11",
              "action": "PASS",
              "toPlayer": "36"
            },
            {
              "fromPlayer": "36",
              "toPos": "10",
              "fromPos": "10",
              "action": "PASS",
              "toPlayer": "44"
            },
            {
              "fromPlayer": "44",
              "toPos": "11",
              "fromPos": "10",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "16",
              "fromPos": "11",
              "action": "PASS",
              "toPlayer": "42"
            },
            {
              "fromPlayer": "42",
              "toPos": "12",
              "fromPos": "16",
              "action": "PASS",
              "toPlayer": "33"
            },
            {
              "fromPlayer": "33",
              "toPos": "7",
              "fromPos": "12",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "10",
              "fromPos": "7",
              "action": "PASS",
              "toPlayer": "32"
            },
            {
              "fromPlayer": "32",
              "toPos": "13",
              "fromPos": "10",
              "action": "PASS",
              "toPlayer": "36"
            },
            {
              "fromPlayer": "36",
              "toPos": "14",
              "fromPos": "13",
              "action": "PASS",
              "toPlayer": "44"
            },
            {
              "fromPlayer": "44",
              "toPos": "10",
              "fromPos": "14",
              "action": "PASS",
              "toPlayer": "32"
            },
            {
              "fromPlayer": "32",
              "toPos": "11",
              "fromPos": "10",
              "action": "PASS",
              "toPlayer": "33"
            },
            {
              "fromPlayer": "33",
              "toPos": "10",
              "fromPos": "11",
              "action": "PASS",
              "toPlayer": "32"
            },
            {
              "fromPlayer": "32",
              "toPos": "13",
              "fromPos": "10",
              "action": "PASS",
              "toPlayer": "36"
            },
            {
              "fromPlayer": "36",
              "toPos": "17",
              "fromPos": "13",
              "action": "PASS",
              "toPlayer": "48"
            },
            {
              "fromPlayer": "48",
              "toPos": "23",
              "fromPos": "21",
              "action": "CROSS",
              "toPlayer": "55"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "Gjennombrudd Kant"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "30",
            "pos": "8"
          },
          "finish": {
            "player": "50",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "time": "43",
          "breakthroughPlayer": "Adama Diomand",
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "30",
              "toPos": "7",
              "fromPos": "8",
              "toPlayer": "33",
              "action": "PASS"
            },
            {
              "fromPlayer": "33",
              "toPos": "11",
              "fromPos": "7",
              "toPlayer": "41",
              "action": "PASS"
            },
            {
              "fromPlayer": "41",
              "toPos": "20",
              "fromPos": "11",
              "toPlayer": "42",
              "action": "LONGBALL"
            },
            {
              "fromPlayer": "42",
              "toPos": "16",
              "fromPos": "20",
              "toPlayer": "30",
              "action": "PASS"
            },
            {
              "fromPlayer": "30",
              "toPos": "19",
              "fromPos": "19",
              "toPlayer": "50",
              "action": "PASS"
            }
          ],
          "breakthrough": "1vs1 Mellomrom"
        },
        {
          "typeOfAttack": "Gjenvinning kort angrep",
          "finish": {
            "player": "411",
            "pos": "22"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "403",
            "pos": "22"
          },
          "time": "50",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "403",
              "toPos": "22",
              "fromPos": "22",
              "action": "PASS",
              "toPlayer": "411"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "30",
            "pos": "17"
          },
          "finish": {
            "player": "50",
            "pos": "24"
          },
          "typeOfAttack": "Gjenvinning kort angrep",
          "time": "55",
          "breakthroughPlayer": "Stefan Johansen",
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "30",
              "toPos": "13",
              "fromPos": "13",
              "toPlayer": "32",
              "action": "PASS"
            },
            {
              "fromPlayer": "32",
              "toPos": "13",
              "fromPos": "14",
              "toPlayer": "30",
              "action": "PASS"
            },
            {
              "fromPlayer": "30",
              "toPos": "14",
              "fromPos": "13",
              "toPlayer": "32",
              "action": "PASS"
            },
            {
              "fromPlayer": "32",
              "toPos": "15",
              "fromPos": "14",
              "toPlayer": "41",
              "action": "PASS"
            },
            {
              "fromPlayer": "41",
              "toPos": "24",
              "fromPos": "15",
              "toPlayer": "50",
              "action": "LONGBALL"
            }
          ],
          "breakthrough": "Pasning Bakrom"
        },
        {
          "typeOfAttack": "Gjenvinning kort angrep",
          "finish": {
            "player": "41",
            "action": "SHOTMISS",
            "pos": "19"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "41",
            "pos": "19"
          },
          "time": "63",
          "breakthroughPlayer": "None",
          "passes": [],
          "team": "Strømsgodset",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "41",
            "pos": "11"
          },
          "finish": {
            "player": "49",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "typeOfAttack": "Etablert spill",
          "time": "71",
          "breakthroughPlayer": "Stefan Johansen",
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "41",
              "toPos": "14",
              "fromPos": "19",
              "toPlayer": "50",
              "action": "PASS"
            },
            {
              "fromPlayer": "50",
              "toPos": "18",
              "fromPos": "14",
              "toPlayer": "44",
              "action": "PASS"
            },
            {
              "fromPlayer": "44",
              "toPos": "21",
              "fromPos": "18",
              "toPlayer": "55",
              "action": "PASS"
            },
            {
              "fromPlayer": "55",
              "toPos": "23",
              "fromPos": "21",
              "toPlayer": "49",
              "action": "CROSS"
            }
          ],
          "breakthrough": "Pasning Mellomrom"
        },
        {
          "typeOfAttack": "Gjenvinning kort angrep",
          "finish": {
            "player": "55",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "36",
            "pos": "18"
          },
          "time": "78",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "36",
              "toPos": "23",
              "fromPos": "19",
              "action": "PASS",
              "toPlayer": "55"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "406",
            "pos": "15"
          },
          "finish": {
            "player": "406",
            "action": "SHOTTARGET",
            "pos": "18"
          },
          "typeOfAttack": "Etablert spill",
          "time": "80",
          "breakthroughPlayer": "None",
          "team": "Tromsø",
          "passes": [
            {
              "fromPlayer": "406",
              "toPos": "14",
              "fromPos": "15",
              "toPlayer": "394",
              "action": "LONGBALL"
            },
            {
              "fromPlayer": "394",
              "toPos": "14",
              "fromPos": "13",
              "toPlayer": "406",
              "action": "PASS"
            },
            {
              "fromPlayer": "406",
              "toPos": "16",
              "fromPos": "14",
              "toPlayer": "397",
              "action": "LONGBALL"
            },
            {
              "fromPlayer": "397",
              "toPos": "16",
              "fromPos": "16",
              "toPlayer": "395",
              "action": "PASS"
            },
            {
              "fromPlayer": "395",
              "toPos": "19",
              "fromPos": "16",
              "toPlayer": "411",
              "action": "PASS"
            },
            {
              "fromPlayer": "411",
              "toPos": "19",
              "fromPos": "19",
              "toPlayer": "406",
              "action": "PASS"
            },
            {
              "fromPlayer": "406",
              "toPos": "17",
              "fromPos": "19",
              "toPlayer": "394",
              "action": "PASS"
            },
            {
              "fromPlayer": "394",
              "toPos": "18",
              "fromPos": "18",
              "toPlayer": "406",
              "action": "PASS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "typeOfAttack": "Kontring",
          "finish": {
            "player": "55",
            "action": "SHOTTARGET",
            "pos": "22"
          },
          "attackStart": {
            "typeAction": "5-meter",
            "player": "41",
            "pos": "7"
          },
          "time": "81",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "41",
              "toPos": "22",
              "fromPos": "11",
              "action": "LONGBALL",
              "toPlayer": "55"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "394",
            "pos": "10"
          },
          "finish": {
            "player": "413",
            "action": "SHOTMISS",
            "pos": "18"
          },
          "typeOfAttack": "Gjenvinning kort angrep",
          "time": "84",
          "breakthroughPlayer": "Ruben Kristiansen",
          "team": "Tromsø",
          "passes": [
            {
              "fromPlayer": "394",
              "toPos": "18",
              "fromPos": "14",
              "toPlayer": "412",
              "action": "PASS"
            },
            {
              "fromPlayer": "412",
              "toPos": "18",
              "fromPos": "18",
              "toPlayer": "413",
              "action": "PASS"
            },
            {
              "fromPlayer": "394",
              "toPos": "18",
              "fromPos": "14",
              "toPlayer": "412",
              "action": "PASS"
            },
          ],
          "breakthrough": "1vs1 Mellomrom"
        },
        {
          "typeOfAttack": "Kontring",
          "finish": {
            "player": "406",
            "action": "SHOTTARGET",
            "pos": "19"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "395",
            "pos": "6"
          },
          "time": "86",
          "breakthroughPlayer": "Hendrik Helmke",
          "passes": [
            {
              "fromPlayer": "395",
              "toPos": "11",
              "fromPos": "6",
              "action": "PASS",
              "toPlayer": "410"
            },
            {
              "fromPlayer": "410",
              "toPos": "12",
              "fromPos": "11",
              "action": "PASS",
              "toPlayer": "407"
            },
            {
              "fromPlayer": "407",
              "toPos": "26",
              "fromPos": "16",
              "action": "LONGBALL",
              "toPlayer": "411"
            },
            {
              "fromPlayer": "411",
              "toPos": "19",
              "fromPos": "26",
              "action": "PASS",
              "toPlayer": "406"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "Pasning Bakrom"
        }
      ]
});


insertMatch({
      "attacks": [
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "48",
            "pos": "20"
          },
          "finish": {
            "player": "55",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "typeOfAttack": "Etablert spill",
          "time": "12",
          "breakthroughPlayer": "None",
          "touch": 0,
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "48",
              "toPos": "16",
              "fromPos": "20",
              "toPlayer": "36",
              "action": "PASS"
            },
            {
              "fromPlayer": "36",
              "toPos": "21",
              "fromPos": "20",
              "toPlayer": "42",
              "action": "CROSS"
            },
            {
              "fromPlayer": "42",
              "toPos": "17",
              "fromPos": "21",
              "toPlayer": "41",
              "action": "PASS"
            },
            {
              "fromPlayer": "41",
              "toPos": "23",
              "fromPos": "17",
              "toPlayer": "55",
              "action": "CROSS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "typeOfAttack": "Gjenvinning kort angrep",
          "finish": {
            "player": "30",
            "action": "SHOTMISS",
            "pos": "18"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "50",
            "pos": "22"
          },
          "time": "18",
          "touch": 0,
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "50",
              "toPos": "18",
              "fromPos": "22",
              "action": "PASS",
              "toPlayer": "30"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "36",
            "pos": "19"
          },
          "finish": {
            "player": "49",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "typeOfAttack": "Gjenvinning kort angrep",
          "time": "52",
          "breakthroughPlayer": "None",
          "touch": 0,
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "36",
              "toPos": "26",
              "fromPos": "19",
              "toPlayer": "41",
              "action": "PASS"
            },
            {
              "fromPlayer": "41",
              "toPos": "23",
              "fromPos": "26",
              "toPlayer": "49",
              "action": "CROSS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "typeOfAttack": "Dødball",
          "finish": {
            "player": "55",
            "action": "SHOTTARGET",
            "pos": "24"
          },
          "attackStart": {
            "typeAction": "Corner",
            "player": "41",
            "pos": "33"
          },
          "time": "52",
          "touch": 0,
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "41",
              "toPos": "24",
              "fromPos": "33",
              "action": "CROSS",
              "toPlayer": "49"
            },
            {
              "fromPlayer": "49",
              "toPos": "24",
              "fromPos": "24",
              "action": "PASS",
              "toPlayer": "55"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "42",
            "pos": "11"
          },
          "finish": {
            "player": "41",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "typeOfAttack": "Kontring",
          "time": "62",
          "breakthroughPlayer": "None",
          "touch": 0,
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "42",
              "toPos": "25",
              "fromPos": "19",
              "toPlayer": "41",
              "action": "PASS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "typeOfAttack": "Dødball",
          "finish": {
            "player": "49",
            "action": "SHOTGOAL",
            "pos": "24"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "42",
            "pos": "31"
          },
          "time": "75",
          "touch": 0,
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "42",
              "toPos": "24",
              "fromPos": "31",
              "action": "CROSS",
              "toPlayer": "49"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "33",
            "pos": "3"
          },
          "finish": {
            "player": "51",
            "action": "SHOTMISS",
            "pos": "22"
          },
          "typeOfAttack": "Kontring",
          "time": "81",
          "breakthroughPlayer": "None",
          "touch": 0,
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "33",
              "toPos": "7",
              "fromPos": "3",
              "toPlayer": "42",
              "action": "PASS"
            },
            {
              "fromPlayer": "42",
              "toPos": "11",
              "fromPos": "7",
              "toPlayer": "55",
              "action": "LONGBALL"
            },
            {
              "fromPlayer": "55",
              "toPos": "9",
              "fromPos": "10",
              "toPlayer": "30",
              "action": "PASS"
            },
            {
              "fromPlayer": "30",
              "toPos": "18",
              "fromPos": "18",
              "toPlayer": "51",
              "action": "PASS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "typeOfAttack": "Kontring",
          "finish": {
            "player": "49",
            "action": "SHOTTARGET",
            "pos": "24"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "42",
            "pos": "21"
          },
          "time": "89",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "42",
              "toPos": "24",
              "fromPos": "21",
              "action": "CROSS",
              "toPlayer": "49"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "None"
        }
      ],
      "date": "2013-10-07",
      "hometeam": "Strømsgodset",
      "awayteam": "Start",
      "score": "1-0"
});


insertMatch({
      "date": "2013-09-27",
      "hometeam": "Sogndal",
      "awayteam": "Strømsgodset",
      "score": "0-5",
      "attacks": [
        {
          "typeOfAttack": "Kontring",
          "finish": {
            "player": "48",
            "action": "SHOTTARGET",
            "pos": "18"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "48",
            "pos": "2"
          },
          "time": "1",
          "touch": 0,
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "48",
              "toPos": "2",
              "fromPos": "2",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "6",
              "fromPos": "2",
              "action": "PASS",
              "toPlayer": "55"
            },
            {
              "fromPlayer": "55",
              "toPos": "14",
              "fromPos": "10",
              "action": "PASS",
              "toPlayer": "48"
            },
            {
              "fromPlayer": "48",
              "toPos": "22",
              "fromPos": "18",
              "action": "PASS",
              "toPlayer": "50"
            },
            {
              "fromPlayer": "50",
              "toPos": "18",
              "fromPos": "22",
              "action": "PASS",
              "toPlayer": "48"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "33",
            "pos": "6"
          },
          "finish": {
            "player": "55",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "typeOfAttack": "Etablert spill",
          "time": "5",
          "breakthroughPlayer": "Muhamed Keita",
          "touch": 0,
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "32",
              "toPos": "9",
              "fromPos": "6",
              "toPlayer": "36",
              "action": "PASS"
            },
            {
              "fromPlayer": "36",
              "toPos": "10",
              "fromPos": "9",
              "toPlayer": "44",
              "action": "PASS"
            },
            {
              "fromPlayer": "44",
              "toPos": "9",
              "fromPos": "10",
              "toPlayer": "42",
              "action": "PASS"
            },
            {
              "fromPlayer": "42",
              "toPos": "13",
              "fromPos": "9",
              "toPlayer": "55",
              "action": "PASS"
            },
            {
              "fromPlayer": "55",
              "toPos": "17",
              "fromPos": "17",
              "toPlayer": "48",
              "action": "PASS"
            },
            {
              "fromPlayer": "48",
              "toPos": "23",
              "fromPos": "21",
              "toPlayer": "55",
              "action": "CROSS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "typeOfAttack": "Etablert spill",
          "finish": {
            "player": "55",
            "action": "SHOTGOAL",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Frispark",
            "player": "41",
            "pos": "9"
          },
          "time": "7",
          "touch": 0,
          "breakthroughPlayer": "Øyvind Storflor",
          "passes": [
            {
              "fromPlayer": "41",
              "toPos": "9",
              "fromPos": "9",
              "action": "PASS",
              "toPlayer": "32"
            },
            {
              "fromPlayer": "32",
              "toPos": "9",
              "fromPos": "9",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "20",
              "fromPos": "10",
              "action": "LONGBALL",
              "toPlayer": "42"
            },
            {
              "fromPlayer": "42",
              "toPos": "14",
              "fromPos": "15",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "16",
              "fromPos": "15",
              "action": "PASS",
              "toPlayer": "42"
            },
            {
              "fromPlayer": "42",
              "toPos": "11",
              "fromPos": "16",
              "action": "PASS",
              "toPlayer": "33"
            },
            {
              "fromPlayer": "33",
              "toPos": "10",
              "fromPos": "11",
              "action": "PASS",
              "toPlayer": "32"
            },
            {
              "fromPlayer": "32",
              "toPos": "14",
              "fromPos": "10",
              "action": "PASS",
              "toPlayer": "44"
            },
            {
              "fromPlayer": "44",
              "toPos": "19",
              "fromPos": "18",
              "action": "PASS",
              "toPlayer": "42"
            },
            {
              "fromPlayer": "42",
              "toPos": "23",
              "fromPos": "19",
              "action": "LONGBALL",
              "toPlayer": "55"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "Pasning Bakrom"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "41",
            "pos": "20"
          },
          "finish": {
            "player": "55",
            "action": "SHOTGOAL",
            "pos": "22"
          },
          "typeOfAttack": "Etablert spill",
          "time": "18",
          "breakthroughPlayer": "Øyvind Storflor",
          "touch": 0,
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "41",
              "toPos": "16",
              "fromPos": "20",
              "toPlayer": "42",
              "action": "PASS"
            },
            {
              "fromPlayer": "42",
              "toPos": "11",
              "fromPos": "15",
              "toPlayer": "33",
              "action": "PASS"
            },
            {
              "fromPlayer": "33",
              "toPos": "10",
              "fromPos": "11",
              "toPlayer": "32",
              "action": "PASS"
            },
            {
              "fromPlayer": "32",
              "toPos": "11",
              "fromPos": "10",
              "toPlayer": "33",
              "action": "PASS"
            },
            {
              "fromPlayer": "33",
              "toPos": "16",
              "fromPos": "11",
              "toPlayer": "30",
              "action": "PASS"
            },
            {
              "fromPlayer": "30",
              "toPos": "16",
              "fromPos": "16",
              "toPlayer": "42",
              "action": "PASS"
            },
            {
              "fromPlayer": "42",
              "toPos": "20",
              "fromPos": "16",
              "toPlayer": "41",
              "action": "PASS"
            },
            {
              "fromPlayer": "41",
              "toPos": "20",
              "fromPos": "20",
              "toPlayer": "42",
              "action": "PASS"
            },
            {
              "fromPlayer": "42",
              "toPos": "20",
              "fromPos": "20",
              "toPlayer": "30",
              "action": "PASS"
            },
            {
              "fromPlayer": "30",
              "toPos": "24",
              "fromPos": "26",
              "toPlayer": "55",
              "action": "CROSS"
            }
          ],
          "breakthrough": "1vs1 Bakrom"
        },
        {
          "typeOfAttack": "Gjenvinning kort angrep",
          "finish": {
            "player": "55",
            "action": "SHOTGOAL",
            "pos": "22"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "55",
            "pos": "23"
          },
          "time": "21",
          "touch": 0,
          "breakthroughPlayer": "None",
          "passes": [],
          "team": "Strømsgodset",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "48",
            "pos": "9"
          },
          "finish": {
            "player": "50",
            "action": "SHOTGOAL",
            "pos": "18"
          },
          "typeOfAttack": "Etablert spill",
          "time": "26",
          "breakthroughPlayer": "None",
          "touch": 0,
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "48",
              "toPos": "10",
              "fromPos": "9",
              "toPlayer": "32",
              "action": "PASS"
            },
            {
              "fromPlayer": "32",
              "toPos": "11",
              "fromPos": "10",
              "toPlayer": "33",
              "action": "PASS"
            },
            {
              "fromPlayer": "33",
              "toPos": "10",
              "fromPos": "11",
              "toPlayer": "32",
              "action": "PASS"
            },
            {
              "fromPlayer": "32",
              "toPos": "10",
              "fromPos": "10",
              "toPlayer": "44",
              "action": "PASS"
            },
            {
              "fromPlayer": "44",
              "toPos": "14",
              "fromPos": "10",
              "toPlayer": "48",
              "action": "PASS"
            },
            {
              "fromPlayer": "48",
              "toPos": "10",
              "fromPos": "14",
              "toPlayer": "44",
              "action": "PASS"
            },
            {
              "fromPlayer": "44",
              "toPos": "10",
              "fromPos": "10",
              "toPlayer": "41",
              "action": "PASS"
            },
            {
              "fromPlayer": "41",
              "toPos": "12",
              "fromPos": "10",
              "toPlayer": "33",
              "action": "PASS"
            },
            {
              "fromPlayer": "33",
              "toPos": "15",
              "fromPos": "16",
              "toPlayer": "41",
              "action": "PASS"
            },
            {
              "fromPlayer": "41",
              "toPos": "11",
              "fromPos": "15",
              "toPlayer": "32",
              "action": "PASS"
            },
            {
              "fromPlayer": "32",
              "toPos": "14",
              "fromPos": "11",
              "toPlayer": "44",
              "action": "PASS"
            },
            {
              "fromPlayer": "44",
              "toPos": "14",
              "fromPos": "13",
              "toPlayer": "50",
              "action": "PASS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "typeOfAttack": "Etablert spill",
          "finish": {
            "player": "48",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "41",
            "pos": "16"
          },
          "time": "30",
          "touch": 0,
          "breakthroughPlayer": "Stefan Johansen",
          "passes": [
            {
              "fromPlayer": "41",
              "toPos": "23",
              "fromPos": "15",
              "action": "LONGBALL",
              "toPlayer": "48"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "Pasning Bakrom"
        },
        {
          "attackStart": {
            "typeAction": "Frispark",
            "player": "41",
            "pos": "14"
          },
          "finish": {
            "player": "33",
            "action": "SHOTMISS",
            "pos": "24"
          },
          "typeOfAttack": "Dødball",
          "time": "44",
          "breakthroughPlayer": "None",
          "touch": 0,
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "41",
              "toPos": "24",
              "fromPos": "14",
              "toPlayer": "33",
              "action": "LONGBALL"
            }
          ],
          "breakthrough": "None"
        },
        {
          "typeOfAttack": "Gjenvinning kort angrep",
          "finish": {
            "player": "41",
            "action": "SHOTTARGET",
            "pos": "19"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "51",
            "pos": "16"
          },
          "time": "80",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "51",
              "toPos": "15",
              "fromPos": "16",
              "action": "PASS",
              "toPlayer": "41"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "41",
            "pos": "9"
          },
          "finish": {
            "player": "49",
            "action": "SHOTMISS",
            "pos": "24"
          },
          "typeOfAttack": "Kontring",
          "time": "82",
          "breakthroughPlayer": "Gustav Wikheim",
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "41",
              "toPos": "16",
              "fromPos": "10",
              "toPlayer": "51",
              "action": "PASS"
            },
            {
              "fromPlayer": "51",
              "toPos": "26",
              "fromPos": "20",
              "toPlayer": "46",
              "action": "PASS"
            },
            {
              "fromPlayer": "46",
              "toPos": "24",
              "fromPos": "26",
              "toPlayer": "49",
              "action": "CROSS"
            }
          ],
          "breakthrough": "Pasning Bakrom"
        },
        {
          "typeOfAttack": "Etablert spill",
          "finish": {
            "player": "49",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Frispark",
            "player": "41",
            "pos": "14"
          },
          "time": "86",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "41",
              "toPos": "15",
              "fromPos": "14",
              "action": "PASS",
              "toPlayer": "42"
            },
            {
              "fromPlayer": "42",
              "toPos": "20",
              "fromPos": "15",
              "action": "PASS",
              "toPlayer": "46"
            },
            {
              "fromPlayer": "46",
              "toPos": "19",
              "fromPos": "20",
              "action": "PASS",
              "toPlayer": "42"
            },
            {
              "fromPlayer": "42",
              "toPos": "19",
              "fromPos": "19",
              "action": "PASS",
              "toPlayer": "46"
            },
            {
              "fromPlayer": "46",
              "toPos": "25",
              "fromPos": "19",
              "action": "PASS",
              "toPlayer": "55"
            },
            {
              "fromPlayer": "55",
              "toPos": "25",
              "fromPos": "25",
              "action": "PASS",
              "toPlayer": "46"
            },
            {
              "fromPlayer": "46",
              "toPos": "23",
              "fromPos": "25",
              "action": "PASS",
              "toPlayer": "49"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "1vs1 Mellomrom"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "46",
            "pos": "6"
          },
          "finish": {
            "player": "55",
            "action": "SHOTMISS",
            "pos": "25"
          },
          "typeOfAttack": "Kontring",
          "time": "89",
          "breakthroughPlayer": "None",
          "breakthrough": "None",
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "46",
              "toPos": "19",
              "fromPos": "14",
              "toPlayer": "55",
              "action": "PASS"
            }
          ],
        },
        {
          "typeOfAttack": "Etablert spill",
          "finish": {
            "player": "51",
            "action": "SHOTGOAL",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Innkast",
            "player": "36",
            "pos": "5"
          },
          "time": "92",
          "breakthroughPlayer": "Stefan Johansen",
          "passes": [
            {
              "fromPlayer": "36",
              "toPos": "4",
              "fromPos": "5",
              "action": "PASS",
              "toPlayer": "44"
            },
            {
              "fromPlayer": "44",
              "toPos": "5",
              "fromPos": "5",
              "action": "PASS",
              "toPlayer": "36"
            },
            {
              "fromPlayer": "36",
              "toPos": "1",
              "fromPos": "5",
              "action": "PASS",
              "toPlayer": "32"
            },
            {
              "fromPlayer": "32",
              "toPos": "3",
              "fromPos": "1",
              "action": "PASS",
              "toPlayer": "33"
            },
            {
              "fromPlayer": "33",
              "toPos": "12",
              "fromPos": "3",
              "action": "PASS",
              "toPlayer": "51"
            },
            {
              "fromPlayer": "51",
              "toPos": "16",
              "fromPos": "12",
              "action": "PASS",
              "toPlayer": "42"
            },
            {
              "fromPlayer": "42",
              "toPos": "15",
              "fromPos": "16",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "16",
              "fromPos": "15",
              "action": "PASS",
              "toPlayer": "36"
            },
            {
              "fromPlayer": "36",
              "toPos": "17",
              "fromPos": "17",
              "action": "PASS",
              "toPlayer": "44"
            },
            {
              "fromPlayer": "44",
              "toPos": "18",
              "fromPos": "17",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "17",
              "fromPos": "18",
              "action": "PASS",
              "toPlayer": "44"
            },
            {
              "fromPlayer": "44",
              "toPos": "18",
              "fromPos": "18",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "18",
              "fromPos": "18",
              "action": "PASS",
              "toPlayer": "44"
            },
            {
              "fromPlayer": "44",
              "toPos": "18",
              "fromPos": "18",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "18",
              "fromPos": "14",
              "action": "PASS",
              "toPlayer": "46"
            },
            {
              "fromPlayer": "46",
              "toPos": "14",
              "fromPos": "18",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "13",
              "fromPos": "13",
              "action": "PASS",
              "toPlayer": "44"
            },
            {
              "fromPlayer": "41",
              "toPos": "10",
              "fromPos": "13",
              "action": "PASS",
              "toPlayer": "32"
            },
            {
              "fromPlayer": "32",
              "toPos": "14",
              "fromPos": "10",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "23",
              "fromPos": "14",
              "action": "LONGBALL",
              "toPlayer": "51"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "Pasning Bakrom"
        }
      ]
});

insertMatch({
    "date": "2013-06-29",
    "hometeam": "Strømsgodset",
    "awayteam": "Tromsø",
    "score": "3-1",
    "attacks": [
        {
          "finish": {
            "player": "50",
            "action": "SHOTTARGET",
            "pos": "50"
          },
          "attackStart": {
            "typeAction": "Corner",
            "player": "41",
            "pos": "33"
          },
          "time": "16",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "41",
              "toPos": "24",
              "fromPos": "33",
              "action": "CROSS",
              "toPlayer": "50"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Frispark",
            "player": "402",
            "pos": "19"
          },
          "finish": {
            "player": "402",
            "action": "SHOTMISS",
            "pos": "19"
          },
          "time": "20",
          "breakthroughPlayer": "None",
          "team": "Tromsø",
          "passes": [],
          "breakthrough": "None"
        },
        {
          "finish": {
            "player": "481",
            "action": "SHOTMISS",
            "pos": "22"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "402",
            "pos": "14"
          },
          "time": "24",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "402",
              "toPos": "18",
              "fromPos": "18",
              "action": "PASS",
              "toPlayer": "403"
            },
            {
              "fromPlayer": "403",
              "toPos": "22",
              "fromPos": "22",
              "action": "PASS",
              "toPlayer": "481"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Innkast",
            "player": "37",
            "pos": "21"
          },
          "finish": {
            "player": "44",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "time": "25",
          "breakthroughPlayer": "None",
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "37",
              "toPos": "22",
              "fromPos": "21",
              "toPlayer": "44",
              "action": "PASS"
            },
            {
              "fromPlayer": "44",
              "toPos": "24",
              "fromPos": "22",
              "toPlayer": "36",
              "action": "PASS"
            },
            {
              "fromPlayer": "36",
              "toPos": "23",
              "fromPos": "24",
              "toPlayer": "44",
              "action": "PASS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "finish": {
            "player": "406",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Frispark",
            "player": "403",
            "pos": "20"
          },
          "time": "55",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "403",
              "toPos": "22",
              "fromPos": "20",
              "action": "CROSS",
              "toPlayer": "395"
            },
            {
              "fromPlayer": "395",
              "toPos": "23",
              "fromPos": "22",
              "action": "PASS",
              "toPlayer": "406"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "None"
        }
      ]
});

insertMatch({
    "date": "2013-09-22",
    "hometeam": "Sarpsborg",
    "awayteam": "Tromsø",
    "score": "0-3",
    "attacks": [
        {
          "attackStart": {
            "typeAction": "Frispark",
            "player": "410",
            "pos": "26"
          },
          "finish": {
            "player": "406",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "time": "4",
          "breakthroughPlayer": "None",
          "team": "Tromsø",
          "passes": [
            {
              "fromPlayer": "410",
              "toPos": "23",
              "fromPos": "26",
              "toPlayer": "406",
              "action": "PASS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "finish": {
            "player": "411",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "393",
            "pos": "9"
          },
          "time": "20",
          "breakthroughPlayer": "Zdenek Ondrsek",
          "passes": [
            {
              "fromPlayer": "394",
              "toPos": "10",
              "fromPos": "9",
              "action": "PASS",
              "toPlayer": "393"
            },
            {
              "fromPlayer": "393",
              "toPos": "18",
              "fromPos": "10",
              "action": "LONGBALL",
              "toPlayer": "413"
            },
            {
              "fromPlayer": "413",
              "toPos": "23",
              "fromPos": "18",
              "action": "PASS",
              "toPlayer": "411"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "Pasning Bakrom"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "410",
            "pos": "11"
          },
          "finish": {
            "player": "394",
            "action": "SHOTTARGET",
            "pos": "22"
          },
          "time": "34",
          "breakthroughPlayer": "Ruben Kristiansen",
          "team": "Tromsø",
          "passes": [
            {
              "fromPlayer": "410",
              "toPos": "11",
              "fromPos": "11",
              "toPlayer": "406",
              "action": "PASS"
            },
            {
              "fromPlayer": "406",
              "toPos": "17",
              "fromPos": "11",
              "toPlayer": "394",
              "action": "LONGBALL"
            }
          ],
          "breakthrough": "Gjennombrudd Kant"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "406",
            "pos": "15"
          },
          "finish": {
            "player": "410",
            "action": "SHOTTARGET",
            "pos": "19"
          },
          "time": "45",
          "breakthroughPlayer": "None",
          "team": "Tromsø",
          "passes": [
            {
              "fromPlayer": "406",
              "toPos": "15",
              "fromPos": "19",
              "toPlayer": "410",
              "action": "PASS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "finish": {
            "player": "411",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "395",
            "pos": "20"
          },
          "time": "50",
          "breakthroughPlayer": "Hendrik Helmke",
          "passes": [
            {
              "fromPlayer": "395",
              "toPos": "11",
              "fromPos": "20",
              "action": "PASS",
              "toPlayer": "396"
            },
            {
              "fromPlayer": "396",
              "toPos": "15",
              "fromPos": "11",
              "action": "PASS",
              "toPlayer": "410"
            },
            {
              "fromPlayer": "410",
              "toPos": "23",
              "fromPos": "15",
              "action": "LONGBALL",
              "toPlayer": "411"
            }
          ],
          "team": "Tromsø",
          "breakthrough": "Pasning Bakrom"
        }
      ],
});


insertMatch({
      "date": "2013-05-10",
      "hometeam": "Strømsgodset",
      "awayteam": "Vålerenga",
      "score": "2-1",
      "attacks": [
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "51",
            "pos": "19"
          },
          "finish": {
            "player": "51",
            "action": "SHOTTARGET",
            "pos": "19"
          },
          "typeOfAttack": "Gjenvinning kort angrep",
          "time": "2",
          "breakthroughPlayer": "None",
          "team": "Strømsgodset",
          "passes": [],
          "breakthrough": "None"
        },
        {
          "typeOfAttack": "Gjenvinning kort angrep",
          "finish": {
            "player": "50",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "36",
            "pos": "14"
          },
          "time": "27",
          "breakthroughPlayer": "Lars-Christopher Vilsvik",
          "passes": [
            {
              "fromPlayer": "36",
              "toPos": "15",
              "fromPos": "14",
              "action": "PASS",
              "toPlayer": "33"
            },
            {
              "fromPlayer": "33",
              "toPos": "15",
              "fromPos": "15",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "19",
              "fromPos": "15",
              "action": "PASS",
              "toPlayer": "35"
            },
            {
              "fromPlayer": "35",
              "toPos": "25",
              "fromPos": "19",
              "action": "PASS",
              "toPlayer": "42"
            },
            {
              "fromPlayer": "42",
              "toPos": "23",
              "fromPos": "25",
              "action": "PASS",
              "toPlayer": "50"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "Pasning Bakrom"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "51",
            "pos": "17"
          },
          "finish": {
            "player": "35",
            "action": "NOFINISH",
            "pos": "25"
          },
          "typeOfAttack": "Etablert spill",
          "time": "36",
          "breakthroughPlayer": "Øyvind Storflor",
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "51",
              "toPos": "14",
              "fromPos": "17",
              "toPlayer": "44",
              "action": "PASS"
            },
            {
              "fromPlayer": "44",
              "toPos": "19",
              "fromPos": "18",
              "toPlayer": "50",
              "action": "PASS"
            },
            {
              "fromPlayer": "50",
              "toPos": "19",
              "fromPos": "19",
              "toPlayer": "42",
              "action": "PASS"
            },
            {
              "fromPlayer": "42",
              "toPos": "25",
              "fromPos": "19",
              "toPlayer": "35",
              "action": "LONGBALL"
            }
          ],
          "breakthrough": "Pasning Bakrom"
        },
        {
          "typeOfAttack": "Etablert spill",
          "finish": {
            "player": "55",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Innkast",
            "player": "42",
            "pos": "20"
          },
          "time": "44",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "42",
              "toPos": "20",
              "fromPos": "20",
              "action": "PASS",
              "toPlayer": "35"
            },
            {
              "fromPlayer": "35",
              "toPos": "15",
              "fromPos": "15",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "14",
              "fromPos": "15",
              "action": "PASS",
              "toPlayer": "44"
            },
            {
              "fromPlayer": "44",
              "toPos": "15",
              "fromPos": "14",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "19",
              "fromPos": "15",
              "action": "PASS",
              "toPlayer": "50"
            },
            {
              "fromPlayer": "50",
              "toPos": "18",
              "fromPos": "19",
              "action": "PASS",
              "toPlayer": "55"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "36",
            "pos": "13"
          },
          "finish": {
            "player": "50",
            "action": "SHOTTARGET",
            "pos": "23"
          },
          "typeOfAttack": "Gjenvinning kort angrep",
          "time": "49",
          "breakthroughPlayer": "None",
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "36",
              "toPos": "17",
              "fromPos": "13",
              "toPlayer": "51",
              "action": "PASS"
            },
            {
              "fromPlayer": "51",
              "toPos": "14",
              "fromPos": "17",
              "toPlayer": "44",
              "action": "PASS"
            },
            {
              "fromPlayer": "44",
              "toPos": "18",
              "fromPos": "14",
              "toPlayer": "55",
              "action": "PASS"
            },
            {
              "fromPlayer": "55",
              "toPos": "18",
              "fromPos": "18",
              "toPlayer": "50",
              "action": "PASS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "typeOfAttack": "Etablert spill",
          "finish": {
            "player": "50",
            "action": "SHOTMISS",
            "pos": "23"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "35",
            "pos": "15"
          },
          "time": "59",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "35",
              "toPos": "14",
              "fromPos": "15",
              "action": "PASS",
              "toPlayer": "33"
            },
            {
              "fromPlayer": "33",
              "toPos": "14",
              "fromPos": "14",
              "action": "PASS",
              "toPlayer": "44"
            },
            {
              "fromPlayer": "44",
              "toPos": "13",
              "fromPos": "14",
              "action": "PASS",
              "toPlayer": "32"
            },
            {
              "fromPlayer": "32",
              "toPos": "17",
              "fromPos": "13",
              "action": "PASS",
              "toPlayer": "55"
            },
            {
              "fromPlayer": "55",
              "toPos": "13",
              "fromPos": "17",
              "action": "PASS",
              "toPlayer": "32"
            },
            {
              "fromPlayer": "32",
              "toPos": "14",
              "fromPos": "13",
              "action": "PASS",
              "toPlayer": "44"
            },
            {
              "fromPlayer": "44",
              "toPos": "15",
              "fromPos": "14",
              "action": "PASS",
              "toPlayer": "41"
            },
            {
              "fromPlayer": "41",
              "toPos": "16",
              "fromPos": "15",
              "action": "PASS",
              "toPlayer": "33"
            },
            {
              "fromPlayer": "33",
              "toPos": "23",
              "fromPos": "20",
              "action": "CROSS",
              "toPlayer": "50"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "None"
        },
        {
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "49",
            "pos": "20"
          },
          "finish": {
            "player": "41",
            "action": "SHOTGOAL",
            "pos": "19"
          },
          "typeOfAttack": "Etablert spill",
          "time": "60",
          "breakthroughPlayer": "None",
          "team": "Strømsgodset",
          "passes": [
            {
              "fromPlayer": "49",
              "toPos": "16",
              "fromPos": "20",
              "toPlayer": "33",
              "action": "PASS"
            },
            {
              "fromPlayer": "33",
              "toPos": "15",
              "fromPos": "16",
              "toPlayer": "41",
              "action": "PASS"
            }
          ],
          "breakthrough": "None"
        },
        {
          "typeOfAttack": "Gjenvinning kort angrep",
          "finish": {
            "player": "35",
            "action": "SHOTMISS",
            "pos": "19"
          },
          "attackStart": {
            "typeAction": "Gjenvinning",
            "player": "36",
            "pos": "13"
          },
          "time": "66",
          "breakthroughPlayer": "None",
          "passes": [
            {
              "fromPlayer": "36",
              "toPos": "13",
              "fromPos": "13",
              "action": "PASS",
              "toPlayer": "55"
            },
            {
              "fromPlayer": "55",
              "toPos": "13",
              "fromPos": "13",
              "action": "PASS",
              "toPlayer": "36"
            },
            {
              "fromPlayer": "36",
              "toPos": "23",
              "fromPos": "17",
              "action": "CROSS",
              "toPlayer": "49"
            },
            {
              "fromPlayer": "49",
              "toPos": "19",
              "fromPos": "23",
              "action": "PASS",
              "toPlayer": "35"
            }
          ],
          "team": "Strømsgodset",
          "breakthrough": "None"
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
