/* @flow */
import config from '../config'

export function initGlobalAPI (Vue: GlobalAPI) {
	const configDef = {}	
	configDef.get = () => config
	if (process.env.NODE_ENV !== 'production') {
    	configDef.set = () => {
		//TODO need to analyze warn complex method.
      		console.log('Do not replace the Vue.config object, set individual fields instead.')
    	}
	//Object.defineProperty(Vue, 'config', configDef)
  }
}

