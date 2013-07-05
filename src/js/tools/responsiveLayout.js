define(['jquery', 'views/banners', 'tools/mobileMenu', 'views/newsAndEvents', 'tools/urlTranslator'], function($, banners, MobileMenu, newsAndEvents, UrlTranslator) {
	var ResponsiveLayout = function() {};
	ResponsiveLayout.prototype = {
		width: 0,
		origWidth: 0,
		fullSizeLoaded: false,
		mobileSizeLoaded: false,
		nonMobileSizeLoaded: false,

		/**
		 * Determine the new size of the layout.
		 */
		determine: function() {
			this.width = $(window).width();
		},

		/**
		 * Initialize this object.  Catch window resize event to make layout changes.
		 */
		init: function() {
			var _this = this;
			$(window).resize(function() {
				_this.refresh();
			});

			this.refresh();
		},

		/**
		 * If this document has been changed to full size, perform the following changes.
		 * Full size width >= 1066 pixels
		 */
		performFullSizeChanges: function() {
			if(this.fullSizeLoaded === false && this.width >= 1066 && (this.origWidth == 0 || this.origWidth < 1066)) {
				this.fullSizeLoaded = true;
				$("body").prepend('<img src="'+ UrlTranslator.getSubFolder() +'/img/bg.png" alt="Background image">');
				banners.render();
			}
		},

		/**
		 * If this document is presented to a mobile device, perform the following changes.
		 * Due to the provided designs, we are switching early to a mobile layout.  <= 889 pixels
		 */
		performMobileChanges: function() {
			if(this.mobileSizeLoaded === false && this.width < 890 && (this.origWidth == 0 || this.origWidth >= 890)) {
				this.mobileSizeLoaded = true;
				MobileMenu.init();
			}
		},

		/**
		 * If this document is presented to a non-mobile device, perform the following changes.
		 * Due to the provided designs, we are switching early to a mobile layout.  <= 889 pixels
		 */
		performNonMobileChanges: function() {
			if(this.nonMobileSizeLoaded === false && this.width >= 890 && (this.origWidth == 0 || this.origWidth < 890)) {
				this.nonMobileSizeLoaded = true;
				newsAndEvents.render();
			}
		},

		/**
		 * Determine the layout changes and perform necessary layout adjustments.
		 */
		refresh: function() {
			this.determine();

			this.performFullSizeChanges();
			this.performMobileChanges();
			this.performNonMobileChanges();

			this.origWidth = this.width;
		}
	};

	return new ResponsiveLayout();
});