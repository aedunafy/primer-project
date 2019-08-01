/*!
 * AEDUNAFY (26-July-2019) 
 * (c) 2014-2019 
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.Vue = factory());
}(this, function () { 'use strict';

	/*  */

	let uid = 0;

	function initMixin (Vue) {
		Vue.prototype._init = function (options){
			const vm = this;
			vm._uid = uid++;

		};
	}

	function Vue (options) {
		console.log('Hi I am the starting!');
		this._init(options);
	}

	initMixin(Vue);

	/*  */


	var config = {
		silent: false
	};

	/*  */

	function initGlobalAPI (Vue) {
		const configDef = {};	
	    configDef.get = () => config;
		console.log(process.env.NODE_ENV);
		if (process.env.NODE_ENV !== 'production') {
	    configDef.set = () => {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
		Object.defineProperty(Vue, 'config', configDef);
	  }
	}

	initGlobalAPI(Vue);

	return Vue;

}));
