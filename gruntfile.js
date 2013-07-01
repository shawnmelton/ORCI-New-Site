module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		sass: {
			dist: {
				style: 'compressed',
				files: {
					"httpdocs/css/compiled-layout.css": [
						"httpdocs/css/layout.scss"
					]
				}
			}
		},
		watch: {
			css: {
				files: 'httpdocs/css/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.event.on('watch', function(action, filepath) {
  		grunt.log.writeln(filepath + ' has ' + action);
	});

	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.registerTask('default', ['sass', 'watch']);
};