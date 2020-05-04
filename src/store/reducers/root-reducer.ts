import { combineReducers } from 'redux-immutable';

import exampleReducer from '../../examples/ts/reducers';

const rootReducer = combineReducers({
  exampleReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;