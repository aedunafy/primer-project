/* @flow */
import config from '../config'

export function initGlobalAPI (Vue: GlobalAPI) {
	const configDef = {}	
    configDef.get = () => config
	console.log(process.env.NODE_ENV)
	if (process.env.NODE_ENV !== 'production') {
    configDef.set = () => {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      )
    }
	Object.defineProperty(Vue, 'config', configDef)
  }
}

