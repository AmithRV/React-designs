import React from 'react';
import '../styles/header.css';

function Header({ handleFlushServerDB }) {
  return (
    <div className="header-wrap">
      <div className="trash-wrap">
        <img
          className="trash-wrap-img"
          src="/svg/trash.svg"
          alt=""
          onClick={handleFlushServerDB}
        />
      </div>
    </div>
  );
}

export default Header;
