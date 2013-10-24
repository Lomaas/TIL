// This view turns a Service model into HTML. Will create LI elements.
window.RegAttackView = Backbone.View.extend({
    counter: 0,
    events : {
        "click #addNewPass" : "addNewPass",
        "click #destroy" : "destroyView",
        "click #submitAttack" : "submitAttack"
    },

    initialize: function () {
        console.log("init RegAttackView");
        this.render();

        $('#attack-form').validate({
            rules: {
                time: {
                    range: [0, 100],
                    required: true,
                    number: true
                },
                team: {
                    required: true
                },
                breakthroughPlayer: {
                    required: true
                },
                positionStart: {
                    required: true,
                    range: [1, 33]
                },
                playerIDStart: {
                    required: true,
                    range:[0, 500]
                },
                positionFinish: {
                    required: true,
                    range: [1, 33]
                },
                playerIDFinish: {
                    required: true,
                    range:[0, 500]
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

    render: function (eventName) {
        console.log("in Render RegAttackView");
        var temp = Mustache.render(this.template(), {});
        this.$el.html(temp);
        return this;
    },

    addNewPass : function(e){
        console.log("addnewpass");
        var divEl = 'newPass-' + this.counter.toString();
        $('#passes').append('<div id="'+ divEl + '"> </div>');
        var regPassView = new RegPassView({el : $('#' + divEl)});
        this.counter ++;
    },

    destroyView : function(e){
        this.undelegateEvents();
        this.$el.removeData().unbind();
        this.$el.empty();
    },

    submitAttack : function(e){
        e.preventDefault();
        console.log("submitAttack");
        var response = {};
        console.log($('form').serializeArray());

        var array = $('form').serializeArray();
        var passes = [];

        for(var i=0; i < array.length; i++){
            var obj = array[i];
            console.log(obj.name);
            if(obj.name == "fromPlayer"){
                var pass = {
                    fromPlayer : array[i].value,
                    fromPos : array[i+1].value,
                    toPlayer : array[i+2].value,
                    toPos : array[i+3].value,
                    action : array[i+4].value
                };
                new PassModel(pass).save();

                i += 4;
                passes.push(pass);
            }
            else{
                var name = obj.name;
                response[name] = obj.value;
            }
        }
        console.log(passes);
        response['passes'] = passes;
        new AttackModel(response).save();
    }
});
