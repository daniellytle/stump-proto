module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        CLIENT_DIR: 'app/client',
        uglify: {
            compile: {
                files: {
                    'public/js/app.min.js': ['<%= CLIENT_DIR %>/app.js']
                }
            }
        },
        browserify: {
            compile: {
                src: ['<%= CLIENT_DIR %>/app.js'],
                dest: 'public/js/app.js'
            }
        },
        stylus: {
            compile: {
                options: {
                    compress: true
                },
                src: ['<%= CLIENT_DIR %>/app.styl'],
                dest: 'public/css/app.min.css'
            }
        },
        nodemon: {
            dev: {
                script: ['server.js']
            }
        },
        watch: {
            browserify: {
                files: ['<%= CLIENT_DIR %>/app.js'],
                tasks: ['uglify:compile']
            },
            stylus: {
                files: ['<%= CLIENT_DIR %>/**/*.styl','<%= CLIENT_DIR %>/app.styl'],
                tasks: ['stylus:compile']
            }
        },
        concurrent: {
            tasks: ['watch','nodemon'],
            options: {
                logConcurrentOutput: true
            }
        },
        shell: {
            reset: {
                command: 'node app/data/init'
            }
        }
    })

    grunt.loadNpmTasks('grunt-browserify')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-jade')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-stylus')
    grunt.loadNpmTasks('grunt-nodemon')
    grunt.loadNpmTasks('grunt-concurrent')
    grunt.loadNpmTasks('grunt-shell')
    grunt.registerTask('reset', ['shell:reset'])
    grunt.registerTask('prototype', ['jade:prototype','stylus:prototype','watch:prototype','concurrent'])
    grunt.registerTask('compile', ['stylus:compile','browserify:compile','uglify:compile'])
    grunt.registerTask('default', ['compile','concurrent'])
}
