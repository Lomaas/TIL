window.PlayerView = Backbone.View.extend({
    el : $('#player'),

    initialize: function (options) {
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
   
        var rect = new Rectangle(ctx, width, height, Config.zonesX, Config.zonesY, Config.zonesDictX, Config.zonesDictY);
        rect.drawPitch();
        rect.drawPercentNumbers(this.model.get("facetsFromPlayer").fromPos.terms, this.model.get("facetsFromPlayer").fromPos.total);

        c=document.getElementById("attackingZonesPlayedTo");
        ctx=c.getContext("2d");
   
        rect = new Rectangle(ctx, width, height, Config.zonesX, Config.zonesY, Config.zonesDictX, Config.zonesDictY);
        rect.drawPitch();
        rect.drawPercentNumbers(this.model.get("facetsToPlayer").toPos.terms, this.model.get("facetsToPlayer").toPos.total);
        console.log(this.model);

        $('#passesChart').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Passes received and played for ' + this.model.get("currentPlayer").name
            },
            xAxis: {
                categories: this.model.get("playerXaxis")
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number'
                }
            },
            series: [
                {
                    name: 'To player',
                    data: this.model.get("toPlayerYaxis")
                },
                {
                    name: 'From player',
                    data: this.model.get("fromPlayerYaxis")
                },
            ]
        });

        // Create a own view for this
        var that = this;
        jQuery.ajax({
            url: "stats/breakthroughs/" + this.model.get("currentPlayer").name,
            dataType : "json",
            success: function getBreakthroughs(resp, textStatus, jqXHR){
                console.log("RESPONSE %j", resp);

                var dataPieChart = [];
                _.each(resp.breakthrough, function(breakthrough){
                    dataPieChart.push([breakthrough.term, breakthrough.count]);
                });
                if(dataPieChart.length > 0)
                    that.renderBreakthroughChart(dataPieChart);
            }
      	});

        return this;
    },
    renderBreakthroughChart : function(dataPieChart){
        $('#typesOfBreakthrough').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Breakthrough'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Breakthroughs',
                data: dataPieChart
            }]
        });
    }

});
