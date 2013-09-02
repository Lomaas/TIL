 // This view turns a Service model into HTML. Will create LI elements.
window.MatchView = Backbone.View.extend({
    el : $('#match'),
    

    initialize: function () {
        console.log("init MatchView");
        this.model.bind("reset", this.render, this);
        var that = this;

        that.model.fetch({
            success: function () {
                that.render();
            }
        });
    },

    render: function (eventName) {
        console.log("in Render: %j", this.model.toJSON())
        console.log(this.model.get("match"))
        var temp = Mustache.render(this.template(), {match : this.model.get("match")});
        this.$el.html(temp);

        return this;
    }
});
