define([
	'jquery',
	'underscore',
	'backbone',
	'views/home',
	'views/default',
	'views/categoryPosts',
	'views/menu',
	'tools/urlTranslator'
	], function($, _, Backbone, homeView, defaultView, categoryView, mainMenu, UrlTranslator){
		var AppRouter = Backbone.Router.extend({
			initialize: function() {
				this.route(/^(demo\/){0,1}.*/, 'showDefault');
				// this.route(/^(demo\/){0,1}news(\/|)$/, 'showNews');
				this.route(/^(demo\/){0,1}news\/archives(\/|)$/, 'showArchives');
				this.route(/^(demo\/){0,1}news\/security-division(\/|)$/, 'showSecurity');
				this.route(/^(demo\/){0,1}news\/transportation-division(\/|)$/, 'showTransportation');
				this.route(/^(demo\/){0,1}$/, 'showHome');
			},

			showArchives: function() {
				this.showCategory("archives");
			},

			showCategory: function(category) {
				window.scrollTo(0, 0);
				categoryView.render(category);
			},

			showDefault: function() {
				window.scrollTo(0, 0);
				defaultView.render();
			},

			showHome: function(){
				window.scrollTo(0, 0);
				homeView.render();
			},

			showSecurity: function() {
				this.showCategory("security");
			},

			showTransportation: function() {
				this.showCategory("transportation");
			}
		});
		
		var initialize = function(){
			appRouter = new AppRouter();

			var usePushState = !!(window.history && window.history.pushState);
			Backbone.history.start({
				pushState: usePushState,
				hashChange: usePushState
			});

			mainMenu.render();
		};
		
		return {
			initialize: initialize
		};
	}
);