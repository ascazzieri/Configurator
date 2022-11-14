import { message } from 'antd';
import React from 'react';
import './Messages.css'
const success = (text) => {
    message.success(`${text}`);
};
const error = (text) => {
    message.error(`${text}`);
};
const warning = (text) => {
    message.warning(`${text}`);
};
const Messages = (props) => {
    const { message_type, message_text } = props;
    if (message_type === 'success') {
        success(message_text);
    } else if (message_type === 'error') {
        error(message_text);
    } else if (message_type === 'warning') {
        warning(message_text);
    }
    /*   <Space>
          <Button onClick={success}>Success</Button>
          <Button onClick={error}>Error</Button>
          <Button onClick={warning}>Warning</Button>
      </Space> */
};
export default Messages;