define(['jquery', 'tools/urlTranslator'], function($, UrlTranslator) {
	var MobileMenu = function() {};
	MobileMenu.prototype = {
		button: false,
		menu: false,
		showing: false,

		/**
		 * Hijack links so that they will internally load content instead of reloading browser.
		 */
		addLinkEvents: function() {
			var _this = this;
			this.menu.find("a").bind("click", function(e){
				_this.onLinkClick(e, $(this));
			});
		},

		/**
		 * Build menu by scraping content from footer menu.
		 */
		build: function() {
			$("body").append('<nav id="mobile-menu"></nav>');
			this.menu = $("#mobile-menu");
			this.menu.html($("body > div > nav").html());

			if(typeof appRouter != "undefined") {
				this.addLinkEvents();
			}
		},

		/**
		 * Start with just displaying the button.  Hold off on building the menu until the button is clicked.
		 */
		init: function() {
			$("body").append('<a id="mobile-menu-button"></a>');
			this.button = $("#mobile-menu-button");

			var _this = this;
			this.button.bind("click", function() {
				_this.toggle();
			});
		},

		/**
		 * Navigate to the provided link without reloading the browser.
		 */
		onLinkClick: function(event, target) {
			if(UrlTranslator.urlIsSameDomain(target.attr("href"))) {
				event.preventDefault();
				appRouter.navigate(UrlTranslator.getRelativeUrl(target.attr("href")), {
					trigger: true,
					replace: true
				});

				this.toggle();
			}
		},

		/**
		 * Toggle whether to show/hide this menu.
		 */
		toggle: function() {
			if(this.menu === false) {
				this.build();
			}

			if(!this.showing) {
				this.menu.fadeIn();
				this.button.addClass("showing");
			} else {
				this.menu.fadeOut();
				this.button.removeClass("showing");
			}

			this.showing = !this.showing;
		}
	};

	return new MobileMenu();
});