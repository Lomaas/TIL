var request = require('superagent');
var expect = require('expect.js');

// TODO Set up a development DataBase to test against


describe('Post a new match', function(){
  it("should return 201 success", function(done){
  	request
  		.post('http://localhost:3000/match')
  		.send({
		    "matchId": 1,
		    "match": "TIL - VIF",
		    "attacks": [
		        {
		            "time": 20,
		            "passes": [
		                {
		                    "fromPlayer": 4,
		                    "toPlayer": 10,
		                    "fromPos": 19,
		                    "toPos": 20,
		                    "type": "PASS"
		                },
		                {
		                    "fromPlayer": 10,
		                    "toPlayer": 15,
		                    "fromPos": 19,
		                    "toPos": 20,
		                    "type": "PASS"
		                },
		                {
		                    "fromPlayer": 15,
		                    "toPlayer": 19,
		                    "fromPos": 27,
		                    "toPos": 32,
		                    "type": "SHOTMISS"
		                }
		            ]
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
  		.post('http://localhost:3000/match/' + 1 + '/attack')
  		.send({
		    "time": 30,
	        "passes": [
	            {
	                "fromPlayer": 4,
	                "toPlayer": 10,
	                "fromPos": 19,
	                "toPos": 20,
	                "type": "PASS"
	            },
	            {
	                "fromPlayer": 10,
	                "toPlayer": 15,
	                "fromPos": 19,
	                "toPos": 20,
	                "type": "PASS"
	            },
	            {
	                "fromPlayer": 15,
	                "toPlayer": 19,
	                "fromPos": 27,
	                "toPos": 32,
	                "type": "SHOTMISS"
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
	var id = 1; //TODO FIX!
	it("should return a 200 on successful delete", function(done){
		request.del('http://localhost:3000/match/' + id).end(function(res){
		expect(res).to.exist;
		expect(res.status).to.equal(200);
		done();
		});
	});
});