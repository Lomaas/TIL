
window.MatchModel = Backbone.Model.extend({
    urlRoot : 'match',

    getAttacks: function(){
    	return new AttackModel(this.get('attacks'));
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