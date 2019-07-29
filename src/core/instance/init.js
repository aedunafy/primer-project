/* @flow */
export function initMixin (Vue: Class<Component>) {
	console.log('Mixin')
	Vue.prototype._init = function (){
		console.log('_init')
	}
}
