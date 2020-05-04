
import setExampleText from './index';
import { ACTION_TYPE_EXAMPLE_1 } from '../types';

describe('actions', () => {
  describe('setExampleText', () => {
    it('dispatchts ACTION_TYPE_EXAMPLE_1', () => {
      expect.assertions(1);
      expect(setExampleText()).toStrictEqual({ type: ACTION_TYPE_EXAMPLE_1 });
    });
  });
});