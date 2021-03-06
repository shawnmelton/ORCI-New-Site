define([
	"jquery",
	"backbone",
	'templates/html.jst',
	'tools/urlTranslator',
	'tools/contentCache',
	'tools/contentAdjuster'
	], function($, Backbone, htmlJST, UrlTranslator, ContentCache, ContentAdjuster){
		var categoryView = Backbone.View.extend({
			el: "#content",
			category: false,

			/**
			 * Get the home url: http://domain.com/wp-folder/home
			 * @return String
			 */
			getUrl: function() {
				return UrlTranslator.toWP(UrlTranslator.getDomain() +"/category/"+ this.category +"/");
			},

			/**
			 * Load this view's content
			 */
			loadContent: function(title, posts) {
				this.$el
					.html(JST['src/js/templates/categoryPosts.html']({
						title: title,
						articles: posts,
						noneMsg: (posts.length === 0) ? "<p><i>There are not currently any articles posted for "+ title +".</i></p>" : ""
					}))
					.parent().removeClass("home");

				ga('send', 'pageview', {
					'page': location.pathname,
					'title': title
				});
			},

			/**
			 * Reach out to API to pull in page content.
			 * If content is cached, then just pull cached data.
			 */
			render: function(category){
				this.category = category.toLowerCase();
				var _this = this;
				$.getJSON(this.getUrl(), { json: 1 }, function(response) {
					if(response && response.status && response.status === "ok") {
						_this.loadContent(response.category.title, response.posts);
					}
				});
			}
		});
		
		return new categoryView();
	}
);