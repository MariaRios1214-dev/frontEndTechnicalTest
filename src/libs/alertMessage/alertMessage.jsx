import React from 'react';

import './alertMessage.scss';

export const AlertMessage = ({ messageType, messageText }) => {
  return (
    <div className={`alert ${messageType}`}>
      <p>{messageText}</p>
    </div>
  );
};

export default AlertMessage;
