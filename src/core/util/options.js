/* @flow */

import { 
  camelize
} from 'shared/util'


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
	console.log(child)
	const options = {}
	return options
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options: Object, vm: ?Component) {
	const props = options.props
	 if (!props) return
	 let i, val, name
	 if (Array.isArray(props)) {
		i = props.length
		while (i--) {
			val = props[i]
			if(typeof val === 'string') {
				
			}
		}
	 } else if (isPlainObject(props)) {
		 
	 }
	 const res = {}
	 options.props = res
}

function checkComponents (options : Object) {
	
}