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

	/**
	 * A `TaskTrackingZoneSpec` allows one to track all outstanding Tasks.
	 *
	 * This is useful in tests. For example to see which tasks are preventing a test from completing
	 * or an automated way of releasing all of the event listeners at the end of the test.
	 */
	var TaskTrackingZoneSpec = (function () {
	    function TaskTrackingZoneSpec() {
	        this.name = 'TaskTrackingZone';
	        this.microTasks = [];
	        this.macroTasks = [];
	        this.eventTasks = [];
	        this.properties = { 'TaskTrackingZone': this };
	    }
	    TaskTrackingZoneSpec.get = function () {
	        return Zone.current.get('TaskTrackingZone');
	    };
	    TaskTrackingZoneSpec.prototype.getTasksFor = function (type) {
	        switch (type) {
	            case 'microTask': return this.microTasks;
	            case 'macroTask': return this.macroTasks;
	            case 'eventTask': return this.eventTasks;
	        }
	        throw new Error('Unknown task format: ' + type);
	    };
	    TaskTrackingZoneSpec.prototype.onScheduleTask = function (parentZoneDelegate, currentZone, targetZone, task) {
	        task['creationLocation'] = new Error("Task '" + task.type + "' from '" + task.source + "'.");
	        var tasks = this.getTasksFor(task.type);
	        tasks.push(task);
	        return parentZoneDelegate.scheduleTask(targetZone, task);
	    };
	    TaskTrackingZoneSpec.prototype.onCancelTask = function (parentZoneDelegate, currentZone, targetZone, task) {
	        var tasks = this.getTasksFor(task.type);
	        for (var i = 0; i < tasks.length; i++) {
	            if (tasks[i] == task) {
	                tasks.splice(i, 1);
	                break;
	            }
	        }
	        return parentZoneDelegate.cancelTask(targetZone, task);
	    };
	    TaskTrackingZoneSpec.prototype.onInvokeTask = function (parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs) {
	        if (task.type === 'eventTask')
	            return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
	        var tasks = this.getTasksFor(task.type);
	        for (var i = 0; i < tasks.length; i++) {
	            if (tasks[i] == task) {
	                tasks.splice(i, 1);
	                break;
	            }
	        }
	        return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
	    };
	    TaskTrackingZoneSpec.prototype.clearEvents = function () {
	        while (this.eventTasks.length) {
	            Zone.current.cancelTask(this.eventTasks[0]);
	        }
	    };
	    return TaskTrackingZoneSpec;
	}());
	// Export the class so that new instances can be created with proper
	// constructor params.
	Zone['TaskTrackingZoneSpec'] = TaskTrackingZoneSpec;


/***/ }
/******/ ]);