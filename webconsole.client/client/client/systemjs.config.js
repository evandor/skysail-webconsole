/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

  var ngVer = '@2.0.0-rc.2'; // lock in the angular package version; do not let it float to current!
  var routerVer = '@3.0.0-alpha.3'; // lock router version

  // map tells the System loader where to look for things
  var map = {
    'app': 'app', // 'dist',

    'rxjs': 'lib/rxjs',
    '@angular': 'lib/@angular',

    '@angular/router': 'https://npmcdn.com/@angular/router' + routerVer,
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'angular2-websocket': 'node_modules/angular2-websocket',
    'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js',
    'semantic': 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js',
    'd3': 'node_modules/d3/d3.min.js' //https://d3js.org/d3.v3.min.js'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'http': { defaultExtension: 'js' },
    'angular2-websocket': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade'
  ];

  
  ngPackageNames.forEach(function (pkgName) {
        packages[pkgName] = {main: 'index.js', defaultExtension: 'js'};
    });

  // Individual files (~300 requests):
  /*function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  };
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);*/
  var config = {
    map: map,
    packages: packages
  }
   // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }
  System.config(config);
})(this);