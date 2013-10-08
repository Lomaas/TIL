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
                zones : this.model.get("zones")
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
        return this;
    }
});
