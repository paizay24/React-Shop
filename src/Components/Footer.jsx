import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Container>
      <div className=" mt-auto">
        <p className=" bg-black text-white text-center p-3 ">
          {date} MMS IT.All rights reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
