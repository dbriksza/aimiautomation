/*global module:false*/
const sass = require('node-sass');
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        src: 'src/index.html',
        dest: 'dist/index.html',
      },
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        src: ['src/scss/*.scss'], dest: 'dist/css/styles.min.css',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        src: ['src/js/*.js'], dest: 'dist/js/script.js',
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('default', ['sass', 'uglify', 'copy']);

};
