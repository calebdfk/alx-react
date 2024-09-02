import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import uiReducer, { initialState } from "../reducers/uiReducer";
import { createStore } from "redux";
import { mapStateToProps } from './App';
import { Provider } from "react-redux";

const store = createStore(uiReducer, initialState);

describe('redux related tests', () => {
  it('testing mapStateToProps', () => {
       const state = {
      uiReducer: {
        isUserLoggedIn: true,
      },
    };

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true });
  });
});
