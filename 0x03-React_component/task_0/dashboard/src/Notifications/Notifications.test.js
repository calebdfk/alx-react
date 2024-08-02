import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Notification Item with displayDrawer true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toHaveLength(1);
  });

  it('menuItem with displayDrawer false', () => {
    const wrapper = shallow(<Notifications />);
    const mItem = wrapper.find('div.menuItem');
    expect(mItem).toHaveLength(1);
  });

  it('Notification with displayDrawer false', () => {
    const wrapper = shallow(<Notifications />);
    const dNoti = wrapper.find('div.Notifications');
    expect(dNoti).toHaveLength(0);
  });

  it('menuItem with displayDrawer true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const mItem = wrapper.find('div.menuItem');
    expect(mItem).toHaveLength(1);
  });

  it('displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const dNoti = wrapper.find('div.Notifications');
    expect(dNoti).toHaveLength(1);
  });
});

describe('listNotifications with values', () => {
  let latestNotification;
  let listNotifications;

  beforeEach(() => {
    latestNotification = getLatestNotification();
    listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: latestNotification } },
    ];
  });

  it('renders NotificationItem components correctly', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists()).toBe(true);
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toHaveLength(3);
    expect(nItem.at(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
    expect(nItem.at(1).html()).toEqual(
      '<li data-notification-type="urgent">New resume available</li>'
    );
    expect(nItem.at(2).html()).toEqual(
      `<li data-notification-type="urgent">${latestNotification}</li>`
    );
  });
});

describe('listNotifications without values', () => {
  let listNotifications;

  beforeEach(() => {
    listNotifications = [];
  });

  it('renders empty notification message', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists()).toBe(true);
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toHaveLength(1);
    expect(nItem.html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });

  it('renders default notification when no listNotifications prop', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toHaveLength(1);
    expect(nItem.html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });
});
