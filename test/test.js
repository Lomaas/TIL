var request = require('superagent');
var expect = require('expect.js');

// Simple tests against the API to the server
// TODO Set up a development DataBase to test against


describe('Post a new match', function(){
  it("should return 201 success", function(done){
  	request
  		.post('http://localhost:3000/match')
  		.send({
		    "matchId": 4,
		    "hometeam" : "Tromsø IL",
		    "awayteam" : "Rosenborg BK",
		    "match": "Tromsø IL - Rosenborg BK",
		    "score" : "1-0",
		    "attacks": [
	        	{
	            	"time": 24,
		            "touch" : 7,
		            "team" : "Tromsø IL",
		            "breakthrough" : "Pasning Mellomrom",
		            "breakthroughPlayer" : "Morten Moldskred",
		            "typeOfAttack" : "Etablert spill",
		            "attackStart" : {
		                "pos" : 11,
		                "type" : "",
		                "player" : 8,

            		},
		            "passes": [
		                {
		                    "fromPlayer": 8,
		                    "toPlayer": 5,
		                    "fromPos": 11,
		                    "toPos": 14,
		                    "action": "PASS"
		                },
		                {
		                    "fromPlayer": 5,
		                    "toPlayer": 4,
		                    "fromPos": 14,
		                    "toPos": 16,
		                    "action": "PASS"
		                },
		                 {
		                    "fromPlayer": 4,
		                    "toPlayer": 15,
		                    "fromPos": 16,
		                    "toPos": 17,
		                    "action": "PASS"
		                }
		            ],
        	        "finish" : {
			            "player": 15,
			            "fromPos": 17,
			            "action": "SHOTGOAL"
			        }
		        },
		        {
	            	"time": 23,
		            "touch" : 5,
		            "team" : "Tromsø IL",
		            "breakthrough" : "Nei",
		            "breakthroughPlayer" : "",
		            "typeOfAttack" : "Gjenvinning kort angrep",
		            "attackStart" : {
		                "pos" : 11,
		                "type" : "",
		                "player" : 8,

            		},
		            "passes": [
		                {
		                    "fromPlayer": 8,
		                    "toPlayer": 6,
		                    "fromPos": 11,
		                    "toPos": 18,
		                    "action": "PASS"
		                },
		                {
		                    "fromPlayer": 6,
		                    "toPlayer": 15,
		                    "fromPos": 18,
		                    "toPos": 17,
		                    "action": "PASS"
		                }
		            ],
        	        "finish" : {
			            "player": 15,
			            "fromPos": 17,
			            "action": "SHOTTARGET"
			        }
		        }
		    ]
		})
		.set('Accept', 'application/json')
  		.end(function(res){
			console.log(res.body);
	    	expect(res).to.exist;
			expect(res.status).to.equal(201);
			done();
  		});
  	});

	it("should return 201 success", function(done){
  	request
  		.post('http://localhost:3000/match/' + 2 + '/attack')
  		.send({
		    "time": 39,
		    "touch" : 9,
	        "team" : "Vålerenga Fotball",
		    "breakthrough" : "nei",
		    "breakthroughPlayer" : "",
		    "typeOfAttack" : "Gjennvinning kort angrep",
		    "attackStart" : {
		    	"pos" : 11,
		    	"type" : "breakdown",
		    	"player" : 17,

		    },
	        "passes": [
	            {
	                "fromPlayer": 17,
	                "toPlayer": 13,
	                "fromPos": 14,
	                "toPos": 17,
	                "action": "PASS"
	            }
	        ],
	        "finish" : {
	            "player": 13,
	            "fromPos": 17,
	            "action": "SHOTMISS"
	        }
		})
		.set('Accept', 'application/json')
  		.end(function(res){
			console.log(res.body);
	    	expect(res).to.exist;
			expect(res.status).to.equal(201);
			done();
  		});
  	});


});





describe('Get all matches', function(){
  it("should return a 200", function(done){
  	request.get('http://localhost:3000/matches').end(function(res){
    	expect(res).to.exist;
		expect(res.status).to.equal(200);
		console.log(JSON.stringify(res.body));
		//should.exist([])
		//expect(res.body).to.contain('match:');
		done();
  	});
  });
});

describe('Delete a match', function(){
	var id = 2; //TODO FIX!
	it("should return a 200 on successful delete", function(done){
		request.del('http://localhost:3000/match/' + id).end(function(res){
		expect(res).to.exist;
		expect(res.status).to.equal(200);
		done();
		});
	});


describe('Post a new match', function(){
  it("should return 201 success", function(done){
  	request
  		.post('http://localhost:3000/teams')
  		.send({
		   "name" : "Vålerenga Fotball"	
		})
		.set('Accept', 'application/json')
  		.end(function(res){
			console.log(res.body);
	    	expect(res).to.exist;
			expect(res.status).to.equal(201);
			done();
  		});
  	});
});


var data = {
	"name" : "Tromsø IL",
   "players" : [
       {
           "number" : 1,
           "name" : "M. Sahlman"
       },
       {
           "name" : "H. Norbye",
           "number" : 14
       },
       {
           "number" : 7,
           "name" :   "M. Koppinen"
       },
       {
           "number" : 3,
           "name" :   "J. Fojut"
       },
       {
           "number" : 4,
           "name" : "R. Kristiansen"
       },
       {
           "number" : 8,
           "name"  :  "T. Bendiksen"
       },
       {
           "number" :17,
           "name" :  "R. Johansen"
       },
       {
           "number" : 15,
           "name" :  "M. Andersen"
       },
       {
           "number" : 18,
           "name" :  "J. Pritchard"
       },
       {
           "number" : 10,
           "name" : "T. Drage"
       },
       {
       	"name" : "T. Drage",
           "number" : 10
       },
       {
           "name" : "M. Moldskred",
           "number" : 5
       }
   ]
};

describe('Post a new team', function(){
  it("should return 201 success", function(done){
  	request
  		.post('http://localhost:3000/team')
  		.send(data)
		.set('Accept', 'application/json')
  		.end(function(res){
			console.log(res.body);
	    	expect(res).to.exist;
			expect(res.status).to.equal(201);
			done();
  		});
  	});
});


describe('Post a new team', function(){
  it("should return 201 success", function(done){
    request
        .post('http://localhost:3000/player')
        .send({
            'name' : 'Ruben Yttergård Jenssen',
            'team' : 'Tromsø',
            'player_id' : 482
        })
        .set('Accept', 'application/json')
        .end(function(res){
            console.log(res.body);
            expect(res).to.exist;
            expect(res.status).to.equal(201);
            done();
        });
    });
});
