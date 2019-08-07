import type { Config } from '../src/core/config'

declare interface Component {
	
	//constructor information
	 static cid: number;
	 static options: Object;
	
	//private properties
	_uid: number | string;
	_isVue: true;
	//lifecycle
	_init: Function;
	
	//public properties
	$options: ComponentOptions;
};
