import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
