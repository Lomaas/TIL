window.TeamView = Backbone.View.extend({
    el : $('#team'),

    initialize: function () {
        console.log("init Team");
        var that = this;
        this.model.fetch({
            success: function () {
                that.render();
            }
        });
    },

    render: function (eventName) {
        var playersDict = {}

        var players = this.options.playersModel.toJSON();
        var i;
        for(i=0; i < players.length; i++){
            playersDict[players[i].player_id.toString()] = {
                "name" : players[i].name,
                "team" : players[i].teamName
            }
        }
        var ballReceived = this.model.get("ballReceived");
        var newArray = [];

        for(i=0; i < ballReceived.length; i++){
            playerId = ballReceived[i].term.toString();

            if(playersDict[playerId] != undefined && ballReceived[i].count > 1)
                newArray.push({
                    "name" : playersDict[playerId].name,
                    "count" : ballReceived[i].count,
                    "player_id" : ballReceived[i].term
                });
        }
        console.log(newArray);
        var temp = Mustache.render(this.template(), 
            {
                teamname : this.model.id, 
                breakthrough : this.model.get("breakthrough"),
                breakthroughPlayer : this.model.get("breakthroughPlayers"),
                typeOfAttack : this.model.get("typeOfAttack"),
                ballReceived : newArray,
                zones : this.model.get("zones")
            });
        this.$el.html(temp);

        var adjustment = 5;
        var pictureSizeX = 413;
        var pictureSizeY = 288;
        var pitchSizeX = pictureSizeX - adjustment*2;
        var pitchSizeY = pictureSizeY - adjustment*2;

        _.each(newArray, function(tmp){
            jQuery.ajax({
                url: "player/" + tmp.player_id,
                dataType : "json",
                success: function(resp,textStatus, jqXHR ){
                    console.log("RESPONSE %j", resp);
                    
                }
            });


            console.log(tmp.player_id.toString());
            var paper = Raphael(tmp.player_id.toString(), "40%", "25%");
            var pitchImage = paper.image('/img/emptyPitchSmall.png', 0, 0, pictureSizeX, pictureSizeY);

            // Creates circle at x = 50, y = 40, with radius 10
            var circle1 = paper.circle(50, 40, 10);
            // Sets the fill attribute of the circle to red (#f00)
            circle1.attr("fill", "#f00");
            // Sets the stroke attribute of the circle to white
            circle1.attr("stroke", "#fff");
            var circle2 = paper.circle(50, 40, 10);
            // Sets the fill attribute of the circle to red (#f00)
            circle2.attr("fill", "#f00");
            // Sets the stroke attribute of the circle to white
            circle2.attr("stroke", "#fff");

            var anim = Raphael.animation({cx: 10, cy: 20}, 2e3);
            circle1.animate(anim); // run the given animation immediately
            circle2.animate(anim.delay(500)); // run the given animation after 500 ms
        });


        return this;
    }
});
