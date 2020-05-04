import { TExampleState } from '../types';

const TRANSACTIONS_STORE = 'exampleReducer';

/**
 * Selectos method to obtain information from the state
 */
export default {
  getExampleText(state: TExampleState): string {
    return state.get(TRANSACTIONS_STORE).get('exampleText');
  }
};