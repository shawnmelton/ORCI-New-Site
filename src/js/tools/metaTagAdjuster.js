define(['jquery'], function($) {
	var MetaTagAdjuster = function() {};
	MetaTagAdjuster.prototype = {
		/**
		 * Remove existing tag if it exists.  Then add in the new meta tag.
		 */
		update: function(tagName, tagValue) {
			if($("meta[name="+ tagName +"]").length) {
				$("meta[name="+ tagName +"]").remove();
			}

			$("head").append('<meta name="'+ tagName +'" content="'+ tagValue +'">')
		}
	};

	return new MetaTagAdjuster();
});