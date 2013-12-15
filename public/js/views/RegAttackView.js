// This view turns a Service model into HTML. Will create LI elements.
window.RegAttackView = Backbone.View.extend({
    counter: 0,
    events : {
        "click #addNewPass" : "addNewPass",
        "click #destroy" : "destroyView",
        "click #submitAttack" : "submitAttack"
    },

    initialize: function (options) {
        console.log("init RegAttackView");
        console.log(options);
        this.matchId = options.matchId;
        this.matchModel = options.matchModel;
        this.render();
    },

    render: function () {
        var temp = Mustache.render(this.template(), {});
        this.$el.html(temp);

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
        return this;
    },

    addNewPass : function(e){
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
        var that = this;

        var response = this.fixResponse($('form').serializeArray());
        var attackModel = new AttackModel(response);

        attackModel.save(null, {
            success: function (model, response) {
                that.matchModel.fetch();
            },
            error: function (model, response) {
                alert("The attack could not be submitted");
            }
        });

        $('#wrapperContainer').removeData().unbind();
        $('#wrapperContainer').empty();
    },

    fixResponse : function(array){
        var passes = [];
        var response = {};

        for(var i=0; i < array.length; i++){
            var obj = array[i];

            if(obj.name == "positionStart"){
                response['attackStart'] = {
                    pos : array[i].value,
                    player : array[i+1].value,
                    typeAction : $('#positionStart-form').val()
                };
                i += 1;
            }
            else if(obj.name == "playerIDFinish"){
                response['finish'] = {
                    player : array[i].value,
                    pos : array[i+1].value,
                    action : $('#positionFinish-form').val()
                };
                i += 1;
            }
            else if(obj.name == "fromPlayer"){
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
            else {
                var name = obj.name;
                response[name] = obj.value;
            }
        }
        response['passes'] = passes;
        response['matchId'] = this.matchId;
        response['breakthrough'] = $('#breakthrough-form').val();
        response['typeOfAttack'] = $('#typeOfAttack-form').val();
        response['touch'] = 0;  // not used

        return response;
    }
});
