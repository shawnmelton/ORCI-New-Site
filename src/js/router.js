define([
	'jquery',
	'underscore',
	'backbone',
	'views/home',
	'views/default',
	'views/categoryPosts',
	'views/menu'
	], function($, _, Backbone, homeView, defaultView, categoryView, mainMenu){
		var AppRouter = Backbone.Router.extend({
			initialize: function() {
				this.route(/^.*/, 'showDefault');
				this.route(/^news(\/|)$/, 'showNews');
				this.route(/^news\/archives(\/|)$/, 'showArchives');
				this.route(/^news\/security-division(\/|)$/, 'showSecurity');
				this.route(/^news\/transportation-division(\/|)$/, 'showTransportation');
				this.route(/^$/, 'showHome');
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

			showNews: function() {
				this.showCategory("news");
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

			Backbone.history.start({
				pushState: !!(window.history && window.history.pushState)
			});

			mainMenu.render();
		};
		
		return {
			initialize: initialize
		};
	}
);