$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
	options.url = 'http://localhost:3000/' + options.url;
});


window.AppRouter = Backbone.Router.extend({
	routes: {
		'' : 'home',
		'match/:id' : "matchDetails"
	},

	home : function(){
		this.matchList = new MatchListCollection();
		this.homeView = new HomeView({model: this.matchList});
        console.log(this.matchList.toJSON());
        //this.headerView = new HeaderView();
	},
	matchDetails : function(matchId){
		console.log("Changing View, match/%s", matchId)
		if(this.homeView != undefined)	this.homeView.remove();

		var matchModel = new MatchModel({id : matchId});
		this.matchView = new MatchView({model: matchModel});
	}
});


templateLoader.load(["HomeView", "HeaderView", "MatchView"],
    function () {
        app = new AppRouter();
        Backbone.history.start();
});