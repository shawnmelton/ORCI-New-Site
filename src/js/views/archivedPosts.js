define([
	"jquery",
	"backbone",
	'templates/html.jst',
	'tools/urlTranslator',
	'tools/contentCache',
	'tools/contentAdjuster'
	], function($, Backbone, htmlJST, UrlTranslator, ContentCache, ContentAdjuster){
		var archivedView = Backbone.View.extend({
			el: "#content",

			/**
			 * Place posts in cateories based on the year the article was posted.
			 */
			getPostsByYear: function(posts) {
				var postsByYear = [];
				for(var index in posts) {
					var yearIdx = false;
					for(var idx in postsByYear) {
						if(postsByYear[idx].year == posts[index].date) {
							yearIdx = idx;
						}
					}

					if(yearIdx === false) {
						postsByYear.push({
							year: posts[index].date,
							posts: [posts[index]]
						});
					} else {
						postsByYear[yearIdx].posts.push(posts[index]);
					}
				}

				return postsByYear;
			},

			/**
			 * Get the home url: http://domain.com/wp-folder/home
			 * @return String
			 */
			getUrl: function() {
				return UrlTranslator.toWP(UrlTranslator.getDomain() + UrlTranslator.getSubFolder() +"/category/archives/");
			},

			/**
			 * Load this view's content
			 */
			loadContent: function(title, posts) {
				this.$el
					.html(JST['src/js/templates/archivedPosts.html']({
						title: title,
						years: this.getPostsByYear(posts),
						noneMsg: (posts.length === 0) ? "<p><i>There are not currently any archived articles posted.</i></p>" : ""
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
			render: function(){
				var _this = this;
				$.getJSON(this.getUrl(), {
					json: 1,
					date_format: 'Y'
				}, function(response) {
					if(response && response.status && response.status === "ok") {
						_this.loadContent(response.category.title, response.posts);
					}
				});
			}
		});
		
		return new archivedView();
	}
);