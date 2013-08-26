
var addNewPass = function() {
	var cloneDiv = $('.inputform').clone();
	cloneDiv.attr("id", "inputform");
	console.log(cloneDiv);

	$('.passes').append(cloneDiv);
}

var postNewMatchData = function(){
	
}

// Creates canvas 320 × 200 at 10, 50
var paper = Raphael(10, 50, 320, 200);

// Creates circle at x = 50, y = 40, with radius 10
var circle = paper.circle(50, 40, 10);
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f00");

// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");

var anim = Raphael.animation({cx: 10, cy: 20}, 2e3);
circle1.animate(anim); // run the given animation immediately
circle2.animate(anim.delay(500)); // run the given animation after 500 ms