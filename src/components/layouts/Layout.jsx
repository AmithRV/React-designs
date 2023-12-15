import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../../styles/layout.css';

function Layout({
  handleSendMessage,
  handleFlushServerDB,
  loading = false,
  children,
}) {
  return (
    <div className="layout-wrap">
      <Header handleFlushServerDB={handleFlushServerDB} />
      <div className="body-wrap">{children}</div>
      <Footer handleSendMessage={handleSendMessage} loading={loading} />
    </div>
  );
}

export default Layout;
