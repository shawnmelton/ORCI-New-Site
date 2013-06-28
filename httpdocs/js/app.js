define([
	"jquery",
	"underscore",
	"backbone",
	"router"
	], function($, _, Backbone, Router){
		var initialize = function(){
			$(document).ready(function() {
				Router.initialize();	
			});
		}
	
		return {
			initialize: initialize
		};
	}
);