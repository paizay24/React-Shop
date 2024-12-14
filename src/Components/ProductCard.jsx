import React from "react";
import Rating from "./Rating";
import { Link } from "react-router";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <Link to={`/productDetail/${id}`} className=" border border-black p-2 my-2 space-y-2">
      <img src={image} className=" h-40" alt="" />
      <Rating rate={rate} />
      <h1 className=" font-bold line-clamp-1">{title}</h1>
      <div className=" flex justify-between items-end w-full">
        <p>{price}</p>
        <button className="  border border-black p-1 text-sm ">Add Cart</button>
      </div>
    </Link>
  );
};

export default ProductCard;
