module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: [
                    'bower_components/requirejs/require.js',
                    'bower_components/require-css/css.js'
                ],
                dest: '<%= pkg.version %>/require.min.js'
            }
        },

        clean: {
            build: ['<%= pkg.version %>']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['clean', 'uglify']);

};