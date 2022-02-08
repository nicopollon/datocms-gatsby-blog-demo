import React from "react";
import Footer from "./footer";
import Intro from "./intro";

const Layout = ({ children }) => {
  return (
    <main>
      <Intro />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
