window.PlayerView = Backbone.View.extend({
    el : $('#player'),

    initialize: function (options) {
        var that = this;

        that.model.fetch({
            success: function () {
                that.render();
            }
        });
    },

    render: function () {
        // Render HTML first, so that we can find DIVs to insert graphs and canvas to.
        var temp = Mustache.render(this.template(),
            {
                stats : this.model.toJSON(), 
                name : this.model.get("currentPlayer").name,
                team : this.model.get("currentPlayer").team,
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

        $('#passesChart').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: this.model.get("currentPlayer").name + ' passes played and received'
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
                text: 'Types of breakthrough'
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
