(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["Clappr"], factory);
	else if(typeof exports === 'object')
		exports["ClapprPauseTabVisibility"] = factory(require("Clappr"));
	else
		root["ClapprPauseTabVisibility"] = factory(root["Clappr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _slicedToArray=(function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n = (_s = _i.next()).done);_n = true) {_arr.push(_s.value);if(i && _arr.length === i)break;}}catch(err) {_d = true;_e = err;}finally {try{if(!_n && _i['return'])_i['return']();}finally {if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else {throw new TypeError('Invalid attempt to destructure non-iterable instance');}};})();var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if('value' in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x,_x2,_x3){var _again=true;_function: while(_again) {var object=_x,property=_x2,receiver=_x3;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if('value' in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass !== 'function' && superClass !== null){throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _clappr=__webpack_require__(1);var ClapprPauseTabVisibility=(function(_ContainerPlugin){_inherits(ClapprPauseTabVisibility,_ContainerPlugin);function ClapprPauseTabVisibility(){_classCallCheck(this,ClapprPauseTabVisibility);_get(Object.getPrototypeOf(ClapprPauseTabVisibility.prototype),'constructor',this).apply(this,arguments);}_createClass(ClapprPauseTabVisibility,[{key:'bindEvents',value:function bindEvents(){var _this=this;var _resoleVisibilityAPI=this.resoleVisibilityAPI();var _resoleVisibilityAPI2=_slicedToArray(_resoleVisibilityAPI,2);var hidden=_resoleVisibilityAPI2[0];var visibilityEvent=_resoleVisibilityAPI2[1];this.visibilityEvent = visibilityEvent;this.originalTitle = document.title;this.wasPlaying = false;this.onVisibilityChange = function(){return _this.togglePauseResume(hidden);};console.log('bindEvents');document.addEventListener(this.visibilityEvent,this.onVisibilityChange);}},{key:'resoleVisibilityAPI',value:function resoleVisibilityAPI(){var compatiblePropertyAndEvent=[];var hiddenApi=['hidden','webkithidden','mozhidden','mshidden','ohidden'];var visibilityEventApi=['visibilitychange','webkitvisibilitychange','mozvisibilitychange','msvisibility','ovisibility'];hiddenApi.forEach(function(property,index){if(property in document){compatiblePropertyAndEvent.push(property);compatiblePropertyAndEvent.push(visibilityEventApi[index]);}});return compatiblePropertyAndEvent;}},{key:'togglePauseResume',value:function togglePauseResume(hidden){var command=document[hidden]?'pause':'play';hidden && this[command]();}},{key:'play',value:function play(){if(this.wasPlaying == false){console.log('play: was not playing');return;}console.log('play: issue play');this.container.play();if(this.options.visibilityEnableIcon){document.title = this.originalTitle;}}},{key:'pause',value:function pause(){this.wasPlaying = this.container.isPlaying();if(this.wasPlaying == false){console.log('pause: was not playing');return;}console.log('pause: issue pause');this.container.pause();if(this.options.visibilityEnableIcon){document.title = '⏸  ' + this.originalTitle;}}},{key:'stopListening',value:function stopListening(){document.removeEventListener(this.visibilityEvent,this.onVisibilityChange);}},{key:'name',get:function get(){return 'clappr_pause_tab_visibility';}}]);return ClapprPauseTabVisibility;})(_clappr.ContainerPlugin);exports['default'] = ClapprPauseTabVisibility;module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ])
});
;