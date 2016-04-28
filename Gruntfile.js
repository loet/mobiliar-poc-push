module.exports = function (grunt) {

    var options, pkg, destinationFile, app, app_css, libraries, mobiliar_libraries;

    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-json-merge');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concat-css');

    // load build config
    options = require('./build.config');
    // initialize loaded configs
    grunt.initConfig(options);

    pkg = grunt.file.readJSON('package.json');
    destinationFile = 'dist/' + pkg.name + '.js';
    app = 'www/lib/app.js';
    app_css = 'www/lib/app.css';
    libraries = 'www/lib/libaries.js';
    mobiliar_libraries = 'www/lib/mobiliar-libraries.js';

    grunt.config.merge({
            pkg: pkg,

            clean: ['tmp', 'www'],

            html2js: {
                options: {
                    module: '<%= pkg.name %>.templates'
                },
                main: {
                    src: ['src/**/*.tpl.html'],
                    dest: 'tmp/templates.js'
                }
            },

            replace: {
                templates: {
                    src: ['src/**/*.js', '!src/index.html'],
                    dest: 'tmp/',             // destination directory or file
                    replacements: [{
                        from: '//templatesmodule',                   // string replacement
                        to: "'<%= pkg.name %>.templates'"
                    }]
                }
            },

            concat: {
                options: {
                    stripBanners: true,
                    banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n\n'
                },
                dist: {
                    src: 'tmp/*.js',
                    dest: app
                },
                libs: {
                    src: '<%= config.bower_components %>',
                    dest: libraries
                },
                mobiliar_libs: {
                    src: '<%= config.mobiliar_bower_components %>',
                    dest: mobiliar_libraries
                }
            },

            concat_css: {
                options: {},
                dist: {
                    src: ['src/**/*.css'],
                    dest: app_css
                },
                libs: {
                    src: '<%= config.libs_css %>',
                    dest: 'www/lib/libraries.css'
                },
                mobiliar_libs: {
                    src: '<%= config.mobiliar_bower_components_css %>',
                    dest: 'www/lib/mobiliar-libraries.css'
                }
            },

            json_merge: {
                options: {},
                translations: {
                    files: {'www/translations/translations.json': '<%= config.translations %>'}
                }
            },

            copy: {
                index: {
                    src: 'src/index.html',
                    dest: 'www/index.html'
                },
                ionic_fonts: {
                    expand: true,
                    cwd: 'bower_components/ionic/fonts',
                    src: '**',
                    dest: 'www/lib/ionic/fonts'
                },
                mobiliar_fonts: {
                    expand: true,
                    cwd: 'bower_components/mobiliar-app-utils/fonts',
                    src: '**',
                    dest: 'www/lib/mobiliar/fonts'
                },
                images: {
                    expand: true,
                    cwd: 'bower_components/mobiliar-app-utils/img',
                    src: '**',
                    dest: 'www/img'
                },
                ionic: {
                    src: 'bower_components/ionic/js/ionic.bundle.min.js',
                    dest: 'www/lib/ionic.bundle.min.js'
                },
                ionic_webclient: {
                    src: 'bower_components/ionic-platform-web-client/dist/ionic.io.bundle.min.js',
                    dest: 'www/lib/ionic.io.bundle.min.js'
                }
            },

            //karma: {
            //    test: {
            //        options: {
            //            files: [
            //                '<%= config.bower_components %>',
            //                destinationFile,
            //                'src/**/*.spec.js'
            //            ]
            //        },
            //        runnerPort: 9999,
            //        singleRun: true,
            //        background: false,
            //        browsers: ['PhantomJS'],
            //        frameworks: ['jasmine'],
            //        reporters: ['progress'],
            //        plugins: [
            //            'karma-jasmine',
            //            'karma-phantomjs-launcher'
            //        ],
            //        logLevel: 'ERROR'
            //    },
            //    watch: {
            //        options: {
            //            files: [
            //                '<%= config.bower_components %>',
            //                'src/**/*.js'
            //            ]
            //        },
            //        runnerPort: 8001,
            //        singleRun: false,
            //        background: false,
            //        autoWatch: true,
            //        browsers: ['Chrome'],
            //        frameworks: ['jasmine'],
            //        reporters: ['progress'],
            //        plugins: [
            //            'karma-jasmine',
            //            'karma-chrome-launcher'
            //        ],
            //        logLevel: 'ERROR'
            //    }
            //},

            watch: {
                index: {
                    files: ['src/index.html'],
                    tasks: ['copy:index'],
                    options: {
                        spawn: false
                    }
                },
                app: {
                    files: ['www/index.html', 'src/**/*.js', 'src/**/*.html'],
                    tasks: ['html2js', 'replace:templates', 'concat:dist'],
                    options: {
                        spawn: false
                    }
                },
                css: {
                    files: ['src/**/*.css'],
                    tasks: ['concat_css'],
                    options: {
                        spawn: false
                    }
                },
                translations: {
                    files: '<%= config.translations %>',
                    tasks: ['json_merge'],
                    options: {
                        spawn: false
                    }
                },
                mobiliar_bower_components: {
                    files: '<%= config.mobiliar_bower_components %>',
                    tasks: ['concat:mobiliar_libs'],
                    options: {
                        spawn: false
                    }
                },
                mobiliar_bower_components_css: {
                    files: '<%= config.mobiliar_bower_components_css %>',
                    tasks: ['concat_css'],
                    options: {
                        spawn: false
                    }
                }
            }

        }
    );

//grunt.registerTask('default', ['clean', 'html2js', 'replace:templates', 'concat:dist']);
    grunt.registerTask('default', ['clean', 'copy:index', 'html2js', 'replace:templates', 'concat:dist', 'concat:libs', 'concat:mobiliar_libs', 'concat_css', 'json_merge', 'copy:ionic_fonts', 'copy:mobiliar_fonts', 'copy:images', 'copy:ionic', 'copy:ionic_webclient']);

//grunt.registerTask('test', 'Run karma unit tests', [
//    'html2js', 'replace:templates', 'concat:dist'/*, 'karma:test'*/
//]);
//
//grunt.registerTask('run', 'Run service', [
//    'karma:watch'
//]);

    grunt.registerTask('dev', ['watch']);

}
;