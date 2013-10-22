 // This view turns a Service model into HTML. Will create LI elements.
window.RegPassView = Backbone.View.extend({
    counter : 0,
    
    events :{
        "click #destroy" : "destroyView"
    },
    
    initialize: function () {
        console.log("init RegPassView");
        this.render();
    },

    render: function (eventName) {
        console.log("in Render RegPassView");
        var temp = Mustache.render(this.template(), {});
        this.$el.html(temp);
        return this;
    },
        destroyView : function(e){    
        //COMPLETELY UNBIND THE VIEW
        this.undelegateEvents();

        this.$el.removeData().unbind(); 

        //Remove view from DOM
        this.remove();  
        Backbone.View.prototype.remove.call(this);

    }
});
