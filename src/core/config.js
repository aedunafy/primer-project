/* @flow */
export type Config = {
	 //user options
	 optionMergeStrategies: { [key: string]: Function };
	 silent: boolean;
};

export default ({
	// $flow-disable-line
	optionMergeStrategies: Object.create(null),
	silent: false
}: Config)
