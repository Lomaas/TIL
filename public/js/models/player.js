window.PlayerModel = Backbone.Model.extend({
    urlRoot : 'player'
});

window.PlayerListCollection = Backbone.Collection.extend({
    model: PlayerModel,

    parse : function(resp) {
        var listOfModels = []
        // _.each(resp, function(match){
        //     var tmp = new TeamModel(match._source)
        //     listOfModels.push(tmp);
        // });
        console.log(listOfModels);
        return listOfModels;
    }
});

