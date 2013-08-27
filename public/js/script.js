
var addNewPass = function() {
	var cloneDiv = $('.inputform').clone();
	cloneDiv.attr("id", "inputform");
	console.log(cloneDiv);

	$('.passes').append(cloneDiv);
}

var postNewMatchData = function(){
	
}

// Creates canvas
var paper = Raphael(10, 50, 1091, 759);
var pitchImage = paper.image('/img/pitch.png', 0, 0, 1091, 759);

jQuery.ajax("matches/1/attack/9", {

});

var numPlayers = 3;
var counter;
var adjustment = 50;

var sonePlayer1 = 10;
var sonePlayer2 = 14;
var sonePlayer3 = 17;


var zonesDictX = {
	10 : 3,
	7 : 2,
	4 : 1,
	1 : 0,
	14 : 4,
	17 : 5
}

var zonesDictY = {
	10 : 0,
	17 : 1,
	14 : 1
}

var zonesX = 6;
var zonesY = 3;


console.log(zonesDictY[sonePlayer1]);

var players = [
	{
		type: "circle",
		cx: 1091/zonesX * zonesDictX[sonePlayer1] + adjustment,
		cy: 759/zonesY * zonesDictY[sonePlayer1] + adjustment,
		r: 10,
		fill : '#f00',
		stroke: "#fff"
	},
	{
		type: "circle",
		cx: 1091/zonesX * zonesDictX[sonePlayer2] + adjustment,
		cy: 759/zonesY * zonesDictY[sonePlayer2] + adjustment,
		r: 10,
		fill : '#f00',
		stroke: "#fff"
	},
	{
		type: "circle",
		cx: 1091/zonesX * zonesDictX[sonePlayer3] + adjustment,
		cy: 759/zonesY * zonesDictY[sonePlayer3] + adjustment,
		r: 10,
		fill : '#f00',
		stroke: "#fff"
	}
]

var lines = [
	{type : 'path'
}
]

//paper.path("M 250 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");
for(counter = 0; counter < numPlayers; counter++){
	paper.add(players)

	if(counter + 1 != numPlayers){
		console.log(counter)
		console.log(players[counter]);
		posX = players[counter].cx;
		posY = players[counter].cy;
		nextCoordX = players[counter + 1].cx - posX; 
		nextCoordY = players[counter + 1].cy - posY;

		console.log("M " + posX.toString()  + " " + posY.toString()  + " l " + nextCoordX.toString()  + " " + nextCoordY.toString())

		var c = paper.path("M " + posX.toString()  + " " + posY.toString()  + " l " + nextCoordX.toString()  + " " + nextCoordY.toString());
	}
}
