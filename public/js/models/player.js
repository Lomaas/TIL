window.PlayerModel = Backbone.Model.extend({
    urlRoot : 'player',
    parse : function(resp){
        console.log(resp);
        resp['playerXaxis'] = [];
        resp['toPlayerYaxis'] = [];
        resp['fromPlayerYaxis'] = [];
        
        _.each(resp.facets, function(pass){
            resp['playerXaxis'].push(pass.name);
            resp['toPlayerYaxis'].push(pass.countToPlayer);
            resp['fromPlayerYaxis'].push(pass.countFromPlayer);
        });
        return resp;
    }
});

window.PlayerListCollection = Backbone.Collection.extend({
    model: PlayerModel,

    parse : function(resp) {
        var listOfModels = [];
        // console.log(resp);
        _.each(resp, function(player){
            // console.log(player);
            var playerModel = {
                "teamName" : player._source.team,
                "name" : player._source.name,
                "player_id" : player._source.player_id
            };
            var tmp = new PlayerModel(playerModel);

            listOfModels.push(tmp);
        });
        // console.log(listOfModels);
        return listOfModels;
    }
});

