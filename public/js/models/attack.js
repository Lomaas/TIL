
window.AttackModel = Backbone.Model.extend({
    urlRoot : '/match/:id/attack',
    idAttribute: "_id",


    getPasses: function(){
    	return new PassModel(this.get('passes'));
    }
});
