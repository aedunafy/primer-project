declare interface Component {
	//private properties
	_uid: number | string;
	_isVue: true;
	//lifecycle
	_init: Function;
	
	//public properties
	$options: ComponentOptions;
};
