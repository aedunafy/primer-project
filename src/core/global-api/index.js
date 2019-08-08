/* @flow */
import config from '../config'
import { 
  extend
} from '../util/index'

import {ASSET_TYPES} from 'shared/constants'
import {initUse} from './use'
import {initMixin} from './mixin'
import builtInComponents from '../components/index'

export function initGlobalAPI (Vue: GlobalAPI) {
	const configDef = {}	
	configDef.get = () => config
	if (process.env.NODE_ENV !== 'production') {
    	configDef.set = () => {
			//TODO need to analyze warn complex method.
      		console.log('Do not replace the Vue.config object, set individual fields instead.')
    	}
	Object.defineProperty(Vue, 'config', configDef)
	
	Vue.util = { extend }
	
	Vue.options = Object.create(null)
	
	ASSET_TYPES.forEach(type => {
		Vue.options[type+ 's'] = Object.create(null)
	})
	
	 Vue.options._base = Vue
	 
	 extend(Vue.options.components, builtInComponents)
	 
	 initUse(Vue)
	 initMixin(Vue)
	 
  }
}

