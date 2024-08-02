import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

// Mock global alert
global.alert = jest.fn();

describe('<App />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call logOut and display alert when ctrl + h is pressed', () => {
    const logOut = jest.fn();
    const wrapper = mount(<App logOut={logOut} isLoggedIn={true} />);

    // Simulate a keyboard event
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    // Check if logOut was called
    expect(logOut).toHaveBeenCalled();
    // Check if alert was called
    expect(global.alert).toHaveBeenCalledWith('Logging you out');

    wrapper.unmount();
  });
});
