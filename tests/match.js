var request = require('superagent');
var expect = require('expect.js');


describe('Get all matches', function(){
  it(function(done){
  	request.post('http://localhost:3000/matches').end(function(res){
  		console.log("checking result");
    	expect(res).to.exist;
		expect(res.status).to.equal(200);
		//expect(res.body).to.contain('matchId');
		done();
  	});
  });
});