window.HeaderView = Backbone.View.extend({
    el : $('#header'),

    events : {
        'keypress input[type=text]': 'searchOnEnter'
    },
    
    initialize: function () {
        console.log("init headerView");
        this.render();
    },

    render: function (eventName) {
        var temp = Mustache.render(this.template(), {});
        this.$el.html(temp);

        return this;
    },

    searchOnEnter: function(e){
        if (e.keyCode != 13) return;
        console.log(        $('#tags').val());
        app.navigate('team/' + $('#tags').val(), true);
        // Change Route to teams view

    }
});
