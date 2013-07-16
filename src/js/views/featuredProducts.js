define([
	"jquery",
	"backbone",
	'templates/html.jst'
	], function($, Backbone, htmlJST){
		var featuredProductsView = Backbone.View.extend({
			el: "body > div > section",

			render: function(){
				this.$el.append(JST['src/js/templates/featuredProducts.html']);
			}
		});
		
		return new featuredProductsView();
	}
);