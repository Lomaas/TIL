 // This view turns a Service model into HTML. Will create LI elements.
window.MatchView = Backbone.View.extend({
    el : $('#matches'),
 
    initialize: function () {
        console.log("init matchView");
        this.model.bind("reset", this.render, this);
    },
 
    render: function (eventName) {
        var template = _.template( $("#search_template").html(), {} );
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( template );

        console.log(this.model.toJSON());

        // this.model.models.forEach(match){
        //     console.log(match);
        // }
        // console.log("are you here");
        // _.each(this.model, function (match) {
        //     console.log("inside forLoop");

        //     console.log(match);
            
        //     //$(this.el).append(new MatchView({model:match}).render().el);
        // }, this);
        return this;
    }
});
