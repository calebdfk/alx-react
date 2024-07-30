import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', html = {}, value = '' }) {
  let li;

  if (value) {
    li = <li data-notification-type={type}>{value}</li>;
  } else {
    li = <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
  }

  return li;
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;
