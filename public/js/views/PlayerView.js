window.PlayerView = Backbone.View.extend({
    el : $('#player'),

    initialize: function () {
        console.log("init Player View");
        var that = this;

        that.model.fetch({
            success: function () {
                that.render();
            }
        });
    },

    render: function (eventName) {
        console.log("in Render: %j", this.model.toJSON());

        var temp = Mustache.render(this.template(),
            {
                stats : this.model.toJSON(), 
                name : this.model.get("name")
            }
        );
        this.$el.html(temp);
        var width = 600;
        var height = 400;
        var widthZone = width/Config.zonesX;
        var heightZone = height/Config.zonesY;
        
        var c=document.getElementById("attackingZonesPlayedFrom");
        var ctx=c.getContext("2d");
   
        rect = new Rectangle(ctx, width, height, Config.zonesX, Config.zonesY, Config.zonesDictX, Config.zonesDictY);
        rect.drawPitch();
        rect.drawPercentNumbers(this.model.get("facets").fromPos.terms, this.model.get("facets").fromPos.total);

        c=document.getElementById("attackingZonesPlayedTo");
        ctx=c.getContext("2d");
   
        rect = new Rectangle(ctx, width, height, Config.zonesX, Config.zonesY, Config.zonesDictX, Config.zonesDictY);
        rect.drawPitch();
        rect.drawPercentNumbers(this.model.get("facets").toPos.terms, this.model.get("facets").toPos.total);

        return this;
    }
});
