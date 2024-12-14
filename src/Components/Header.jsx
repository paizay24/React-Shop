import React from "react";
import Container from "./Container";
import { Link } from "react-router";

const Header = () => {
  return (
    <Container>
      <div className=" flex justify-between">
        <Link to={"/"} className=" text-3xl font-bold">Online Shop</Link>

        <Link to={"/addCart"} className=" border border-black p-3 relative">
          My Cart{" "}
          <p className=" absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 inline-block text-xs bg-red-500 text-white px-2 py-1">
            0
          </p>
        </Link>
      </div>
    </Container>
  );
};

export default Header;
