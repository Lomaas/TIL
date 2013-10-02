window.PlayerModel = Backbone.Model.extend({
    urlRoot : 'player'
});

window.PlayerListCollection = Backbone.Collection.extend({
    model: PlayerModel,

    parse : function(resp) {
        var listOfModels = [];
        console.log(resp);
        _.each(resp, function(player){
            console.log(player);
            var playerModel = {
                "teamName" : player._source.team,
                "name" : player._source.name,
                "player_id" : player._source.player_id
            };
            var tmp = new PlayerModel(playerModel);

            listOfModels.push(tmp);
        });
        console.log(listOfModels);
        return listOfModels;
    }
});

