module.exports = (grunt) ->
  grunt.loadNpmTasks("grunt-contrib-clean")
  grunt.loadNpmTasks("grunt-purescript")
  grunt.loadNpmTasks("grunt-execute")
  
  grunt.initConfig
    libFiles: [
      "src/**/*.purs"
      "bower_components/purescript-*/src/**/*.purs"
      "bower_components/purescript-*/src/**/*.purs.hs"
    ]
    clean:
      tests: ["tmp"]
      lib: ["js", "externs"]
  
    pscMake: ["<%=libFiles%>"]
    dotPsci: ["<%=libFiles%>"]
  
    psc:
      tests:
        options:
          module: ["TestRunner"]
          # main: true
          noMagicDo: true
        src: ["tests/TestRunner.purs", "<%=libFiles%>"]
        dest: "tmp/tests.js"
      app:
        options:
          module: ["Main"]
          main: true
        src: ["src/Main.purs", "<%=libFiles%>"]
        dest: "public/main.js"
    execute:
      tests:
        src: "tmp/tests.js"

  grunt.registerTask("test", ["build", "clean:tests", "psc:tests", "execute:tests", "clean:tests"])
  grunt.registerTask("build", ["psc:app"])
  grunt.registerTask("make", ["pscMake", "dotPsci"])
  grunt.registerTask("default", ["make", "build"])
