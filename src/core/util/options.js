/* @flow */
import config from '../config'

import { 
  camelize,
  isPlainObject
} from 'shared/util'


/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
const strats = config.optionMergeStrategies

/**
 * Default strategy.
 */
const defaultStrat = function (parentVal: any, childVal: any): any {
  return childVal === undefined
    ? parentVal
    : childVal
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
export function mergeOptions (
  parent: Object,
  child: Object,
  vm?: Component
): Object {
	if (process.env.NODE_ENV !== 'production') {
		checkComponents(child)
	}
	
	if (typeof child === 'function') {
		child = child.options
	}
	
	normalizeProps(child, vm)
	
	const options = {}

	let key

	
	for (key in child) {
		mergeField(key)
	}
	
	for (key in parent) {
		//console.log(key);
		mergeField(key)
	}
	
	function mergeField (key) {
		const strat = strats[key] || defaultStrat
		options[key] = strat(parent[key], child[key], vm, key)
	}

	//console.log(options)
	return options
}



/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options: Object, vm: ?Component) {
	const props = options.props
	 if (!props) return
	 const res = {}
	 let i, val, name
	 if (Array.isArray(props)) {
		i = props.length
		while (i--) {
			val = props[i]
			if(typeof val === 'string') {
				name = camelize(val)
				res[name] = {type : null}
			}
		}
	 } else if (isPlainObject(props)) {
		 for (const key in props) {
			 val = props[key]
			 name = camelize(key)
			 res[name] = isPlainObject(val) ? val : {type : val}
		 }
	 }
	 
	 options.props = res
}

function checkComponents (options : Object) {
	
}