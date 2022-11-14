import { SmileOutlined, MehOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
import React from 'react';

const openNotification = (settings) => {
    if (settings.mood === 'happy') {
        notification.open({
            message: settings.message,
            description: settings.description,
            placement: settings.placement,

            icon: (
                <SmileOutlined
                    style={{
                        color: '#108ee9',
                    }}
                />
            )




        });
    } else if (settings.mood === 'sad') {
        notification.open({
            message: settings.message,
            description: settings.description,

            icon: (
                <MehOutlined
                    style={{
                        color: '#108ee9',
                    }}
                />
            )




        });
    }

};
const NotificationPopUp = (props) => {
    let settings = {};
    const { notification_message, notification_description, notification_mood, notification_placement } = props;

    settings['message'] = notification_message;
    settings['description'] = notification_description;
    settings['mood'] = notification_mood;
    settings['placement'] = notification_placement;
    openNotification(settings);

};
export default NotificationPopUp;