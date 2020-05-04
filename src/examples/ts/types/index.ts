import * as Immutable from 'immutable';

export interface IReducerAction {
  type: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TExampleState = Immutable.Map<string, any>;

export const ACTION_TYPE_EXAMPLE_1 = 'ACTION_TYPE_EXAMPLE_1';