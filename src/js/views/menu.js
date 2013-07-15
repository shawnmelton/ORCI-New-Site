define([
	"jquery",
	"underscore",
	"backbone",
	"tools/urlTranslator"
	], function($, _, Backbone, UrlTranslator){
		var menuView = Backbone.View.extend({
			el: "body > div > nav",
			events: {
				"click li > a": "onLinkClick"
			},

			/**
			 * Get the api url to fetch menu items.
			 */
			getMenuUrl: function() {
				return UrlTranslator.toWP(UrlTranslator.getDomain() + UrlTranslator.getSubFolder() +"/api/get_primary_menu/");
			},

			/**
			 * Add class "inactive" to menu links that do not have urls.
			 */
			inactivateDeadLinks: function() {
				this.$el.find("a").each(function() {
					var href = $(this).attr("href");
					if(typeof href == "undefined" || href === false || href === "") {
						$(this).addClass("inactive");
					}
				});
			},

			/**
			 * Navigate to the provided link without reloading the browser.
			 */
			onLinkClick: function(event) {
				if(typeof $(event.currentTarget).attr("href") == "undefined") { // Link is being used to access child links and does not have a url.
					event.preventDefault();
					return;
				}

				if(!!(window.history && window.history.pushState) && UrlTranslator.urlIsSameDomain($(event.currentTarget).attr("href"))) {
					event.preventDefault();
					appRouter.navigate(UrlTranslator.getRelativeUrl($(event.currentTarget).attr("href")), {
						trigger: true,
						replace: true
					});
				}
			},

			render: function(){
				var _this = this;
				$.getJSON(this.getMenuUrl(), function(response) {
					if(response && response.status && response.status === "ok") {
						_this.$el.html(response.content);
						_this.$el.find("ul ul ul").each(function() {
							$(this).parent().addClass("tertiary");
						});

						_this.inactivateDeadLinks();
					}
				});
			}
		});
		
		return new menuView();
	}
);