window.TeamsView = Backbone.View.extend({
    el : $('#teamslist'),

    events : {
        "click a" : "clicked"
    },

    initialize: function () {
        var that = this;
        that.model.fetch({
            success: function () {
                console.log("fetched %d", that.model.models.length);
                that.render();
            }
        });
    },

    render: function (eventName) {
        var temp = Mustache.render(this.template(), {teams : this.model.toJSON()});
        this.$el.html(temp);

        return this;
    },

    clicked : function(e){
        e.preventDefault();
        var id = $(e.currentTarget).data("id");
        app.navigate('team/' + id, true);
    }
});
