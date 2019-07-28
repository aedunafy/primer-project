const rollup = require('rollup')
const fs = require('fs')
const terser = require('terser')

if(!fs.existsSync('dist')) {
	fs.mkdirSync('dist')
}

let builds = require('./config').getAllBuilds()

build(builds)

function build (builds) {
	let built = 0
	const total = builds.length
	const next = () => {
		buildEntry(builds[built]).then(() => {
			built++
			if (built < total) {
				next()
			}
		}).catch(logError)
	}
	next()
}

function buildEntry (config) {
	const output = config.output
	const { file, banner } = output
	const isProd = /(min|prod)\.js$/.test(file)
	return rollup.rollup(config)
		.then(bundle => bundle.generate(output))
		.then(({ output : [{ code }] }) => {
			if (isProd) {
				const minified = (banner ? banner + '\n' : '') + terser.minify(code,{
					toplevel: true,
					output: {
						ascii_only: true
					},
					compress: {
						pure_funcs: ['makeup']
					}
				}).code
				return write(file, minified, true)
			} else {
				return write(file, code)
			}
		})
	return config;

}

function write (dest, code, zip) {
	return new Promise((resolve, reject) => {
		console.log(code)	
	})
}
function logError (e) {
	console.log(e)
}
