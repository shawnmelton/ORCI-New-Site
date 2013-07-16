define([
	"jquery",
	"backbone",
	'templates/html.jst',
	'tools/urlTranslator',
	'tools/contentCache',
	'tools/contentAdjuster',
	'tools/metaTagAdjuster'
	], function($, Backbone, htmlJST, UrlTranslator, ContentCache, ContentAdjuster, MetaTagAdjuster){
		var defaultView = Backbone.View.extend({
			el: "#content",

			/**
			 * Load this view's content
			 * Register the page view with Google Analytics as well: ga('send', ...);
			 */
			loadContent: function(title, content) {
				this.$el
					.html(JST['src/js/templates/default.html']({
						title: title,
						content: content +'<div class="clear"></div>'
					}))
					.parent().removeClass("home");

				$("#content a").unbind("click");
				var _this = this;
				$("#content a").click(function(e) {
					_this.onLinkClick(e, $(this));
				});

				ga('send', 'pageview', {
					'page': location.pathname,
					'title': title
				});
			},

			loadMetaInfo: function(keywords, description) {
				if(typeof keywords == "string" && keywords.length > 0) {
					MetaTagAdjuster.update("keywords", keywords);
				}

				if(typeof description == "string" && description.length > 0) {	
					MetaTagAdjuster.update("description", description);
				}	
			},

			/**
			 * Navigate to the provided link without reloading the browser.
			 */
			onLinkClick: function(event, target) {
				if(!!(window.history && window.history.pushState) && UrlTranslator.urlIsSameDomain(target.attr("href"))) {
					event.preventDefault();
					appRouter.navigate(UrlTranslator.getRelativeUrl(target.attr("href")), {
						trigger: true,
						replace: true
					});
				}
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
							var content = ContentAdjuster.correct(pageObj.content);
							_this.loadContent(pageObj.title, content);
							ContentCache.add(url, pageObj.title, content);
							_this.loadMetaInfo(pageObj.meta_keywords, pageObj.meta_description);
						} else if(response && response.status && response.status === "error") {
							_this.loadContent("Page Not Found", "<p>Oops!  It appears that you are attempting to view a page that does not exist.  Please double check the url you entered is correct.</p>");
						}
					});
				}
			}
		});
		
		return new defaultView();
	}
);