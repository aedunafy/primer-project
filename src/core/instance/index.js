import { initMixin } from './init'

function Vue (options) {
	console.log('Hi I am the starting!')
	this._init(options)
}

initMixin(Vue)

export default Vue
