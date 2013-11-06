 // This view turns a Service model into HTML. Will create LI elements.
window.MatchView = Backbone.View.extend({
    el : $('#singlematch'),

    events : {
        "click #addNewAttack" : "addNewAttack",
        "click #addNewPass" : "addNewPass"
    },

    initialize: function () {
        console.log("init MatchView");
        this.model.bind("reset", this.render, this);
        var that = this;

        that.model.fetch({
            success: function () {
                that.render();
            }
        });

        this.model.on('change', function(){
            console.log('foo');
            that.render();
        });
    },

    render: function () {
        console.log("in Render: %j", this.model.toJSON());
        console.log(this.model.getAttacksJSON());

        var attacks = this.model.getAttacksJSON();
        var temp = Mustache.render(
            this.template(), 
            {   
                "match" : this.model.get("hometeam") + " - " + this.model.get("awayteam"), 
                "matchObj" : this.model.toJSON(),
                "attacks" : attacks,
                "length" : attacks.length
            }
        );
        this.$el.html(temp);
        return this;
    },

    addNewAttack : function(e){
         console.log("addNewAttack");
         var regAttackView = new RegAttackView({
             el : $('#attack-form'),
             matchId : this.model.get('id'),
             matchModel : this.model
         });
    }
});
