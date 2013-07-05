define([], function() {
	var ContentAdjuster = function() {};
	ContentAdjuster.prototype = {
		/**
		 * Correct HTML that is passed in so that it swaps out links to 
		 * Wordpress but maintains image upload src integrity.
		 */
		correct: function(content) {
			return content
				.replace(/\/content\/wp-content/g, "/content_upload_placeholder")
				.replace(/\/content\//g, "/")
				.replace(/\/content_upload_placeholder/g, "/content/wp-content");
		}		
	};

	return new ContentAdjuster();
});