 // This view turns a Service model into HTML. Will create LI elements.
window.HomeView = Backbone.View.extend({
    el : $('#matches'),
    
    events : {
        "click #panel-matches" : "onClickPanelItem",
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
        console.log("in Render: %j", this.model.toJSON());
        var matches = [];

        _.each(this.model.models, function(match){
            console.log(match);
           // console.log(match.attributes)

            matches.push({"name" : match.get("hometeam") + " - " + match.get("awayteam"), 
                "matchId" : match.id, 
                "keyPlayer" : "Bendik", 
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

    onClickPanelItem : function(elem){
        console.log(elem);
    },

    clicked : function(e){
        e.preventDefault();
        var id = $(e.currentTarget).data("id");
        console.log(id);
        app.navigate('match/' + id, true);
    }
});
