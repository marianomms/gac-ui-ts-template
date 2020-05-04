import * as Immutable from 'immutable';
import transactionsReducer from './index';
import { ACTION_TYPE_EXAMPLE_1 } from '../types';

describe('example reducers', () => {
  describe('transactionsReducer', () => {
    describe('when action is ACTION_TYPE_EXAMPLE_1', () => {
      it('sets exampleText in the state', () => {
        expect.assertions(1);
        const state = Immutable.fromJS({
          exampleText: 'foo'
        });
        const result = transactionsReducer(state, { type: ACTION_TYPE_EXAMPLE_1 });
        expect(result.get('exampleText')).toMatch(/^Text Changed: /);
      });
    });

    describe('when action is something else', () => {
      it('sets exampleText in the state', () => {
        expect.assertions(1);
        const result = transactionsReducer(undefined, { type: 'foo' });
        expect(result.get('exampleText')).toStrictEqual('initial value in the state');
      });
    });
  });
});