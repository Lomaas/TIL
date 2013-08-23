var express = require('express'),
    matches = require('./routes/matches');
 
var app = express();

app.use(express.static(__dirname + '/public'));

app.configure(function(){
  app.use(express.bodyParser());
});

app.get('/matches', matches.getAllMatches); 
app.post('/match', matches.postNewMatch);
app.post('/match/:matchId/attack', matches.postNewAttack);


app.listen(3000);
console.log('Listening on port 3000...');

