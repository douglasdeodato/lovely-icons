module.exports = function(grunt) {
    var config = {};

    //setup the configuration object
    var jshint;

    //all tasks that must be loaded.
    var tasks = [
                , 'grunt-contrib-watch'
                , 'grunt-contrib-connect'
                , 'grunt-contrib-cssmin'
                ];

    var cssmin
    config.cssmin = {
        target: {
            files: [{
                expand: true,
                cwd: 'lovely-icons',
                src: ['*.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
            }]
        }
    }

    //Watch ===============================
    config.watch = {
        scripts: {
            files: ["<%= src.sassFolder %>"],
            tasks: ["sass:dist"]
        }
    }



    //grunt serve ===============================
    config.connect = {
        server: {
            options: {
                livereload: true,
                port: "<%= src.serverPort %>"
            }
        }
    };


    //Register custom tasks ===============================
    grunt.registerTask('default', ['dist']);
    grunt.registerTask('dist', ['cssmin']);
    grunt.registerTask('serve', ['connect:server', 'watch']);


    //General setup ===============================
    grunt.initConfig(config);
    tasks.forEach(grunt.loadNpmTasks);

};
