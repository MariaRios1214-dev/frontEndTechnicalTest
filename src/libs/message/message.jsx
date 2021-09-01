import React from 'react';

import './message.scss';

export const Message = ({ messageType, messageText }) => {
  return <div className={`message ${messageType}`}>{messageText}</div>;
};

export default Message;
