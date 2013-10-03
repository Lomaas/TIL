window.PlayerView = Backbone.View.extend({
    el : $('#player'),

    initialize: function () {
        console.log("init Player View");
        var that = this;

        that.model.fetch({
            success: function () {
                that.render();
            }
        });
    },

    render: function (eventName) {
        console.log("in Render: %j", this.model.toJSON())

        var temp = Mustache.render(this.template(),
            {
                stats : this.model.toJSON(), 
                name : this.model.get("name")
            }
        );
        this.$el.html(temp);

        return this;
    }
});
