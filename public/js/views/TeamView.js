window.TeamView = Backbone.View.extend({
    el : $('#team'),

    initialize: function () {
        console.log("init Team");
        var that = this;
        this.model.fetch({
            success: function () {
                that.render();
            }
        });
    },

    render: function (eventName) {

        console.log(this.model.get("breakthroughPlayers"));

        var temp = Mustache.render(this.template(), 
            {
                teamname : this.model.id, 
                breakThrough : this.model.get("breakThrough"),
                breakthroughPlayer : this.model.get("breakthroughPlayers"),
                typeOfAttack : this.model.get("typeOfAttack"),
                ballReceived : this.model.get("ballReceived")
            });
        this.$el.html(temp);

        return this;
    }
});
