define([
	"jquery",
	"underscore",
	"backbone",
	'text!templates/newsAndEvents.html',
	'tools/urlTranslator',
	], function($, _, Backbone, newsHTML, UrlTranslator){
		var newsView = Backbone.View.extend({
			el: "#news-and-events",
			events: {
				"click article a": "onLinkClick"
			},

			/**
			 * Format the article data so that it is displayed properly in the view.
			 * @param Array of article objects.
			 */
			formatResults: function(data) {
				var articles = [];
				for(var index in data) {
					articles.push({
						date: data[index].date,
						title: data[index].title,
						url: UrlTranslator.fromWP(data[index].url)
					});
				}

				return articles;
			},

			/**
			 * Get the api url to fetch news articles.
			 */
			getArticlesUrl: function() {
				return UrlTranslator.toWP(UrlTranslator.getDomain() + UrlTranslator.getSubFolder() +"/api/get_recent_posts/");
			},

			/**
			 * Navigate to the provided link without reloading the browser.
			 */
			onLinkClick: function(event) {
				if(!!(window.history && window.history.pushState)) {
					event.preventDefault();
					appRouter.navigate(UrlTranslator.getRelativeUrl($(event.currentTarget).attr("href")), {
						trigger: true,
						replace: true
					});
				}
			},

			/**
			 * Display the 3 upcoming news and event articles.  Order them in ascending order (chronlogical)
			 */
			render: function(){
				var _this = this;
				var noResultsFound = "<p><i>There are currently no news and events at this time.</i></p>";
				$.getJSON(this.getArticlesUrl(), {
					date_format: "M j, Y",
					order: "DESC",
					order_by: "date",
					count: 4
				}, function(response) {
					if(response && response.status && response.status === "ok") {
						var articles = [];
						if(response.count > 0) { // We were able to find results.
							noResultsFound = "";
							articles = _this.formatResults(response.posts);
						}

						_this.$el.css("background-image", "none"); // Remove loading image.

						_this.$el
							.html(_.template(newsHTML, {
								articles: articles,
								noResultsFound: noResultsFound
							}));
					}
				});
			}
		});
		
		return new newsView();
	}
);