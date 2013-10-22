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

        $('#keiko').validate({
              rules: {
                  hometeamGoals: {
                      maxlength: 2,
                      required: true
                  },
                  awayteamGoals: {
                      maxlength: 2,
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
        var divEl = 'newAttack-' + this.counter.toString();
        console.log(divEl);
        this.$el.append('<div class="container" id="'+ divEl + '"> </div>');
        var regAttackView = new RegAttackView({el : $('#' + divEl)});
        this.counter ++;
    },

    addNewPass : function(e){
        console.log("addnewpass");
    }
});
