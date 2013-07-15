define([
	'jquery',
	'underscore',
	'backbone',
	'views/home',
	'views/default',
	'views/categoryPosts',
	'views/archivedPosts',
	'views/menu',
	'tools/urlTranslator'
	], function($, _, Backbone, homeView, defaultView, categoryView, archivedView, mainMenu, UrlTranslator){
		var AppRouter = Backbone.Router.extend({
			initialize: function() {
				this.route(/^(demo\/){0,1}.*/, 'showDefault');
				// this.route(/^(demo\/){0,1}news(\/|)$/, 'showNews');
				this.route(/^(demo\/){0,1}news\/archives(\/|)$/, 'showArchives');
				this.route(/^(demo\/){0,1}news\/security-division(\/|)$/, 'showSecurity');
				this.route(/^(demo\/){0,1}news\/transportation-division(\/|)$/, 'showTransportation');
				this.route(/^(demo\/){0,1}$/, 'showHome');
			},

			loadNewPage: function() {
				window.scrollTo(0, 0);
				$("#content").html('<img src="/img/content-loading.gif" alt="Loading ..." id="loading">');
			},

			showArchives: function() {
				this.loadNewPage();
				archivedView.render();
			},

			showCategory: function(category) {
				this.loadNewPage();
				categoryView.render(category);
			},

			showDefault: function() {
				this.loadNewPage();
				defaultView.render();
			},

			showHome: function(){
				this.loadNewPage();
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