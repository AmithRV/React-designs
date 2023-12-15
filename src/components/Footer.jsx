import React, { useState } from 'react';
import '../styles/footer.css';
import Loader from './loader/Loader';

function Footer({ handleSendMessage, loading }) {
  const [key, setKey] = useState('');

  const sendMessage = () => {
    handleSendMessage(key);
    setKey('');
  };
  return (
    <div className="footer-wrap">
      <div className="message-box-wrap">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="message-box-form"
        >
          <input
            type="text"
            placeholder="Message"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="message-input-box"
            autoFocus
          />
          <div className="message-input-box-img-wrap" onClick={sendMessage}>
            {loading?.isLoading && loading?.type === 'add-message' ? (
              <Loader width="32px" height="32px" color="black" />
            ) : (
              <img
                className="message-input-box-img"
                src="/svg/send.svg"
                alt=""
              />
            )}
          </div>
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
