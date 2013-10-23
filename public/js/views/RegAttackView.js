 // This view turns a Service model into HTML. Will create LI elements.
window.RegAttackView = Backbone.View.extend({
    counter : 0,
    
    events : {
        "click #addNewPass" : "addNewPass",
        "click #destroy" : "destroyView"
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
                  required: true,
              },
              breakthroughPlayer: {
                  required: true,
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
              },
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
        console.log("addNewAttack");
        var divEl = 'newPass-' + this.counter.toString();
        console.log(divEl);
        $('#passes').append('<div id="'+ divEl + '"> </div>');
        var regPassView = new RegPassView({el : $('#' + divEl)});
        this.counter ++;
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
