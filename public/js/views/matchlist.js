 // This view turns a Service model into HTML. Will create LI elements.
window.MatchView = Backbone.View.extend({
    el : $('#page'),
 
    initialize:function () {
        console.log("init matchView");
        this.model.bind("reset", this.render, this);
    },
 
    render:function (eventName) {
        _.each(this.model.models, function (match) {
            console.log(match);
            
            //$(this.el).append(new MatchView({model:match}).render().el);
        }, this);
        return this;
    }
});

window.ValueView = Backbone.View.extend({
    initialize: function(args) {
        console.log("Init ValueView");
        _.bindAll(this, 'updateTitle');
    },

    updateTitle: function() {
        console.log("Update Title");
        var value = this.model.get('title');
        console.log("Value %s", value);
        $("#test").html(value.toString());
    }
});