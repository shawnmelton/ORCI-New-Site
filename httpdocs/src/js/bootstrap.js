require.config({
	urlArgs: "r="+ (new Date()).getTime(),

	deps: ['app'],
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