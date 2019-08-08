
declare interface GlobalAPI {
	cid: number;
	config: Config;
	util: Object;
	options: Object;
	
	use: (plugin: Function | Object) => GlobalAPI;
	mixin: (mixin: Object) => GlobalAPI;
	
}