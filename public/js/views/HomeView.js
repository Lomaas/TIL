 // This view turns a Service model into HTML. Will create LI elements.
window.HomeView = Backbone.View.extend({
    el : $('#matches'),
    
    events : {
        "click #panel-matches" : "onClickPanelItem",
        "click a" : "clicked"
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
        console.log("in Render: %j", this.model.toJSON())
        var matches = [];

        _.each(this.model.models, function(match){
            console.log(match)

           // console.log(match.attributes)

            matches.push({"name" : match.get("match"), "matchId" : match.get("matchId")});
        });
        var temp = Mustache.render(this.template(), {matches : matches});
        this.$el.html(temp);

        return this;
    },

    onClickPanelItem : function(elem){
        console.log(elem)

    },
    clicked : function(e){
        //e.preventDefault();
        var id = $(e.currentTarget).data("id");
        console.log(id);


        
    }
});
