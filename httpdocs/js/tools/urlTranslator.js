define([], function() {
	/**
	 * UrlTranslator class will help modify urls passed between Wordpress and 
	 * this site.  Wordpress urls will come in the format of http://domain.com/content/...
	 * We will need to convert them to http://domain.com/... for use in the site.
	 */
	var UrlTranslator = function() {};
	UrlTranslator.prototype = {
		domain: false,

		/**
		 * Detemine the domain of the current site.
		 */
		determineDomain: function() {
			var urlParts = location.href.split(".com");
			if(urlParts[0]) {
				return urlParts[0] +".com";
			}

			return ""; // Error detecting domain
		},

		/**
		 * Translate a url that was provided from Wordpress.
		 */
		fromWP: function(url) {
			return url.replace("/content", "");
		},

		/**
		 * Get the site domain.
		 */
		getDomain: function() {
			if(this.domain === false) {
				this.domain = this.determineDomain();
			}

			return this.domain;
		},

		/**
		 * Get the relative url for a provided link within the current domain.
		 */
		getRelativeUrl: function(url) {
			return url.replace(this.getDomain(), "");
		},

		/**
		 * Translate a site url to a url that Wordpress will recognize.
		 */
		toWP: function(url) {
			return url.replace(this.getDomain(), this.getDomain() +"/content");
		}
	};

	return new UrlTranslator();
});