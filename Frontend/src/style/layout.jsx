// Layout.js
import React from 'react';
import Footer from '../Components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
