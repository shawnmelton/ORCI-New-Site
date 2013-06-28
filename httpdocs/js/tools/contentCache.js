define([], function() {
	var ContentCache = function() {};
	ContentCache.prototype = {
		history: [],

		/**
		 * Add an entry to the content cache.
		 */
		add: function(url, title, content) {
			this.history.push({
				content: content,
				title: title,
				url: url
			});
		},

		/**
		 * Get the cache entry (if valid)
		 * Make sure that you call hasEntry method before calling this.
		 * @return object (false if not found)
		 */
		get: function(url) {
			return this.history[this.hasEntry(url)];
		},

		/**
		 * Does a cache entry exist?
		 * @return object (false if not found)
		 */
		hasEntry: function(url) {
			for(var index in this.history) {
				if(url === this.history[index].url) {
					return index;
				}
			}

			return false;
		}
	};

	return new ContentCache();
});