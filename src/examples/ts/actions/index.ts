import { ACTION_TYPE_EXAMPLE_1, IReducerAction } from '../types';

const setExampleText = (): IReducerAction => ({ type: ACTION_TYPE_EXAMPLE_1 });

export default setExampleText;