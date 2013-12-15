window.HeaderView = Backbone.View.extend({
    el : $('#header'),

    events : {
        'keypress input[type=text]': 'searchOnEnter',
        "click #list_teams" : "onClickListTeam",
        "click #list_home" : "onClickListHome",
        "click #list_players" : "onClickListPlayers",
    },
    
    initialize: function () {
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
    },

    onClickListTeam: function(event){
        $("#list_teams").attr("class", "active");
        $("#list_home").attr("class", "");
        $("#list_players").attr("class", "");

    },
     onClickListHome: function(event){
        $("#list_teams").attr("class", "");
        $("#list_home").attr("class", "active");
        $("#list_players").attr("class", "");
    },
     onClickListPlayers: function(event){

    }

});
