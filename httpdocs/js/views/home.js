define([
	"jquery",
	"underscore",
	"backbone",
	"views/featuredProducts",
	'text!templates/home.html',
	'tools/urlTranslator',
	'tools/contentCache'
	], function($, _, Backbone, featuredProductsView, homeHTML, UrlTranslator, ContentCache){
		var homeView = Backbone.View.extend({
			el: "#content",

			events: {},

			/**
			 * Add the featured products to this view.
			 */
			addFeaturedProducts: function() {
				featuredProductsView.render();
			},

			/**
			 * Get the home url: http://domain.com/wp-folder/home
			 * @return String
			 */
			getUrl: function() {
				return UrlTranslator.toWP(UrlTranslator.getDomain() +"/home");
			},

			/**
			 * Load this view's content
			 */
			loadContent: function(title, content) {
				this.$el
					.html(_.template(homeHTML, {
						title: title,
						content: content
					}))
					.parent().addClass("home");

				if(!$("#featured-products").length) {
					this.addFeaturedProducts();
				}
			},

			/**
			 * Reach out to API to pull in page content.
			 * If content is cached, then just pull cached data.
			 */
			render: function(){
				var url = this.getUrl();
				if(ContentCache.hasEntry(url)) {
					this.loadContent(ContentCache.get(url).title, ContentCache.get(url).content);
				} else {
					var _this = this;
					$.getJSON(url, { json: 1 }, function(response) {
						if(response && response.status && response.status === "ok") {
							_this.loadContent(response.page.title, response.page.content);
							ContentCache.add(url, response.page.title, response.page.content);
						}
					});
				}
			}
		});
		
		return new homeView;
	}
);