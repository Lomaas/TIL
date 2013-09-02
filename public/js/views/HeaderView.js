 // This view turns a Service model into HTML. Will create LI elements.
window.HeaderView = Backbone.View.extend({
    el : $('#header'),
    
    initialize: function () {
        console.log("init headerView");
        this.render();
   
    },

    render: function (eventName) {
        var temp = Mustache.render(this.template(), {});
        this.$el.html(temp);

        return this;
    },
});
