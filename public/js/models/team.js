window.TeamModel = Backbone.Model.extend({
    urlRoot : 'team',

    getPasses: function(){
    	 var listOfModels = [];
         
        _.each(this.get('passes'), function(attack){
            var tmp = new PassModel(attack);
            listOfModels.push(tmp);
        });
        return listOfModels;
    },

    parse: function(resp){
        var breakthroughXaxis = [];
        var breakthroughValues = [];

        _.each(resp.breakthrough, function(breakthrough){
            breakthroughXaxis.push(breakthrough.term);
            breakthroughValues.push(breakthrough.count);
        });
        resp.breakthroughXaxis = breakthroughXaxis;
        resp.breakthroughValues = breakthroughValues;

        resp["players"] = {};
        _.each(resp.breakthroughPlayers, function(player){
            resp.players[player.term.toString()] = {
                "numBreakthrough" : player.count
            }
        });

        delete resp["breakthrough"];
        delete resp["breakthroughPlayers"];

        return resp;
    }
});

window.TeamListCollection = Backbone.Collection.extend({
    model: TeamModel,
    url: "teams",

    parse : function(resp) {
        var listOfModels = [];

        _.each(resp, function(match){
            var tmp = new TeamModel(match._source)
            listOfModels.push(tmp);
        });

        return listOfModels;
    }

});

