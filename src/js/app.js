define(["jquery", "router", "tools/responsiveLayout"], function($, Router, ResponsiveLayout){
		$(document).ready(function() {
            // Setting Dev Mode below turns off all API requests.
            window.devMode = true;

			Router.initialize();
			ResponsiveLayout.init();
		});
	}
);