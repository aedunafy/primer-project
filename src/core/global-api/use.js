/* @flow */

export function initUse (Vue: GlobalAPI) {
		Vue.use = function (plugin: Function | Object) {
			return this
		}
	
}