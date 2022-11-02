import { Alert } from 'antd';
import React from 'react';
const Alertlist = (props) => {



  const {message, description, type} = props
  return (
    <>
      <Alert
        message={message}
        description={description}
        type={type}
        showIcon
        closable
        onClose={props.setToFalse}
      />

    </>
  );
}

Alertlist.defaultProps = {
  message:'default message',
  description: 'default description',
  type:'info'
}

export default Alertlist;


/*    <Alert
  message="Success Tips"
  description="Detailed description and advice about successful copywriting."
  type="success"
  showIcon
  closable
/>
<Alert
  message="Informational Notes"
  description="Additional description and information about copywriting."
  type="info"
  showIcon
  closable
/>
<Alert
  message="Warning"
  description="This is a warning notice about copywriting."
  type="warning"
  showIcon
  closable
/>
<Alert
  message="Error"
  description="This is an error message about copywriting."
  type="error"
  showIcon
  closable
/> */