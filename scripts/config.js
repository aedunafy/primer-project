const banner = 
	`Vue Build Tool 
	 Test By AEDUNAFY
	`

const aliases = require('./alias')

const resolve = p => {
	const base = p.split('/')[0]
	if (aliases[base]) {
		console.log(p.slice(base.length + 1))
	} else {
		console.log('__dirname');
		console.log(__dirname)
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

	}
}
if (process.env.TARGET) {
	module.exports = getConfig(process.env.TARGET)
} else {
	exports.getBuild = getConfig
	exports.getAllBuilds = () => Object.keys(builds).map(getConfig)
}
