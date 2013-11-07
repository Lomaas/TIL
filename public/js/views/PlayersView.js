 // This view turns a Service model into HTML. Will create LI elements.
window.PlayersView = Backbone.View.extend({
    el : $('#players'),

    events : {
        "click a" : "clicked"
    },
    
    initialize: function () {
        console.log("init HomeView");
        this.model.bind("reset", this.render, this);
        var that = this;
    },

    render: function () {
        console.log("in Render: %j", this.model.toJSON());
        var data = this.model.toJSON();
        var temp = Mustache.render(this.template(), {players : data});
        this.$el.html(temp);

        return this;
    },

    clicked: function(e){
        e.preventDefault();
        var url = $(e.currentTarget).data("id");
        console.log(url);
        app.navigate(url, true);
    },

    getModelData: function(){
        return this.model.toJSON();
    }
});
