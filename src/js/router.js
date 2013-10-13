define([
	'jquery',
	'underscore',
	'backbone',
	'views/home',
	'views/default',
	'views/categoryPosts',
	'views/archivedPosts',
	'views/menu',
	'views/certInquiryFormView',
	'views/workOrderRequestForm',
	'tools/urlTranslator'
	], function($, _, Backbone, homeView, defaultView, categoryView, archivedView, mainMenu, certInquiryFormView, workOrderRequestFormView, UrlTranslator){
		var AppRouter = Backbone.Router.extend({
			initialize: function() {
				this.route(/^.*/, 'showDefault');
				this.route(/^news\/archives(\/|)$/, 'showArchives');
				this.route(/^news\/security-division(\/|)$/, 'showSecurity');
				this.route(/^news\/transportation-division(\/|)$/, 'showTransportation');
				this.route(/^contact-us\/vicads-certification-classes-inquiry-form(\/|)$/, 'showCertInquiryForm');
				this.route(/^contact-us\/work-order-request-form(\/|)$/, 'showWorkOrderForm');
				this.route(/^$/, 'showHome');
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

			showCertInquiryForm: function() {
				this.loadNewPage();
				certInquiryFormView.render();
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
			},

			showWorkOrderForm: function() {
				this.loadNewPage();
				workOrderRequestFormView.render();
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