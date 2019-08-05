/* @flow */

let uid = 0

export function initMixin (Vue:Class<Component>) {
	Vue.prototype._init = function (options?: Object){
		const vm: Component = this
		vm._uid = uid++

		vm._isVue = true 

		console.log(vm.constructor.options)
		console.log(options)

		vm.$options = mergeOptions()

			
	}
}



