import React from "react";

const Cart = ({ product }) => {
  return (
    <div className=" grid grid-cols-6 border border-black p-2">
      <div className=" col-span-1">
        <img src={product.image} className=" h-10" alt="" />
      </div>
      <div className=" col-span-3">
        <p>{product.title}</p>
        <p>Price : ${product.price}</p>
      </div>
      <div className=" col-span-1 ">
        <p className=" text-sm">Quantity</p>
        <div className=" flex gap-2 items-center mt-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4  bg-black text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </div>
          <div>0</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 bg-black text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className=" col-span-1">
           <div className=" text-end mt-3">
           <p className=" font-bold ">${product.price}</p>
           </div>
      </div>
    </div>
  );
};

export default Cart;
