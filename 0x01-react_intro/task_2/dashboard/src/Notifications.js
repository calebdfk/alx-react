import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

const Notifications = () => {
	return (
		<div className='Notifications'>
			<p>Here is the list of notifications</p>
      <button
        style={{ position: 'absolute', top: '7px', right: '7px', border: 'none', background: 'none', padding: '0' }}
				aria-label='Close'
				onClick={console.log('Close button has been clicked')}
			>
				<img style={{ display: 'inline', marginTop: '5px', marginRight: '5px', padding: '0' }} src={closeIcon} alt='Close' width="15px"/>
			</button>
			<p>Here is the list of notifications</p>
      <ul>
				<li data-priority='default'>New course available</li>
				<li data-priority='urgent'>New resume available</li>
				<li	
					data-priority="urgent"
					dangerouslySetInnerHTML={{ __html: getLatestNotification() }} 
				>
				</li>
			</ul>
		</div>
	);
};

export default Notifications;