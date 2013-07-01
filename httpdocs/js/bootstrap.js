require.config({
	urlArgs: "r="+ (new Date()).getTime(),

	paths: {
		jquery: "libs/jquery",
		underscore: "libs/underscore",
		backbone: "libs/backbone"
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
	    }
	}
});

require(["app"], function(app){
	app.initialize();
});