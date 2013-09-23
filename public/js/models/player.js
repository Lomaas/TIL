window.PlayerModel = Backbone.Model.extend({
    urlRoot : 'player'
});

window.PlayerListCollection = Backbone.Collection.extend({
    model: PlayerModel,

    parse : function(resp) {
        var listOfModels = []
        console.log(resp);
        _.each(resp.players, function(player){
            player.teamName = resp.name;
            var tmp = new PlayerModel(player)
            listOfModels.push(tmp);
        });
        console.log(listOfModels);
        return listOfModels;
    }
});

