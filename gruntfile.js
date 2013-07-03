module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		jshint: {
			all: ['gruntfile.js', 'httpdocs/src/js/*.js', 'httpdocs/src/tools/*.js', 'httpdocs/src/views/*.js']
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: "httpdocs/src/js/",
					mainConfigFile: "httpdocs/src/js/bootstrap.js",
					name: "app",
					include: ["bootstrap"],
					out: "httpdocs/dist/js/app.min.js"
				}
			}
		},
		sass: {
			dist: {
				files: {
					"httpdocs/src/css/layout.css": ["httpdocs/src/css/layout.scss"],
					"httpdocs/src/css/responsive.css": ["httpdocs/src/css/responsive.scss"],
				}
			}
		},
		cssmin: {
			compress: {
				files: {
					'httpdocs/dist/css/styles.css': "httpdocs/src/css/*.css"
				}
			}
		},
		imagemin: {
			options: {
				optimizationLevel: 3
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'httpdocs/src/img/',
					src: ['*.png', '*.jpg'],
					dest: 'httpdocs/dist/img/'
				}]
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: { 
					'httpdocs/index.html' : 'httpdocs/src/index.html'
				}
			}
		},
		watch: {
			css: {
				files: ['httpdocs/src/css/layout.scss', 'httpdocs/src/css/all-wp-styles.css', 'httpdocs/src/css/responsive.scss'],
				tasks: ['sass', 'cssmin'],
				options: {
					livereload: true
				}
			},
			scripts: {
				files: ['httpdocs/src/js/*.js', 'httpdocs/src/js/**/*.js'],
				tasks: ['requirejs'],
				options: {
					livereload: true
				}
			},
			images: {
				files: ['httpdocs/src/img/*.png', 'httpdocs/src/img/*.jpg'],
				tasks: ['imagemin'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['httpdocs/src/index.html'],
				tasks: ['htmlmin'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.event.on('watch', function(action, filepath) {
		grunt.log.writeln(filepath + ' has ' + action);
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.registerTask('default', ['jshint', 'requirejs', 'sass', 'cssmin', 'imagemin', 'htmlmin', 'watch']);
};