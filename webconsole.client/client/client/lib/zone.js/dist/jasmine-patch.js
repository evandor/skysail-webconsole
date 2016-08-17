/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	(function () {
	    // Patch jasmine's describe/it/beforeEach/afterEach functions so test code always runs
	    // in a testZone (ProxyZone). (See: angular/zone.js#91 & angular/angular#10503)
	    if (!Zone)
	        throw new Error("Missing: zone.js");
	    if (!jasmine)
	        throw new Error("Missing: jasmine.js");
	    if (jasmine['__zone_patch__'])
	        throw new Error("'jasmine' has already been patched with 'Zone'.");
	    jasmine['__zone_patch__'] = true;
	    var SyncTestZoneSpec = Zone['SyncTestZoneSpec'];
	    var ProxyZoneSpec = Zone['ProxyZoneSpec'];
	    if (!SyncTestZoneSpec)
	        throw new Error("Missing: SyncTestZoneSpec");
	    if (!ProxyZoneSpec)
	        throw new Error("Missing: ProxyZoneSpec");
	    var ambientZone = Zone.current;
	    // Create a synchronous-only zone in which to run `describe` blocks in order to raise an 
	    // error if any asynchronous operations are attempted inside of a `describe` but outside of 
	    // a `beforeEach` or `it`.
	    var syncZone = ambientZone.fork(new SyncTestZoneSpec('jasmine.describe'));
	    // This is the zone which will be used for running individual tests.
	    // It will be a proxy zone, so that the tests function can retroactively install
	    // different zones. 
	    // Example:
	    //   - In beforeEach() do childZone = Zone.current.fork(...);
	    //   - In it() try to do fakeAsync(). The issue is that because the beforeEach forked the 
	    //     zone outside of fakeAsync it will be able to escope the fakeAsync rules.
	    //   - Because ProxyZone is parent fo `childZone` fakeAsync can retroactively add 
	    //     fakeAsync behavior to the childZone.
	    var testProxyZone = null;
	    // Monkey patch all of the jasmine DSL so that each function runs in appropriate zone.
	    var jasmineEnv = jasmine.getEnv();
	    ['desribe', 'xdescribe', 'fdescribe'].forEach(function (methodName) {
	        var originalJasmineFn = jasmineEnv[methodName];
	        jasmineEnv[methodName] = function (description, specDefinitions) {
	            return originalJasmineFn.call(this, description, wrapDescribeInZone(specDefinitions));
	        };
	    });
	    ['it', 'xit', 'fit'].forEach(function (methodName) {
	        var originalJasmineFn = jasmineEnv[methodName];
	        jasmineEnv[methodName] = function (description, specDefinitions) {
	            return originalJasmineFn.call(this, description, wrapTestInZone(specDefinitions));
	        };
	    });
	    ['beforeEach', 'afterEach'].forEach(function (methodName) {
	        var originalJasmineFn = jasmineEnv[methodName];
	        jasmineEnv[methodName] = function (specDefinitions) {
	            return originalJasmineFn.call(this, wrapTestInZone(specDefinitions));
	        };
	    });
	    /**
	     * Gets a function wrapping the body of a Jasmine `describe` block to execute in a
	     * synchronous-only zone.
	     */
	    function wrapDescribeInZone(describeBody) {
	        return function () {
	            return syncZone.run(describeBody, this, arguments);
	        };
	    }
	    /**
	     * Gets a function wrapping the body of a Jasmine `it/beforeEach/afterEach` block to
	     * execute in a ProxyZone zone.
	     * This will run in `testProxyZone`. The `testProxyZone` will be reset by the `ZoneQueueRunner`
	     */
	    function wrapTestInZone(testBody) {
	        // The `done` callback is only passed through if the function expects at least one argument.
	        // Note we have to make a function with correct number of arguments, otherwise jasmine will
	        // think that all functions are sync or async.
	        return (testBody.length == 0)
	            ? function () { return testProxyZone.run(testBody, this); }
	            : function (done) { return testProxyZone.run(testBody, this, [done]); };
	    }
	    var QueueRunner = jasmine.QueueRunner;
	    jasmine.QueueRunner = (function (_super) {
	        __extends(ZoneQueueRunner, _super);
	        function ZoneQueueRunner(attrs) {
	            attrs.clearStack = function (fn) { return fn(); }; // Don't clear since onComplete will clear.
	            attrs.onComplete = (function (fn) { return function () {
	                // All functions are done, clear the test zone.
	                testProxyZone = null;
	                ambientZone.scheduleMicroTask('jasmine.onComplete', fn);
	            }; })(attrs.onComplete);
	            _super.call(this, attrs);
	        }
	        ZoneQueueRunner.prototype.execute = function () {
	            if (Zone.current !== ambientZone)
	                throw new Error("Unexpected Zone: " + Zone.current.name);
	            testProxyZone = ambientZone.fork(new ProxyZoneSpec());
	            _super.prototype.execute.call(this);
	        };
	        return ZoneQueueRunner;
	    }(QueueRunner));
	})();


/***/ }
/******/ ]);