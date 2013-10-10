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
        var playerById = {};
        var playerByName = {};

        var dataPieChart = [];
        var dataBarChart = [];
        var dataBarTerms = [];
        
        var involvedXaxis= [];
        var involvedValues = [];

        var keyPlayers = this.model.get("players");
        console.log(keyPlayers);

        var players = this.options.playersModel.toJSON();
        var i;
        console.log(players);
        
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

        console.log(keyPlayers["Josh Pritchard"]);

        for(i=0; i < receivedPasses.length; i++){
            var playerId = receivedPasses[i].term.toString();

            if(playerById[playerId] != undefined && receivedPasses[i].count > 0){
                var name = playerById[playerId]["name"].toString();
                console.log(name);
 
                if(keyPlayers[name] == undefined){
                    keyPlayers[name] = {
                        "numAttacks" : receivedPasses[i].count
                    }
                }
                else {
                    keyPlayers[name].numAttacks = receivedPasses[i].count;
                }
            }
        }
        var temp = Mustache.render(this.template(), {
                teamname : this.model.id, 
                breakthrough : this.model.get("breakthrough"),
                breakthroughPlayer : this.model.get("breakthroughPlayers"),
                typeOfAttack : this.model.get("typeOfAttack"),
                zones : this.model.get("zones").zones
            });
        this.$el.html(temp);


        // create Type of attack pie chart
        _.each(this.model.get("typeOfAttack"), function(attack){
            dataPieChart.push({
                "value" : attack.count,
                "color" : Config.getColors(),
                "label" : attack.term + " (" + attack.count + ")",
                "labelColor": 'black',
                "labelFontSize": '15'
            })
        });

        console.log(keyPlayers);

        var ctx = $("#typesOfAttack").get(0).getContext("2d");
        var pieChart = new Chart(ctx).Pie(dataPieChart, {
            labelAlign: 'center'
        });

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
            }
        });

        console.log(Object.keys(keyPlayers));
        console.log(breakthroughValues);
        console.log(involvedValues);


        $('#breakthroughPlayerChart').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Which players is most involved in attacks/breakthrough player'
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
                    }
                ]
            }

        );

        //var typesBreakthorugh = ["Pasning Bakrom", "Pasning Mellomrom", "1vs1 Bakrom", "1vs1 Mellomrom", "Gjennombrudd i LA"];
        $('#breakthroughFrom').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: "Where was the breakthroughs from"
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
    
        var width = 600;
        var height = 400;

        var c=document.getElementById("attackingZones");
        var ctx=c.getContext("2d");
        var widthZone = width/Config.zonesX;
        var heightZone = height/Config.zonesY;
        rect = new Rectangle(ctx, width, height, Config.zonesX, Config.zonesY, Config.zonesDictX, Config.zonesDictY);
        rect.drawPitch();
        //rect.drawPercentNumbers(this.model.get("zones").zones, this.model.get("zones").total);

        return this;
    }
});
