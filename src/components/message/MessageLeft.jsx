import React from 'react';
import '../../styles/message-left.css';

function MessageLeft({ message }) {
  return (
    <div className="message-left-wrap">
      <div className="message-left">{message}</div>
    </div>
  );
}

export default MessageLeft;
