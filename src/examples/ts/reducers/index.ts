import * as Immutable from 'immutable';
import { TExampleState, IReducerAction, ACTION_TYPE_EXAMPLE_1 } from '../types';

const initialState: TExampleState = Immutable.fromJS({
  exampleText: 'initial value in the state'
});


export default function transactionsReducer(state = initialState, action: IReducerAction): TExampleState {
  switch (action.type) {
    case ACTION_TYPE_EXAMPLE_1:
      return state.set('exampleText', `Text Changed: ${new Date()}`);
    default:
      return state;
  }
}