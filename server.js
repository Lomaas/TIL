var serverOptions = {
    host: 'localhost',
    port: 9200,
    secure: false
    //Optional basic HTTP Auth
  //   auth: {
  //   username: process.env.ES_USERNAME,
  //       password: process.env.ES_PASSWORD
  // }
};

indexNameElastic = "matches";
indexNameTeams = "teams"

typeNameElastic = "match";
typeNameTeams = "team"

ElasticSearchClient = require('elasticsearchclient');

elasticSearchClient = new ElasticSearchClient(serverOptions);

var express = require('express'),
    matches = require('./routes/matches'),
    player = require('./routes/player'),
    teams = require('./routes/teams');
 
var app = express();

app.use(express.static(__dirname + '/public'));

app.configure(function(){
  app.use(express.bodyParser());
});

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/til');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("Yay open db")
});

var PassSchema = new Schema({
    fromPlayer_id : String,
    toPlayer_id : String,
    fromPos : Number,
    toPos : Number,
    action : String
});

var AttackSchema = new Schema({
    time : Number, 
    touch: Number,
    team : String,
    breakthrough: String,
    breakthroughPlayer: String,
    typeOfAttack: String,
    attackStart : {
        "pos": Number,
        "type": String,
        "player": Number
    },
    passes: [PassSchema],
    finish : {
        "player": Number,
        "fromPos": Number,
        "action": String
    }
});

var MatchSchema = new Schema({
    matchId : Number,
    match : String,
    date : { type: Date, default: Date.now },
    hometeam: String,
    awayteam: String,
    score: String,
    attacks : [AttackSchema]
});

MatchSchema.index({matchId: 1}, {unique: true});

var PlayerSchema = new Schema({
    name : String, // Name
    shirtNumber : Number
});

var TeamSchema = new Schema({
    name : String,   // name
    players : [PlayerSchema]
});


// Instantiate models
Match = mongoose.model('Match', MatchSchema);
Attack = mongoose.model('Attack', AttackSchema);
Pass = mongoose.model('Pass', PassSchema);
Team = mongoose.model('Teams', TeamSchema);
Player = mongoose.model('Player', PlayerSchema);

app.get('/matches', matches.getAllMatches); 
app.get('/match/:id', matches.getMatch); 
app.get('/matches/:id/attack/:time', matches.getPassesForAttack);
app.post('/match', matches.postNewMatch);
app.post('/match/:id/attack', matches.postNewAttack);
app.del('/match/:id', matches.deleteMatch);

// app.get('/team/:name', matches.getTeamStats);
app.get('/teams', teams.getAllTeams);
app.get('/team/:name', teams.getTeam);
app.get('/team/:name/players', teams.getPlayers);
app.get('/team/:name/stats', teams.getTeamStats);
app.post('/team', teams.postNewTeam);

app.get('/player/:name', player.getAllPasses);
app.get('/players', player.getAllPlayers);
app.post('/player/:name', player.newPass);


app.listen(3000);
console.log('Listening on port 3000...');


