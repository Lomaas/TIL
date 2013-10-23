
var addNewPass = function() {
	var cloneDiv = $('.inputform').clone();
	cloneDiv.attr("id", "inputform");
	console.log(cloneDiv);

	$('.passes').append(cloneDiv);
}

var postNewMatchData = function(){
	
}

Raphael.fn.arrow = function(x1, y1, x2, y2, size) {
	var angle = Raphael.angle(x1, y1, x2, y2);
	var a45   = Raphael.rad(angle-45);
	var a45m  = Raphael.rad(angle+45);
	var a135  = Raphael.rad(angle-135);
	var a135m = Raphael.rad(angle+135);
	var x1a = x1 + Math.cos(a135) * size;
	var y1a = y1 + Math.sin(a135) * size;
	var x1b = x1 + Math.cos(a135m) * size;
	var y1b = y1 + Math.sin(a135m) * size;
	var x2a = x2 + Math.cos(a45) * size;
	var y2a = y2 + Math.sin(a45) * size;
	var x2b = x2 + Math.cos(a45m) * size;
	var y2b = y2 + Math.sin(a45m) * size;
	return this.path(
		// "M"+x1+" "+y1+"L"+x1a+" "+y1a+
		// "M"+x1+" "+y1+"L"+x1b+" "+y1b+
		"M"+x1+" "+y1+"L"+x2+" "+y2+
		"M"+x2+" "+y2+"L"+x2a+" "+y2a+
		"M"+x2+" "+y2+"L"+x2b+" "+y2b
	);
};


// Creates canvas
var paper = Raphael(10, 50, 1091, 759);
var pitchImage = paper.image('/img/pitch.png', 0, 0, 1091, 759);

jQuery.ajax("matches/1/attack/9", {
	method : "GET"
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
	{
		type : 'path'
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

		//var c = paper.path("M " + posX.toString()  + " " + posY.toString()  + " l " + nextCoordX.toString()  + " " + nextCoordY.toString());
		paper.arrow(posX, posY, players[counter + 1].cx, players[counter + 1].cy, 20);
	}
}


