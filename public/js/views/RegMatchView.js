 // This view turns a Service model into HTML. Will create LI elements.
window.RegMatchView = Backbone.View.extend({
    el : $('#newmatch'),
    
    events : {
        "click addNewPass" : "addNewPass",
        "click addNewAttack" : "addNewAttack",
        "click postNewMatchData" : "postNewMatchData"
    },
    
    initialize: function () {
        console.log("init HomeView");
        this.render();
    },

    render: function (eventName) {
        console.log("in Render");
        var temp = Mustache.render(this.template(), {});
        this.$el.html(temp);
        return this;
    },

    postNewMatchData : function(e){
        console.log("postNewMatchData");
    },

    addNewAttack : function(e){
        console.log("addNewAttack");
    },

    addNewPass : function(e){
        console.log("addnewpass");
    }
});
