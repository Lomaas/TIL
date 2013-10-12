var serverOptions = {
    host: 'localhost',
    port: 9200,
    secure: false
};

indexNameElastic = "matches";
typeNameElastic = "match";

indexNameTeams = "teams"
typeNameTeams = "team"

indexNamePlayer = "players"
typeNamePlayer = "player";

indexNameAttacks = "attacks"
typeNameAttacks = "attack"

indexNamePasses = "passes"
typeNamePasses = "pass"

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
app.get('/matches/:id/attack/:time', matches.getPassesForAttack);
app.post('/match', matches.postNewMatch);
app.post('/match/:id/attack', matches.postNewAttack);
app.del('/match/:id', matches.deleteMatch);

// app.get('/team/:name', matches.getTeamStats);
app.get('/teams', teams.getAllTeams);
app.get('/team/:name', teams.getTeam);
app.post('/team', teams.postNewTeam);

app.get('/players/:teamname', player.getPlayersForTeam);
app.get('/player/:id', player.getStats);
app.get('/players', player.getAllPlayers);
app.post('/player', player.newPlayer);


app.post('/attack/:matchId', attacks.putAttack);

app.post('/pass', passes.newPass);


app.listen(3000);
console.log('Listening on port 3000...');
