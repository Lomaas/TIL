window.AttackModel = Backbone.Model.extend({
    urlRoot : '/match/:id/attack',

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
