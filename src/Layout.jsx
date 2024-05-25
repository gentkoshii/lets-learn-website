// Layout.js
import React from 'react';
import Navbar from './Components/navbar';
import Footer from './Components/footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
