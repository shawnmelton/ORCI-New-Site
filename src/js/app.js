define(["jquery", "router", "tools/responsiveLayout"], function($, Router, ResponsiveLayout){
		$(document).ready(function() {
			Router.initialize();
			ResponsiveLayout.init();
		});
	}
);