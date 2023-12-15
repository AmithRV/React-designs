import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../../styles/layout.css';

function Layout({ handleSendMessage, children }) {
  return (
    <div className="layout-wrap">
      <Header />
      <div className="body-wrap">{children}</div>
      <Footer handleSendMessage={handleSendMessage} />
    </div>
  );
}

export default Layout;
