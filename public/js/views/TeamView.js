window.TeamView = Backbone.View.extend({
    el : $('#team'),

    initialize: function () {
        console.log("init Team");
        this.render();
    },

    render: function (eventName) {
        var temp = Mustache.render(this.template(), {});
        this.$el.html(temp);

        return this;
    }
});
