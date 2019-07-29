const path = require('path')
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
	
	function report() {
		console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code))
	}

	return new Promise((resolve, reject) => {
		fs.writeFile(dest, code, err=> {
			if (err) return reject(err)
			report()
		})	
	})
}
function logError (e) {
	console.log(e)
}

function getSize (code) {
	return (code.length / 1024).toFixed(2) + 'kb'
}

function blue (str) {
	return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
