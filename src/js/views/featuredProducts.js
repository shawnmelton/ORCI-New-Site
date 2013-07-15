define([
	"jquery",
	"underscore",
	"backbone",
	'text!templates/featuredProducts.html'
	], function($, _, Backbone, featuredHTML){
		var featuredProductsView = Backbone.View.extend({
			el: "body > div > section",

			render: function(){
				this.$el.append(_.template(featuredHTML, {}));
			}
		});
		
		return new featuredProductsView();
	}
);