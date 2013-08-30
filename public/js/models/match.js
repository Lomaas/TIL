
window.MatchModel = Backbone.Model.extend({
    // defaults:{
    //     title: 'Test match',
    //     matchId : 1,

    // },
    urlRoot : 'match',

    getAttacks: function(){
    	return new AttackModel(this.get('attacks'));
    }
});

// Create a collection of services
window.MatchListCollection = Backbone.Collection.extend({

    // Will hold objects of the Match model
    model: MatchModel,
    url:"../matches"

});