window.TeamModel = Backbone.Model.extend({
    urlRoot : 'team',

    getPasses: function(){
    	 var listOfModels = []
        _.each(this.get('passes'), function(attack){
            var tmp = new PassModel(attack);
            listOfModels.push(tmp);
        });
        return listOfModels;
    },

    parse: function(resp){
    	console.log(resp);
    }
});

window.TeamListCollection = Backbone.Collection.extend({
    model: TeamModel,
    url: "teams",

    parse : function(resp) {
        var listOfModels = []
        _.each(resp, function(match){
            var tmp = new TeamModel(match)
            listOfModels.push(tmp);
        });
        console.log(listOfModels);
        return listOfModels;
    }

});