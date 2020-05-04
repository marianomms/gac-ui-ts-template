import * as Immutable from 'immutable';
import Selector from './index';

describe('selectors', () => {
  describe('getExampleText', () => {
    it('returns exampleText from store', () => {
      expect.assertions(1);
      const state = Immutable.fromJS({
        exampleReducer: {
          exampleText: 'foo'
        }
      });
      expect(Selector.getExampleText(state)).toStrictEqual('foo');
    });
  });
});