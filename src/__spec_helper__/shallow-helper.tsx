import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const shallowWithStore = (Component: JSX.Element, store: unknown): ShallowWrapper => {
  const extraProps = { store: mockStore(store) };
  return shallow(
    // eslint-disable-next-line react/jsx-pascal-case
    <Component.type
      // eslint-disable-next-line react/jsx-props-no-spreading
      { ...Component.props } { ...extraProps }
    />
  );
};
export default shallowWithStore;