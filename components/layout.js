import React from 'react';
import Footer from "@/components/footer";
import Header from "@/components/header";

const Layout = ({ children }) => {
  return (
    <div className='content'>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
