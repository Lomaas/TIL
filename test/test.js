var request = require('superagent');
var expect = require('expect.js');

// TODO Set up a development DataBase to test against


describe('Post a new match', function(){
//   it("should return 201 success", function(done){
//   	request
//   		.post('http://localhost:3000/match')
//   		.send({
// 		    "matchId": 1,
// 		    "hometeam" : "Rosenborg BK",
// 		    "awayteam" : "Tromsø IL",
// 		    "match": "Rosenborg BK - Tromsø IL",
// 		    "score" : "0-5",
// 		    "attacks": [
// 	        	{
// 	            	"time": 11,
// 		            "touch" : 9,
// 		            "team" : "Tromsø IL",
// 		            "breakthrough" : "Pasning mellomrom",
// 		            "breakthroughPlayer" : "Thomas Drage",
// 		            "typeOfAttack" : "Etablert spill",
// 		            "attackStart" : {
// 		                "pos" : 10,
// 		                "type" : "",
// 		                "player" : 17,

//             		},
// 		            "passes": [
// 		                {
// 		                    "fromPlayer": 4,
// 		                    "toPlayer": 10,
// 		                    "fromPos": 10,
// 		                    "toPos": 11,
// 		                    "action": "PASS"
// 		                },
// 		                {
// 		                    "fromPlayer": 10,
// 		                    "toPlayer": 15,
// 		                    "fromPos": 14,
// 		                    "toPos": 17,
// 		                    "action": "PASS"
// 		                }
// 		            ],
//         	        "finish" : {
// 			            "player": 15,
// 			            "fromPos": 17,
// 			            "action": "SHOTMISS"
// 			        }
// 		        }
// 		    ]
// 		})
// 		.set('Accept', 'application/json')
//   		.end(function(res){
// 			console.log(res.body);
// 	    	expect(res).to.exist;
// 			expect(res.status).to.equal(201);
// 			done();
//   		});
//   	});

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





// describe('Get all matches', function(){
//   it("should return a 200", function(done){
//   	request.get('http://localhost:3000/matches').end(function(res){
//     	expect(res).to.exist;
// 		expect(res.status).to.equal(200);
// 		console.log(JSON.stringify(res.body));
// 		//should.exist([])
// 		//expect(res.body).to.contain('match:');
// 		done();
//   	});
//   });
// });

// describe('Delete a match', function(){
// 	var id = 2; //TODO FIX!
// 	it("should return a 200 on successful delete", function(done){
// 		request.del('http://localhost:3000/match/' + id).end(function(res){
// 		expect(res).to.exist;
// 		expect(res.status).to.equal(200);
// 		done();
// 		});
// 	});


// describe('Post a new match', function(){
//   it("should return 201 success", function(done){
//   	request
//   		.post('http://localhost:3000/teams')
//   		.send({
// 		   "name" : "Vålerenga Fotball"	
// 		})
// 		.set('Accept', 'application/json')
//   		.end(function(res){
// 			console.log(res.body);
// 	    	expect(res).to.exist;
// 			expect(res.status).to.equal(201);
// 			done();
//   		});
//   	});
// });