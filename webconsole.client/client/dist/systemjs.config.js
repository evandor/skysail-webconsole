(function (global) {

    var ngVer = '@2.0.0-rc.3'; // lock in the angular package version; do not let it float to current!
    var routerVer = '@3.0.0-alpha.7'; // lock router version
    var formsVer = '@0.1.1'; // lock forms version

    // map tells the System loader where to look for things
    var map = {
        'app':                     'app', 
        'rxjs':                    'lib/rxjs',
        '@angular':                'lib/@angular',
        '@angular/forms':          'lib/@angular/forms',
        'angular2-tree-component': 'lib/angular2-tree-component',
        'lodash':                  'lib/lodash',
        'd3':                      'lib/d3/d3.min.js', //https://d3js.org/d3.v3.min.js'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-tree-component'   : { main: 'dist/angular2-tree-component.js', defaultExtension: 'js' },
        'lodash'                    : { main: 'lodash.js', defaultExtension: 'js' },
        'angular2-localstorage'     : { defaultExtension: 'js' }
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/forms',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/testing',
        '@angular/upgrade'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    packageNames.forEach(function (pkgName) {

        // Bundled (~40 requests):
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };

        // Individual files (~300 requests):
        //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

    System.config(config);

})(this);
