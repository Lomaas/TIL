$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
	options.url = 'http://129.242.22.160:3000/' + options.url;
});


window.AppRouter = Backbone.Router.extend({
	currentViews : [],
	headerView : null,

	routes: {
		'' : 'home',
		'match/new' : 'newMatch',
		'match/:id' : 'matchDetails',
		'team/:id' : 'team',
		'teams' : 'teams',
		'player/:id' : 'player' 
	},

	home : function(){
		this.matchList = new MatchListCollection();
		this.homeView = new HomeView({model: this.matchList});
		console.log(this.matchList.toJSON());
		this.setNewView([this.homeView]);
	},

	newMatch : function(){
		this.regMatchView = new RegMatchView();
		this.setNewView([this.regMatchView]);
	},
	
	matchDetails : function(matchId){
		console.log("Changing View, match: %s", matchId);

		var matchModel = new MatchModel({id : matchId});
		this.matchView = new MatchView({model: matchModel});
		this.setNewView([this.matchView]);
	},

	team : function(teamName){
		this.playersList = new PlayerListCollection();
		this.playersList.url = "players/" + teamName;
		this.playersView = new PlayersView({model : this.playersList});

		this.teamModel = new TeamModel({id : teamName});
		this.teamView = new TeamView({model : this.teamModel, playersModel : this.playersList});

		this.setNewView([this.teamView, this.playersView]);
	},

	teams : function(){
		this.teamsCollection = new TeamListCollection();
		this.teamsView = new TeamsView({model : this.teamsCollection});
		this.setNewView([this.teamsView]);
	},
	
	player : function(playerId){
		this.playerView = new PlayerView({
			model : new PlayerModel({id : playerId})
		});
		this.setNewView([this.playerView]);
	},

	setNewView: function (views) {
	    //Close the current view
	    if (this.currentViews.length > 0) {
    	    _.each(this.currentViews, function(views){

	        	$(views.el).empty();
				views.unbind();
			});
	    }

	    if(!this.headerView){
      		this.headerView = new HeaderView();
	    }

	    this.currentViews = views;
	    return this;
	}

});

templateLoader.load(["HomeView", "HeaderView", "MatchView", "TeamView", "TeamsView", "PlayersView", "PlayerView", "RegMatchView", "RegAttackView", "RegPassView"],
    function () {
        app = new AppRouter();
        Backbone.history.start();
});