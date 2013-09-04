window.TeamView = Backbone.View.extend({
    el : $('#team'),

    initialize: function () {
        console.log("init Team");
        var that = this;
        this.model.fetch({
            success: function () {
                console.log("fetched %d", that.model.models.length);
                that.render();
            }
        });
    },

    render: function (eventName) {
        console.log(this.model);
        var temp = Mustache.render(this.template(), {});
        this.$el.html(temp);

        return this;
    }
});
