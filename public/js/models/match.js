
window.MatchModel = Backbone.Model.extend({
    urlRoot : 'match',

    getAttacks: function(){
    	 var listOfModels = []
        _.each(this.get('attacks'), function(attack){
            var tmp = new AttackModel(attack);
            listOfModels.push(tmp);
        });

        return listOfModels;
    },

    getAttacksJSON : function(){
         var listOfModels = []
         console.log(this);
        _.each(this.get('attacks'), function(attack){
            var tmp = new AttackModel(attack);
            listOfModels.push(tmp.toJSON());
        });
        return listOfModels;
    },

    parse : function(resp){
        return resp._source;
    }
});

window.MatchListCollection = Backbone.Collection.extend({
    model: MatchModel,
    url: "matches",

    parse : function(resp) {
        var listOfModels = []
        _.each(resp, function(match){
            console.log(match);
            var tmp = new MatchModel(match._source)
            tmp.id = match._id;
            listOfModels.push(tmp);
        });

        return listOfModels;
    }

});