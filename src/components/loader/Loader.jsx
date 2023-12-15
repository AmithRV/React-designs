import React from 'react';
import '../../styles/loader.css';

function Loader({ width = '25px', height = '25px', color = 'black' }) {
  return (
    <span
      className="loader"
      style={{
        width: width,
        height: height,
        borderColor: color,
        borderBottomColor: 'transparent',
      }}
    ></span>
  );
}

export default Loader;
