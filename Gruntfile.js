var util = require('util');

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    app: {
      src: 'public/',
      dest: 'www/',
      secrets: grunt.file.readYAML('secrets.yml')
    },
    harp: {
      server: {
        server: true,
        source: '<%= app.src %>'
      },
      dist: {
        source: '.',
        dest: '<%= app.dest %>'
      }
    },
    imagemin: {
      images: {
        options: {
          optimizationLevel: 7
        },
        files: [{
          expand: true,
          cwd: 'www/',
          src: ['*.{png,jpg,gif}', 'assets/img/*.{png,gif,jpg}'],
          dest: 'www/'
        }]
      }
    },
    rsync: {
      options: {
        args: ['--verbose'],
        exclude: ['.git*', '.less', 'node_modules', '.DS_Store'],
        recursive: true
      },
      stage: {
        options: {
          src: '<%= app.dest %>',
          dest: '<%= app.secrets.rsync.stage.dest %>',
          host: '<%= app.secrets.rsync.stage.host %>',
        }
      },
      prod: {
        options: {
          src: '<%= app.dest %>',
          dest: '<%= app.secrets.rsync.prod.dest %>',
          host: '<%= app.secrets.rsync.prod.host %>',
        }
      }
    }
  });

  grunt.registerTask('server', [
    'harp:server'
  ]);

  grunt.registerTask('default', [
    'server'
  ]);

  grunt.registerTask('build', [
    'harp:dist'
  ]);

  grunt.registerTask('images', [
    'imagemin'
  ]);

  grunt.registerTask('optimize', [
    'imagemin'
  ]);

  grunt.registerTask('deploy', [
    'rsync'
  ]);

};