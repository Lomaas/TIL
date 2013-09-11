window.PlayerModel = Backbone.Model.extend({
    urlRoot : '/match/:id/attack/:time',
    idAttribute: "_id"
});
