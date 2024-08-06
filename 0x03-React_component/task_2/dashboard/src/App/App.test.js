import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import * as global from 'global'; // Import global module

describe("<App />", () => {
  // ... other tests

  it("logOut function is called and alert is displayed", () => {
    const logOut = jest.fn();
    const mockAlert = jest.fn();
    global.alert = mockAlert; // Assign the mock function to global.alert

    const wrapper = mount(<App logOut={logOut} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    wrapper.simulate('keydown', event);

    expect(logOut).toHaveBeenCalledTimes(1);
    expect(mockAlert).toHaveBeenCalledWith('Logging you out');

    jest.restoreAllMocks();
    global.alert = undefined; // Restore global.alert to its original state
  });
});
