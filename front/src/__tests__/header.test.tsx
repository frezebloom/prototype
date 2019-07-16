import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Header', () => {
  it('Matches the snapshot', () => {
    const wrapper = shallow(<Header title="MockTitle" />);
    expect(wrapper).toMatchSnapshot();
  })
});

