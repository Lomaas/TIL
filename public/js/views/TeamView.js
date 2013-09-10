window.TeamView = Backbone.View.extend({
    el : $('#team'),

    initialize: function () {
        console.log("init Team");
        var that = this;
        console.log(this.model);
        this.model.fetch({
            success: function () {
                console.log("fetched %d", that.model);
                that.render();
            }
        });
    },

    render: function (eventName) {
        console.log(this.model);

        var temp = Mustache.render(this.template(), {teamname : this.model.id});
        this.$el.html(temp);

        return this;
    }
});
