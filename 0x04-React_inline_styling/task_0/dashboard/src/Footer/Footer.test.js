import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('renders footer with correct class', () => {
  expect(wrapper.find('footer.footer').exists()).toBe(true);
});

it('renders the copyright text', () => {
  expect(wrapper.text()).toContain('Copyright');
});
