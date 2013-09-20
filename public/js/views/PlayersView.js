 // This view turns a Service model into HTML. Will create LI elements.
window.PlayersView = Backbone.View.extend({
    el : $('#matches'),
    
    initialize: function () {
        console.log("init HomeView");
        this.model.bind("reset", this.render, this);
        var that = this;

        that.model.fetch({
            success: function () {
                console.log("fetched %d", that.model.models.length);
                that.render();
            }
        });
    },

    render: function (eventName) {
        console.log("in Render: %j", this.model.toJSON())
        var players = [];
        
        var temp = Mustache.render(this.template(), {players : players});
        this.$el.html(temp);

        return this;
    }
});
