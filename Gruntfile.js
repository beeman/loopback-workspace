module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    loopback_angular: {
      services: {
        options: {
          input: './app.js',
          output: './dist/workspace.js'
        }
      }
    },
    docular: {
      groups: [
        {
          groupTitle: 'LoopBack',
          groupId: 'loopback',
          sections: [
            {
              id: 'lbServices',
              title: 'LoopBack Services',
              scripts: [ 'dist/workspace.js' ]
            }
          ]
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-loopback-angular');
  grunt.loadNpmTasks('grunt-docular');

  grunt.registerTask('default', ['loopback_angular', 'docular']);
};
