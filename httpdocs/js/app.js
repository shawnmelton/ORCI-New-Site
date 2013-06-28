define([
	"jquery",
	"underscore",
	"backbone",
	"router",
	"libs/less"
	], function($, _, Backbone, Router, less){
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