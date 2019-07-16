import * as React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

describe('Button', () => {
  it('Matches the snapshot', () => {
    const wrapper = shallow(<Button name="MockName" />);
    expect(wrapper).toMatchSnapshot();
  })
});

  