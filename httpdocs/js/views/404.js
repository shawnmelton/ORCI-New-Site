define([
	"jquery",
	"underscore",
	"backbone",
	'text!templates/404.html'
	], function($, _, Backbone, pageNotFoundHTML){
		var pageNotFoundView = Backbone.View.extend({
			el: "#content",
			render: function(){
				this.$el
					.html(_.template(pageNotFoundHTML, {}))
					.attr("class", "pageNotFound");
			}
		});
		
		return new pageNotFoundView;
	}
);