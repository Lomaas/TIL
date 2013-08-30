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
		this.matchView = new MatchView({model: this.matchList});
		this.matchList.reset();

		console.log(this.matchList.toJSON());

		this.matchView.render();
	}
});

tpl.loadTemplates(['match-list-item'], function() {
    app = new AppRouter();
    Backbone.history.start();
});