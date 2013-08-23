
var addNewPass = function() {
	var cloneDiv = $('.inputform').clone();
	cloneDiv.attr("id", "inputform");
	console.log(cloneDiv);

	$('.passes').append(cloneDiv);
}

var postNewMatchData = function(){
	
}