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
                name : this.model.get("currentPlayer").name,
                team : this.model.get("currentPlayer").team
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
        console.log(this.model);
        $('#playedToChart').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Counting of passes ' + this.model.get("currentPlayer").name + ' has played to and to who'
            },
            xAxis: {
                categories: this.model.get("toPlayerXaxis")
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number'
                }
            },
            series: [
                {
                    name: 'Passes to player',
                    data: this.model.get("toPlayerYaxis")
                },
            ]
        });


        return this;
    }
});
