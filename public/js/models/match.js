
window.MatchModel = Backbone.Model.extend({
    urlRoot : 'match',

    getAttacks: function(){
    	 var listOfModels = []
        _.each(this.get('attacks'), function(attack){
            var tmp = new AttackModel(attack);
            listOfModels.push(tmp);
        });
        // console.log(listOfModels);
        return listOfModels;
    },

    getAttacksJSON : function(){
         var listOfModels = []
        _.each(this.get('attacks'), function(attack){
            var tmp = new AttackModel(attack);
            listOfModels.push(tmp.toJSON());
        });
        // console.log(listOfModels);
        return listOfModels;

    }
});

window.MatchListCollection = Backbone.Collection.extend({
    model: MatchModel,
    url: "matches",

    parse : function(resp) {
        var listOfModels = []
        _.each(resp, function(match){
            var tmp = new MatchModel(match)
            listOfModels.push(tmp);
        });
        // console.log(listOfModels);
        return listOfModels;
    }

});