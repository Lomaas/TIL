// This view turns a Service model into HTML. Will create LI elements.
window.RegMatchView = Backbone.View.extend({
    el : $('#newmatch'),
    counter : 0,

    events : {
        "click #addNewAttack" : "addNewAttack",
        "click #postNewMatchData" : "postNewMatchData"
    },

    initialize: function () {
        console.log("init RegMatchView");
        this.render();
        this.counter = 0;

        $('#match-form').validate({
            rules: {
                hometeamGoals: {
                    maxlength: 2,
                    required: true
                },
                awayteamGoals: {
                    maxlength: 2,
                    required: true
                },
                date : {
                    required: true
                }
            },
            highlight: function(element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function(element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            errorElement: 'span',
            errorClass: 'help-block',
            errorPlacement: function(error, element) {
                if(element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            }
        });
    },

    render: function () {
        console.log("in Render");
        var temp = Mustache.render(this.template(), {});
        this.$el.html(temp);
        return this;
    },

    postNewMatchData : function(e){
        e.preventDefault();
        var response = {};
        response['attacks'] = [];

        _.each($('form').serializeArray(), function(obj){
            var name = obj.name;
            response[name] = obj.value;
        });

        // Fix the response
        var tmp = $('#match').val().split("&");
        var hometeam = tmp[0].split("=")[1];
        var awayteam = tmp[1].split("=")[1];

        response['hometeam'] = hometeam;
        response['awayteam'] = awayteam;
        response['score'] = response.hometeamGoals + "-" + response.awayteamGoals;
        delete response['hometeamGoals'];
        delete response['awayteamGoals'];
        new MatchModel(response).save();    // AJAX request, post match data

        app.navigate("", true);
    },

    addNewPass : function(e){
        console.log("addnewpass");
    }
});
