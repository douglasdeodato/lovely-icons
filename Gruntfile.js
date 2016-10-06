module.exports = function(grunt) {
    var config = {};

      //src ===============================
    var src;
    config.src = src = {
      //  sassMain: 'scss/main.scss',
       // distFolder: 'public/stylesheets/lovelycss.dist.css',
       // devFolder: 'public/stylesheets/lovelycss.dev.css',
       // sassFolder: 'scss/**/*.scss',
        appFolder: 'website/app/*',
        serverPort: 4000
    };

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
            files: ["<%= src.appFolder %>"],
            tasks: ["dist"]
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
    //grunt.registerTask('dev', ['concat:dev', 'sass:dev']);
    grunt.registerTask('dist', ['cssmin']);
    grunt.registerTask('serve', ['connect:server', 'watch']);
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies'
    });


    //General setup ===============================
    grunt.initConfig(config);

};
