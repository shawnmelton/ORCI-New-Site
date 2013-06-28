define([
	"jquery",
	"underscore",
	"backbone",
	'text!templates/default.html',
	'tools/urlTranslator',
	'tools/contentCache'
	], function($, _, Backbone, defaultHTML, UrlTranslator, ContentCache){
		var defaultView = Backbone.View.extend({
			el: "#content",

			/**
			 * Load this view's content
			 */
			loadContent: function(title, content) {
				this.$el
					.html(_.template(defaultHTML, {
						title: title,
						content: content
					}))
					.parent().removeClass("home");
			},

			/**
			 * Reach out to API to pull in page content.
			 * If content is cached, then just pull cached data.
			 */
			render: function(){
				var url = UrlTranslator.toWP(location.href);
				if(ContentCache.hasEntry(url)) {
					this.loadContent(ContentCache.get(url).title, ContentCache.get(url).content);
				} else {
					var _this = this;
					$.getJSON(url, { json: 1 }, function(response) {
						if(response && response.status && response.status === "ok") {
							var pageObj = response.post !== undefined ? response.post : response.page;
							_this.loadContent(pageObj.title, pageObj.content);
							ContentCache.add(url, pageObj.title, pageObj.content);
						}
					});
				}
			}
		});
		
		return new defaultView;
	}
);