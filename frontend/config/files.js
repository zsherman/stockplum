/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = require(process.env["LINEMAN_MAIN"]).config.extend("files", {
  js: {
    vendor: [
      "vendor/bower/angular/angular.js",
      "vendor/bower/angular-resource/angular-resource.js",
      "vendor/bower/angular-route/angular-route.js",
      "vendor/bower/firebase/firebase.js",
      "vendor/bower/angularfire/dist/angularfire.js",
      "vendor/bower/firebase-simple-login/firebase-simple-login.js",
      "vendor/bower/moment/moment.js",
      "vendor/bower/highstock/js/highstock.src.js",
      "vendor/js/**/*.js"  // Note that this glob remains for traditional vendor libs
    ],
    app: [
      "app/js/app.js",
      "app/js/**/*.js"
    ]
  },

  css: {
    vendor: [
      "vendor/bower/normalize.css/normalize.css",
      "vendor/css/**/*.css" // Note that this glob remains for traditional vendor libs
    ]
  }
});
