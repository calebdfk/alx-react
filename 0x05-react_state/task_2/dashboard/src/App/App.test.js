/**
 * @jest-environment jsdom
 */
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { shallow, mount } from 'enzyme';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('rendering components', () => {
	it('renders App component without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	});

	it('contains Notifications component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Notifications)).toHaveLength(1);
	});

	it('contains Header component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.contains(<Header />)).toBe(true);
	});

	it('contains Login component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Login)).toHaveLength(1);
	});

	it('contains Footer component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.contains(<Footer />)).toBe(true);
	});

	it('checks CourseList is not rendered initially', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(CourseList)).toHaveLength(0);
	});
});

describe('when isLoggedIn is true', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
		wrapper.setState({
			user: {
				email: 'foo',
				password: 'bar',
				isLoggedIn: true,
			},
		});
	});

	it('checks Login is not rendered', () => {
		expect(wrapper.find(Login)).toHaveLength(0);
	});

	it('checks CourseList is rendered', () => {
		expect(wrapper.find(CourseList)).toHaveLength(1);
	});

	it('verifies that logIn updates state correctly', () => {
		wrapper.instance().logIn('foo', 'bar');
		wrapper.update();

		expect(wrapper.state().user.email).toBe('foo');
		expect(wrapper.state().user.password).toBe('bar');
		expect(wrapper.state().user.isLoggedIn).toBe(true);
	});

	it('verifies that the logOut function updates the state correctly', () => {
		wrapper.instance().logOut();
		wrapper.update();

		expect(wrapper.state().user).toEqual({
			email: '',
			password: '',
			isLoggedIn: false,
		});
	});
});

describe('when Ctrl+h is pressed', () => {
	beforeEach(() => {
		// Mock window.alert
		window.alert = jest.fn();
	});

	afterEach(() => {
		// Clear the mock after each test
		window.alert.mockClear();
	});

	it('checks alert function is called', () => {
		const wrapper = mount(<App />);
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		expect(window.alert).toHaveBeenCalled();
		wrapper.unmount();
	});

	it('checks alert string is "Logging you out"', () => {
		const wrapper = mount(<App />);
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		expect(window.alert).toHaveBeenCalledWith('Logging you out');
		wrapper.unmount();
	});
});

describe('testing state of App.js', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('displayDrawer initial value should be set to false', () => {
		expect(wrapper.state().displayDrawer).toBe(false);
	});

	it('should set displayDrawer to true after calling handleDisplayDrawer', () => {
		wrapper.instance().handleDisplayDrawer();
		wrapper.update();

		expect(wrapper.state().displayDrawer).toBe(true);
	});

	it('should set displayDrawer to false after calling handleHideDrawer', () => {
		wrapper.instance().handleHideDrawer();
		wrapper.update();

		expect(wrapper.state().displayDrawer).toBe(false);
	});
});
