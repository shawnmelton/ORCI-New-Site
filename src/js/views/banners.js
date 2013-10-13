define([
	"jquery",
	"backbone",
	"libs/jquery.cycle",
	'templates/html.jst',
	'tools/urlTranslator'
	], function($, Backbone, cycle, htmlJST, UrlTranslator){
		var banners = Backbone.View.extend({
			el: "#banner",

			events: {
				"click #next": "onNextButtonClick",
				"click #pause": "onPauseButtonClick",
				"click #play": "onPlayButtonClick",
				"click #previous": "onPreviousButtonClick"
			},

			/**
			 * Get the home url: http://domain.com/wp-folder/home
			 * @return String
			 */
			getUrl: function() {
				return UrlTranslator.toWP(UrlTranslator.getDomain() +"/api/get_banner_images/");
			},

			/**
			 * Callback method for when next slide button is clicked.
			 */
			onNextButtonClick: function() {
				$("#slideshow").cycle("next");
			},

			/**
			 * Callback method for when pause slideshow button is clicked.
			 */
			onPauseButtonClick: function() {
				$("#pause").css("visibility", "hidden");
				$("#play").css("visibility", "visible");
				$("#slideshow").cycle("pause");
			},

			/**
			 * Callback method for when previous slide button is clicked.
			 */
			onPreviousButtonClick: function() {
				$("#slideshow").cycle("prev");
			},

			/**
			 * Callback method for when pause slideshow button is clicked.
			 */
			onPlayButtonClick: function() {
				$("#play").css("visibility", "hidden");
				$("#pause").css("visibility", "visible");
				$("#slideshow").cycle("resume");
			},

			/**
			 * Render this view;
			 * Add content and present the proper button.
			 */
			render: function() {
				/**
				 * Value is set in app.js.  Dev Mode turns off all API requests.
				 */
				if(devMode) {
					return;
				}

				var _this = this;
				$.getJSON(this.getUrl(), function(response) {
					if(response && response.status && response.status === "ok") {
						_this.$el
							.html(JST['src/js/templates/banners.html']({
								banners: response.images
							}));

						_this.startSlideshow();
					}
				});
			},

			startSlideshow: function() {
				$("#slideshow").cycle({
					fx: "scrollHorz",
					speed: 1000,
					timeout: 5000
				});				
			}
		});
		
		return new banners();
	}
);