

import { NotificationStatus } from '@/types';
import { notification } from 'antd';
import React from 'react';

function NotificationMessage({ header, message }: any) {
	return (
		<div className={`flex flex-col`}>
			<h3 className='text-sm font-medium'>{header}</h3>
			{message && <p className='text-xs'>{message}</p>}
		</div>
	);
}

const queueNotification = ({ header, message, duration = 5, status }: {status: NotificationStatus, message: string, header: string, duration?: number}) => {
	const args = {
		message: header,
		description: message,
		duration: duration
	};

	// queues notifcation
	notification[status](args);
};

export default queueNotification;