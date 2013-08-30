
window.AttackModel = Backbone.Model.extend({
    urlRoot : '/match/:id/attack',


    getPasses: function(){
    	return new PassModel(this.get('passes'));
    }
});
