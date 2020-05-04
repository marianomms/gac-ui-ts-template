import * as React from 'react';
import * as Enzyme from 'enzyme';

import Init from '../examples/ts/components/init';

import routes from './index';

describe('routes', () => {
  const RouteTest: React.FunctionComponent = () => (<>{routes}</>);
  const wrapper: Enzyme.ShallowWrapper = Enzyme.shallow(<RouteTest />);

  const findRoute = (path: string): Enzyme.ShallowWrapper | null => (
    wrapper.find('Route').find({ path })
  );

  it('contains Router', () => {
    expect.assertions(1);
    const router = wrapper.find('Router');
    expect(router.prop('history')).toBeDefined();
  });


  describe('route /', () => {
    it('uses BankAccounts component', () => {
      expect.assertions(2);
      const route = findRoute('/');
      expect(route).toBeDefined();
      expect(route?.prop('component')).toBe(Init);
    });
  });
});