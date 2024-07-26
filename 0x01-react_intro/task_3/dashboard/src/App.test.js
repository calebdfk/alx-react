import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App Component Tests', () => {
  it('Renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toHaveLength(1);
  });
	it('renders a div with the class App-header', () => {
		const app = shallow(<App />);

		expect(app.find('.App-header')).toHaveLength(1);
	});
	it('renders a div with the class App-body', () => {
		const app = shallow(<App />);

		expect(app.find('.App-body')).toHaveLength(1);
	});
	it('renders a div with the class App-footer', () => {
		const app = shallow(<App />);

		expect(app.find('.App-footer')).toHaveLength(1);
	});
});