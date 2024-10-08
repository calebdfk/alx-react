import React, { Component } from 'react';
import '../App/App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from "../utils/utils";

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];
const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];
class App extends Component {
  render() {
    const listNotifications = this.listNotifications;
    const { isLoggedIn } = this.props;
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className='App'>
          <Header />
          <hr />
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <hr />
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;