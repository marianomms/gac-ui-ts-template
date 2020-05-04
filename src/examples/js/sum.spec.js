import React from 'react';
import { shallow } from 'enzyme';

import sum from './sum';

describe('testing foo', () => {
  it('hello world', () => {
    expect.assertions(1);
    const wrapper = shallow(<div>hola</div>);
    expect(wrapper).toMatchInlineSnapshot(`
      <div>
        hola
      </div>
    `);
  });

  it('#sum', () => {
    expect.assertions(1);
    expect(sum(1, 2)).toStrictEqual(3);
  });
});