import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  console.log(date);

  return (
    <div className=" mt-auto">
      <p className=" bg-black text-white text-center p-3 ">{date} MMS IT.All rights reserved.</p>
    </div>
  );
};

export default Footer;
