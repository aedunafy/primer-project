/* @flow */
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
	const options = {}
	return options
}