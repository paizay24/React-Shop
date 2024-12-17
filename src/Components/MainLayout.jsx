import React from "react";

import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Header />
     
      <Outlet />
      
      <Footer />
    </div>
  );
};

export default MainLayout;
