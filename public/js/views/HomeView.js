 // This view turns a Service model into HTML. Will create LI elements.
window.HomeView = Backbone.View.extend({
    el : $('#matches'),
    
    events : {
        "click a" : "clicked",
        "click #newMatch" : "onButtonNewMatch"
    },

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
        var matches = [];

        _.each(this.model.models, function(match){
            matches.push({"name" : match.get("hometeam") + " - " + match.get("awayteam"), 
                "matchId" : match.id, 
                "numAttacks" : match.get("attacks").length,
                "score" : match.get("score"),
                "date" : match.get("date")
            });
        });
        var temp = Mustache.render(this.template(), {matches : matches});
        this.$el.html(temp);

        return this;
    },

    onButtonNewMatch : function(e){
        app.navigate('match/new', true);
    },

    clicked : function(e){
        e.preventDefault();
        var id = $(e.currentTarget).data("id");
        app.navigate('match/' + id, true);
    }
});
