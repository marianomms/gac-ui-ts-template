import React from 'react';
import * as Immutable from 'immutable';
import shallowWithStore from '__spec_helper__/shallow-helper';

import Init from './init';

describe('<Init />', () => {
  const state = {
    exampleReducer: {
      exampleText: 'initial value in the state'
    }
  };
  const store = Immutable.fromJS(state);

  it('renders the component', () => {
    expect.assertions(1);
    const wrapper = shallowWithStore(<Init myProp1='baz' />, store);
    // eslint-disable-next-line jest/prefer-inline-snapshots
    expect(wrapper.find('Init').dive()).toMatchSnapshot();
  });
});