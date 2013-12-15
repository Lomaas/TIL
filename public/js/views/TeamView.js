window.TeamView = Backbone.View.extend({
    el : $('#team'),

    initialize: function () {
        var that = this;
        this.model.fetch({
            success: function () {
                that.render();
            }
        });

        async.parallel([
            function(callback){
                that.chartModel = new ChartModel({url : "team/" + that.options.name + "/finalthird"});
                that.chartModel.fetch({
                    success: function () {
                        callback();
                    }
                });
            },
            function(callback){
                console.log("second");
                that.playersList = new PlayerListCollection();
                that.playersList.url = "team/" + that.options.name + "/players";

                that.playersList.fetch({
                    success: function () {
                        that.playersView = new PlayersView({model : that.playersList});
                        callback();
                    }
                });
            }],
            function callback(){
                // Final callback
                that.renderChartFinalThird();
            }
        );
    },

    renderChartFinalThird : function(){
        var involvedXaxis= [];
        var involvedValues = [];
        var finalThirdPasses = [];
        var playerById = {};
        var playerByName = {};
        var finalthird = this.chartModel.get("facets");
        var keyPlayers = this.model.get("players");
        var players = this.playersView.getModelData();
        var i;

        if(players == undefined)
            alert("players undefined");


        for(i=0; i < players.length; i++){
            var name = players[i].name;
            var playerId = players[i].player_id.toString();

            playerById[playerId] = {
                "name" : name,
                "team" : players[i].teamName
            };

            playerByName[name] = {
                "player_id" : players[i].player_id.toString(),
                "team" : players[i].teamName
            }
        }

        var receivedPasses = this.model.get("ballReceived");

        for(i=0; i < receivedPasses.length; i++){
            var playerId = receivedPasses[i].term.toString();
            if(playerById[playerId] != undefined){
                if(receivedPasses[i].count > 0){
                    var name = playerById[playerId]["name"].toString();

                    if(keyPlayers[name] == undefined){
                        keyPlayers[name] = {
                            "numAttacks" : receivedPasses[i].count
                        }
                    }
                    else {
                        keyPlayers[name].numAttacks = receivedPasses[i].count;
                    }
                }

                if(finalthird[playerId].count > 0){
                    var name = playerById[playerId]["name"].toString();

                    if(keyPlayers[name] == undefined){
                        keyPlayers[name] = {
                            "numAttacksFinalThird" : finalthird[playerId].count
                        }
                    }
                    else {
                        keyPlayers[name].numAttacksFinalThird = finalthird[playerId].count;
                    }

                }

            }
        }

        var breakthroughValues = []
        var involvedValues = [];

        _.each(Object.keys(keyPlayers), function(player){
            if(keyPlayers[player].numBreakthrough > 0 || keyPlayers[player].numAttacks > 0){

                if(keyPlayers[player].numBreakthrough != undefined)
                    breakthroughValues.push(keyPlayers[player].numBreakthrough);
                else
                    breakthroughValues.push(0);

                if(keyPlayers[player].numAttacks != undefined)
                    involvedValues.push(keyPlayers[player].numAttacks);
                else
                    involvedValues.push(0);

                if(keyPlayers[player].numAttacksFinalThird != undefined)
                    finalThirdPasses.push(keyPlayers[player].numAttacksFinalThird);
                else
                    finalThirdPasses.push(0);
            }
        });

        $('#breakthroughPlayerChart').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Involvements in attacks, passes into final third and total breakthroughs for each player'
            },
            xAxis: {
                categories: Object.keys(keyPlayers)
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number'
                }
            },
            series: [
                {
                    name: 'Breakthrough player',
                    data: breakthroughValues
                },
                {
                    name: "Attacks involved in",
                    data: involvedValues
                },
                {
                    name: "Passes into final third",
                    data: finalThirdPasses
                }
            ]
        });
    },

    render: function () {
        // Render HTML first, so that we can find DIVs to insert graphs and canvas to.
        var temp = Mustache.render(this.template(), {
            teamname : this.model.id,
            breakthrough : this.model.get("breakthrough"),
            breakthroughPlayer : this.model.get("breakthroughPlayers"),
            typeOfAttack : this.model.get("typeOfAttack"),
            zones : this.model.get("zones").zones
        });

        this.$el.html(temp);

        var dataPieChart = [];
        var dataBarChart = [];
        var dataBarTerms = [];
        var total = 0;

        _.each(this.model.get("typeOfAttack"), function(attack){
            dataPieChart.push([attack.term, attack.count]);
            total = total + attack.count;
        });

        $('#typesOfAttack').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Types of attack (total: ' + total.toString() + ')'
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
                name: 'Types of attack',
                data: dataPieChart
            }]
        });


        if(this.model.get("breakthroughXaxis").length == 1){
           $('#breakthroughFrom').remove();
        }
        else {
            $('#breakthroughFrom').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: "Breakthroughs counted by area"
                },
                xAxis: {
                    categories: this.model.get("breakthroughXaxis")
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Number'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">Num: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: "Breakthrough from",
                    data: this.model.get("breakthroughValues")

                }]
            }); 
        }

        var width = 600;
        var height = 400;

        var c=document.getElementById("attackingZones");
        var ctx=c.getContext("2d");
        var widthZone = width/Config.zonesX;
        var heightZone = height/Config.zonesY;

        rect = new Rectangle(ctx, width, height, Config.zonesX, Config.zonesY, Config.zonesDictX, Config.zonesDictY);
        rect.drawPitch();
        rect.drawPercentNumbers(this.model.get("zones").zones, this.model.get("zones").total);

        c = document.getElementById("attackStart");
        ctx = c.getContext("2d");
        rect = new Rectangle(ctx, width, height, Config.zonesX, Config.zonesY, Config.zonesDictX, Config.zonesDictY);
        rect.drawPitch();
        rect.drawPercentNumbers(this.model.get("attackStart").zones, this.model.get("attackStart").total);

        c = document.getElementById("attackFinish");
        ctx = c.getContext("2d");
        rect = new Rectangle(ctx, width, height, Config.zonesX, Config.zonesY, Config.zonesDictX, Config.zonesDictY);
        rect.drawPitch();
        rect.drawPercentNumbers(this.model.get("attackFinish").zones, this.model.get("attackFinish").total);

        return this;
    },

    removeSubViews : function(){
        if(this.playersView != undefined){
            $(this.playersView.el).empty();
            this.playersView.unbind();
        }
    }
});
