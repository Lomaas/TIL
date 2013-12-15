window.RegPassView = Backbone.View.extend({
    counter : 0,

    events :{
        "click #destroy" : "destroyView"
    },

    initialize: function () {
        this.render();

        $('#pass-form').validate({
            rules: {
                fromPos: {
                    required: true,
                    range: [1, 33]
                },
                fromPlayer: {
                    required: true,
                    range:[0, 500]
                },
                toPos: {
                    required: true,
                    range: [1, 33]
                },
                toPlayer: {
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

    render: function () {
        var temp = Mustache.render(this.template(), {});
        this.$el.html(temp);
        return this;
    },
    destroyView : function(){
        this.undelegateEvents();
        this.$el.removeData().unbind();

        //Remove view from DOM
        this.remove();
        Backbone.View.prototype.remove.call(this);

    }
});
