var Config = {
	colors : ["#E0E4CC", "#F38630", "#69D2E7", "#69D2AA", "#2305AC"],
	counter : 0,
	getColors : function(){
		var color = this.colors[this.counter];
		this.counter = this.counter+1%this.colors.length;
		return color;
	},
	zonesX : 6,
	zonesY : 4,
	zonesDictX : {
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0,
		5 : 1,
		6 : 1,
		7 : 1,
		8 : 1,
		9 : 2,
		10 : 2,
		11 : 2,
		12 : 2,
		13 : 3,
		14 : 3,
		15 : 3,
		16 : 3,
		17 : 4,
		18 : 4,
		19 : 4,
		20 : 4,
		21 : 5,
		22 : 5,
		23 : 4.8,
		24 : 5.4,
		25 : 5,
		26 : 5,
		30 : 0,
		31 : 5.4,
		32 : 0,
		33 : 5.4
	},
	zonesDictY : {
		1 : 0,
		2 : 1,
		3 : 2,
		4 : 3,
		5 : 0,
		6 : 1,
		7 : 2,
		8 : 3,
		9 : 0,
		10 : 1,
		11 : 2,
		12 : 3,
		13 : 0,
		14 : 1,
		15 : 2,
		16 : 3,
		17 : 0,
		18 : 1,
		19 : 2,
		20 : 3,
		21 : 0,
		22 : 0.85,
		23 : 1.5,
		24 : 1.5,
		25 : 2.3,
		26 : 3,   
		30 : 0,
		31 : 0,
		32 : 3.47,
		33 : 3.47
	}
};

function Rectangle(ctx, width, height, zonesX, zonesY, zonesDictX, zonesDictY){
    this.widthZone = width/zonesX;
    this.heightZone = height/zonesY;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.zonesX = zonesX;
    this.zonesY = zonesY;
    this.zonesDictX = zonesDictX;
    this.zonesDictY = zonesDictY;

    this.drawPitch = function(){
	   	this.ctx.rect(0,0,this.width, this.height);

	    this.ctx.fillStyle = "lightgreen"
	    this.ctx.fill();

	    this.ctx.lineWidth = "2";    
	    this.ctx.strokeStyle = "black";

	    this.ctx.stroke();
	    var iter;
	    console.log(this.widthZone);

	    for(iter=1; iter < this.zonesX; iter++){
	        this.ctx.beginPath();
	        this.ctx.moveTo(this.widthZone*iter, 0);
	        this.ctx.lineTo(this.widthZone*iter, this.height);
	        this.ctx.strokeStyle = '#000000';
	        this.ctx.lineWidth = 2;

	        this.ctx.stroke();
	    }

	    for(iter=1; iter < this.zonesY; iter++){
	        this.ctx.beginPath();
	        this.ctx.moveTo(0, this.heightZone*iter);

	        if(iter == 2){
		        this.ctx.lineTo(this.width-this.widthZone, this.heightZone*iter);
	        }
	        else {
	        	this.ctx.lineTo(this.width, this.heightZone*iter);
	        }
	        this.ctx.strokeStyle = '#000000';
	        this.ctx.lineWidth = 2;
	        this.ctx.stroke();
	    }

	    // 16 meter
	    this.ctx.beginPath();
	    this.ctx.moveTo(this.widthZone*5, this.heightZone + this.heightZone/2);
        this.ctx.lineTo(this.widthZone*6, this.heightZone + this.heightZone/2);   
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

	    this.ctx.beginPath();
	    this.ctx.moveTo(this.widthZone*5, this.heightZone*2 + this.heightZone/2);
        this.ctx.lineTo(this.widthZone*6, this.heightZone*2 + this.heightZone/2);   
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

	    this.ctx.beginPath();
	    this.ctx.moveTo(this.widthZone*6 - this.widthZone/3, this.heightZone + this.heightZone/2);
        this.ctx.lineTo(this.widthZone*6 - this.widthZone/3, this.heightZone*2 + this.heightZone/2);   
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    };

    this.drawPercentNumbers = function(zones, total){
    	this.ctx.fillStyle = "black";
	    this.ctx.font = "bold 16px Arial";
	    var adjustment = 20;
	    var that = this;

	    _.each(zones, function(data){
			var zone = data.term;
	        var count = data.count;

	        var x = that.zonesDictX[zone] * that.widthZone + that.widthZone/2 - adjustment;
	        var y = that.zonesDictY[zone] * that.heightZone + that.heightZone/2;

	        var percent = (((count/total) * 100).toFixed(2));

	        that.ctx.fillText(percent.toString()+"%", x, y);
	    });
    };
};


        // var adjustment = 5;
        // var pictureSizeX = 413;
        // var pictureSizeY = 288;
        // var pitchSizeX = pictureSizeX - adjustment*2;
        // var pitchSizeY = pictureSizeY - adjustment*2;

        // [newArray[0]].every(function(tmp){
        //     jQuery.ajax({
        //         url: "player/" + tmp.player_id,
        //         dataType : "json",
        //         success: function(resp,textStatus, jqXHR ){
        //             console.log("RESPONSE %j", resp);
        //         }
        //     });


        //     console.log(tmp.player_id.toString());
        //     var paper = Raphael(tmp.player_id.toString(), "100%", "25%");
        //     var pitchImage = paper.image('/img/pitchSmall.png', 0, 0, pictureSizeX, pictureSizeY);

        //     // Creates circle at x = 50, y = 40, with radius 10
        //     var circle1 = paper.circle(pictureSizeX/2, 30, 5);
        //     // Sets the fill attribute of the circle to red (#f00)
        //     circle1.attr("fill", "#f00");
        //     // Sets the stroke attribute of the circle to white
        //     circle1.attr("stroke", "#fff");
        //     var circle2 = paper.circle(pictureSizeX/2, pictureSizeY/2, 5);
        //     // Sets the fill attribute of the circle to red (#f00)
        //     circle2.attr("fill", "#f00");
        //     // Sets the stroke attribute of the circle to white
        //     circle2.attr("stroke", "#fff");

        //     var animCircle1 = Raphael.animation({cx: pictureSizeX - 20, cy: 30}, 2e3);
        //     var animCircle2 = Raphael.animation({cx: pictureSizeX - 20, cy: pictureSizeY/2 - 30}, 2e3);
            
        //     circle1.animate(animCircle1); // run the given animation immediately
        //     circle2.animate(animCircle2.delay(500)); // run the given animation after 500 ms

        // });
