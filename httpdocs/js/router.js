define([
	'jquery',
	'underscore',
	'backbone',
	'views/home',
	'views/default',
	'views/menu',
	'views/banners',
	'views/newsAndEvents'
	], function($, _, Backbone, homeView, defaultView, mainMenu, banners, newsAndEvents){
		var AppRouter = Backbone.Router.extend({
			initialize: function() {
				this.route(/^.*/, 'showDefault');
				this.route(/^$/, 'showHome');
			},

			showDefault: function() {
				window.scrollTo(0, 0);
				defaultView.render();
			},
			
			showHome: function(){
				window.scrollTo(0, 0);
				homeView.render();
			}
		});
		
		var initialize = function(){
			appRouter = new AppRouter();

			Backbone.history.start({
				pushState: !!(window.history && window.history.pushState)
			});

			mainMenu.render();
			newsAndEvents.render();
			banners.render();			
		};
		
		return {
			initialize: initialize
		};
	}
);