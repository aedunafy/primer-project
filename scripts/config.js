const path = require('path')
const flow = require('rollup-plugin-flow-no-whitespace')
const alias = require('rollup-plugin-alias')

const banner = 
	`/* Vue Practice Started : 26-July-2019
                                 By AEDUNAFY
	 */
	`

const aliases = require('./alias')

const resolve = p => {
	const base = p.split('/')[0]
	if (aliases[base]) {
		return path.resolve(aliases[base], p.slice(base.length + 1))
	} else {
		return path.resolve(__dirname, '../', p)
	}
}


const builds = {
   // Runtime+compiler development build (Browser)
  'web-full-dev': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.js'),
    format: 'umd',
    env: 'development',
    alias: { he: './entity-decoder' },
    banner
  },
  // Runtime+compiler production build  (Browser)
  'web-full-prod': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.min.js'),
    format: 'umd',
    env: 'production',
    alias: { he: './entity-decoder' },
    banner
  }	
}

function getConfig (name) {
	const opts = builds[name]
	const config = {
		input: opts.entry,
		external: opts.external,
		plugins: [
			flow(),
			alias(Object.assign({}, aliases, opts.alias))

		].concat(opts.plugins || []),
		output: {
			file: opts.dest,
			format: opts.format,
			banner: banner,
			name : opts.moduleName || 'Vue'
		}
	}
	return config
}
if (process.env.TARGET) {
	module.exports = getConfig(process.env.TARGET)
} else {
	exports.getBuild = getConfig
	exports.getAllBuilds = () => Object.keys(builds).map(getConfig)
}
