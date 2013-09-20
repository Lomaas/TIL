$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
	options.url = 'http://localhost:3000/' + options.url;
});


window.AppRouter = Backbone.Router.extend({
	currentView : null,
	headerView : null,

	routes: {
		'' : 'home',
		'match/:id' : "matchDetails",
		'team/:id' : "team",
		'teams' : "showAllTeams"
	},

	home : function(){
		this.matchList = new MatchListCollection();
		this.homeView = new HomeView({model: this.matchList});
		console.log(this.matchList.toJSON());
		this.setNewView(this.homeView);
	},
	
	matchDetails : function(matchId){
		console.log("Changing View, match: %s", matchId)

		var matchModel = new MatchModel({id : matchId});
		this.matchView = new MatchView({model: matchModel});
		this.setNewView(this.matchView);
	},

	team : function(teamName){
		this.teamModel = new TeamModel({id : teamName});
		this.teamView = new TeamView({model : this.teamModel});

		this.playersList = new PlayerListCollection();
		this.playersList.url = "teams/" + teamName + "/players"
		this.playersView = new PlayersView({model : this.playersList});

		this.setNewView(this.teamView);
	},

	showAllTeams : function(){
		this.teamsCollection = new TeamListCollection();
		this.teamsView = new TeamsView({model : this.teamsCollection});
		this.setNewView(this.teamsView);
	},
	
	setNewView: function (view) {
	    //Close the current view
	    if (this.currentView) {
	        $(this.currentView.el).empty();
			this.currentView.unbind();
	    }

	    if(!this.headerView){
      		this.headerView = new HeaderView();
	    }

	    this.currentView = view;
	    return this;
	}

});


templateLoader.load(["HomeView", "HeaderView", "MatchView", "TeamView", "TeamsView", "PlayersView"],
    function () {
        app = new AppRouter();
        Backbone.history.start();
});