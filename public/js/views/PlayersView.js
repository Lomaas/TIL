 // This view turns a Service model into HTML. Will create LI elements.
window.PlayersView = Backbone.View.extend({
    el : $('#players'),

    events : {
        "click a" : "clicked"
    },
    
    initialize: function () {
        this.model.bind("reset", this.render, this);
        var that = this;
        this.render();
    },

    render: function () {
        var data = this.model.toJSON();
        var temp = Mustache.render(this.template(), {players : data});
        this.$el.html(temp);
        return this;
    },

    clicked: function(e){
        e.preventDefault();
        var url = $(e.currentTarget).data("id");
        app.navigate(url, true);
    },

    getModelData: function(){
        return this.model.toJSON();
    }
});
