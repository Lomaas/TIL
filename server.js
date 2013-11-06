var serverOptions = {
    host: 'localhost',
    port: 9200,
    secure: false
};

// Error codes from Models
OK_REQUEST = 1;
BAD_REQUEST = 2;

winston = require('winston');
winston.add(winston.transports.File, { filename: 'error.log' });

async = require('async');
ElasticSearchClient = require('elasticsearchclient');
elasticSearchClient = new ElasticSearchClient(serverOptions);

var express = require('express'),
    matches = require('./routes/matches'),
    player = require('./routes/player'),
    attacks = require('./routes/attacks'),
    teams = require('./routes/teams'),
    passes = require('./routes/passes');
 
var app = express();

app.use(express.static(__dirname + '/public'));

app.configure(function(){
  app.use(express.bodyParser());
});

app.get('/matches', matches.getAllMatches);
app.get('/match/:id', matches.getMatch);
app.post('/match', matches.postNewMatch);

app.get('/teams', teams.getTeams);
app.get('/team/:name/players', teams.getPlayers);
app.get('/team/:name', teams.getStats);
app.get('/team/:name/finalthird', teams.getPassesIntoFinalThird);
app.get('/team/:name/forwardpasses', teams.passesGoingForwardTeam);
app.post('/team', teams.postNewTeam);

app.get('/player/:id', player.getStats);
app.get('/player/:name/breakthroughs', player.getBreakthroughsForPlayer);
app.get('/player/:id/finalthird', player.getPassesIntoFinalThird);
app.post('/player', player.newPlayer);

app.post('/attack', attacks.postNewAttack);

app.post('/pass', passes.newPass);

app.get('/stats/breakthroughs/:name', player.getBreakthroughsForPlayer);


app.listen(3000);
console.log('Listening on port 3000...');
