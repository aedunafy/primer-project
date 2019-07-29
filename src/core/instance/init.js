/* @flow */

let uid = 0

export function initMixin (Vue:Class<Component>) {
	Vue.prototype._init = function (options?: Object){
		const vm: Component = this
		vm._uid = uid++

	}
}
