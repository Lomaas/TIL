var Config = {
	colors : ["#E0E4CC", "#F38630", "#69D2E7", "#69D2AA", "#2305AC"],
	counter : 0,
	getColors : function(){
		var color = this.colors[this.counter];
		this.counter = this.counter+1%this.colors.length;
		return color;
	}
};

var adjustment = 50;

var cornerZones = {};
cornerZones.cx = {
	20 : 10, 
	21 : 1081, 
	22 : 10, 
	23 : 1081
};

cornerZones.cy = {
	20 : 10, 
	21 : 10, 
	22 : 749, 
	23 : 749
};

var zonesDictX = {
	1 : 0,
	2 : 0,
	3 : 0,
	4 : 1,
	5 : 1,
	6 : 1,
	7 : 2,
	8 : 2,
	9 : 2,
	10 : 3,
	11 : 3,
	12 : 3,
	13 : 4,
	14 : 4,
	15 : 4,
	16 : 5,
	17 : 5,
	18 : 5,
	20 : 0,
	21 : 5,
	22 : 0,
	23 : 5
};

var zonesDictY = {
	1 : 0,
	2 : 1,
	3 : 2,
	4 : 0,
	5 : 1,
	6 : 2,
	7 : 0,
	8 : 1,
	9 : 2,
	10 : 0,
	11 : 1,
	12 : 2,
	13 : 0,
	14 : 1,
	15 : 2,
	16 : 0,
	17 : 1,
	18 : 2,
	20 : 0,
	21 : 0,
	22 : 3,
	23 : 3
};

var zonesX = 6;
var zonesY = 3;
