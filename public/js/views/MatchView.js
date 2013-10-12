 // This view turns a Service model into HTML. Will create LI elements.
window.MatchView = Backbone.View.extend({
    el : $('#singlematch'),

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
        console.log("in Render: %j", this.model.toJSON());
        console.log(this.model.getAttacksJSON());

        var attacks = this.model.getAttacksJSON();
        var temp = Mustache.render(
            this.template(), 
            {   
                "match" : this.model.get("hometeam") + " - " + this.model.get("awayteam"), 
                "matchObj" : this.model.toJSON(),
                "attacks" : attacks,
                "length" : attacks.length
            }
        );
        this.$el.html(temp);
        return this;
    }
});
