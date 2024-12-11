import React from "react";

const Header = () => {
  return (
    <div className=" flex justify-between">
      <h3 className=" text-3xl font-bold">Online Shop</h3>

      <button className=" border border-black p-3 relative">
        My Cart{" "}
        <p className=" absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 inline-block text-xs bg-red-500 text-white px-2 py-1">
          0
        </p>
      </button>
    </div>
  );
};

export default Header;
