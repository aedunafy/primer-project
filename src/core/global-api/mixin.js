/* @flow */
import { mergeOptions } from '../util/index'

export function initMixin (Vue: GlobalAPI) {	

	Vue.mixin = function(mixin : Object) {
		console.log(this.options);
		return this
	}
}