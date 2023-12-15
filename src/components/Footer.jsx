import React, { useState } from 'react';
import '../styles/footer.css';

function Footer({ handleSendMessage }) {
  const [key, setKey] = useState('');

  const sendMessage = () => {
    handleSendMessage(key);
    setKey('');
  };
  return (
    <div className="footer-wrap">
      <div className="message-box-wrap">
        <form
          style={{ width: '100%' }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="message-input-box"
          />
          <img
            className="message-input-box-img"
            src="/svg/check.svg"
            alt=""
            onClick={sendMessage}
          />
          <button
            style={{ display: 'none' }}
            onClick={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default Footer;
