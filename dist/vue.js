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
	function initMixin (Vue) {
		console.log('Mixin');
		Vue.prototype._init = function (){
			console.log('_init');
		};
	}

	function Vue (options) {
		console.log('Hi I am the starting!');
		this._init(options);
	}

	initMixin(Vue);

	return Vue;

}));
