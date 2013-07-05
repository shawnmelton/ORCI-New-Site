module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		jshint: {
			all: ['gruntfile.js', 'src/js/*.js', 'src/tools/*.js', 'src/views/*.js']
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: "src/js/",
					mainConfigFile: "src/js/bootstrap.js",
					name: "app",
					include: ["bootstrap"],
					out: "httpdocs/js/app.min.js"
				}
			}
		},
		concat: {
			scripts: {
				src: ['src/js/libs/css3-mediaqueries.js', 'src/js/libs/html5.js'],
				dest: 'httpdocs/js/ie-lte-9.js'
			}
		},
		uglify: {
			options: {
				report: 'min'
			},
			my_target: {
				files: {
					'httpdocs/js/require.min.js': ['src/js/libs/require.js']
				}
			}
		},
		sass: {
			dist: {
				files: {
					"src/css/layout.css": ["src/css/layout.scss"],
					"src/css/responsive.css": ["src/css/responsive.scss"],
				}
			}
		},
		cssmin: {
			compress: {
				files: {
					'httpdocs/css/styles.css': "src/css/*.css"
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
					cwd: 'src/img/',
					src: ['*.png', '*.jpg'],
					dest: 'httpdocs/img/'
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
					'httpdocs/index.html' : 'src/index.html'
				}
			}
		},
		watch: {
			css: {
				files: ['src/css/layout.scss', 'src/css/all-wp-styles.css', 'src/css/responsive.scss'],
				tasks: ['sass', 'cssmin'],
				options: {
					livereload: true
				}
			},
			scripts: {
				files: ['src/js/*.js', 'src/js/**/*.js'],
				tasks: ['requirejs'],
				options: {
					livereload: true
				}
			},
			images: {
				files: ['src/img/*.png', 'src/img/*.jpg'],
				tasks: ['imagemin'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['src/index.html'],
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
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.registerTask('default', ['jshint', 'requirejs', 'uglify', 'sass', 'cssmin', 'concat', 'imagemin', 'htmlmin', 'watch']);
};