module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    app: {
      src: './public',
      dest: './dist',
      secrets: '<%= grunt.file.readJSON("secrets.json") %>'
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
    rsync: {
      options: {
        args: ['--verbose'],
        exclude: ['.git*', '.less', 'node_modules'],
        recursive: true
      },
      stage: {
        options: {
          src: '<%= app.dest %>',
          dest: '<%= app.secrets.rsync.stage.dest %>',
          host: '<%= app.secrets.rsync.stage.host %>'
        }
      }
    }
  });

  grunt.registerTask('default', []);

  grunt.registerTask('build', [
    'harp:dist'
  ]);

};