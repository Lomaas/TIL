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
        console.log("postNewMatchData");
        var response = {};
        response['attacks'] = [];
        console.log($('form').serializeArray());

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
        console.log(response);
        new MatchModel(response).save();

        app.navigate("", true);
    },

    addNewPass : function(e){
        console.log("addnewpass");
    }
});
