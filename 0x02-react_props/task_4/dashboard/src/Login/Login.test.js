import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login Component', () => {
  const wrapper = shallow(<Login />);

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 2 input tags', () => {
    expect(wrapper.find('input').length).toBe(2);
  });

  it('renders 2 label tags', () => {
    expect(wrapper.find('label').length).toBe(2);
  });
});