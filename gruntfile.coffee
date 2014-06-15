module.exports = (grunt) ->
  grunt.loadNpmTasks("grunt-contrib-clean")
  grunt.loadNpmTasks("grunt-purescript")
  grunt.loadNpmTasks("grunt-execute")
  
  grunt.initConfig
    libFiles: [
      "bower_components/purescript-*/src/**/*.purs"
      "bower_components/purescript-*/src/**/*.purs.hs"
      "src/Vue.purs"
      "src/Language/JavaScript/Library/FFI.purs"
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
      hello_world:
        options:
          module: ["Main"]
          main: true
        src: ["src/hello_world/Main.purs", "<%=libFiles%>"]
        dest: "public/hello_world/main.js"
      github_commits:
        options:
          module: ["Main"]
          main: true
        src: ["src/github_commits/Main.purs", "<%=libFiles%>"]
        dest: "public/github_commits/main.js"
    execute:
      tests:
        src: "tmp/tests.js"

  grunt.registerTask("test", ["build", "clean:tests", "psc:tests", "execute:tests", "clean:tests"])
  grunt.registerTask("build", ["psc:hello_world"])
  grunt.registerTask("hello_world", ["make", "psc:hello_world"])
  grunt.registerTask("github_commits", ["make", "psc:github_commits"])
  grunt.registerTask("make", ["pscMake", "dotPsci"])
  grunt.registerTask("default", ["make", "build"])
