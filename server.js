var express = require('express'),
    matches = require('./routes/matches'),
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
    fromPlayer : Number, 
    toPlayer : Number,
    fromPos : Number, 
    toPos : Number, 
    action : String
});

var AttackSchema = new Schema({
    time : Number, 
    touch: Number,
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
    hometeam: String,
    awayteam: String,
    score: String,
    attacks : [AttackSchema]
});


var TeamSchema = new Schema({
    name : String,
    matches: [MatchSchema]
});



Team = mongoose.model('Teams', TeamSchema);


// Instantiate models
Match = mongoose.model('Match', MatchSchema);
Attack = mongoose.model('Attack', AttackSchema);
Pass = mongoose.model('Pass', PassSchema);

app.get('/matches', matches.getAllMatches); 
app.get('/match/:matchId', matches.getMatch); 
app.get('/matches/:matchId/attack/:time', matches.getPassesForAttack);
app.post('/match', matches.postNewMatch);
app.post('/match/:matchId/attack', matches.postNewAttack);
app.del('/match/:matchId', matches.deleteMatch);

app.get('/team/:name', matches.getTeamStats);

app.get('/teams', teams.getAllTeams);
app.post('/teams', teams.postNewTeam);

app.listen(3000);
console.log('Listening on port 3000...');


