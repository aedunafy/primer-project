const fs = require('fs')

if(!fs.existsSync('dist')) {
	fs.mkdirSync('dist')
}

let builds = require('./config').getAllBuilds()
console.log(builds)
