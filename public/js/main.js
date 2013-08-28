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
		this.matchList.fetch();
		$('#page').html(this.matchView.render().el);
	}
});

tpl.loadTemplates(['match-list-item'], function() {
    app = new AppRouter();
    Backbone.history.start();
});