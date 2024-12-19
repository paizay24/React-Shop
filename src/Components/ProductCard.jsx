import React from "react";
import Rating from "./Rating";
import { Link } from "react-router";
import cartProducts from "../data/cartProducts";

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
        {
          cartProducts.find((product) => product.id == id) ? (
            <button className=" border border-black bg-black text-white p-2">Added</button>
          ) : (
            <button className=" border border-black p-2">Add Cart</button>
          )
        }
      </div>
    </Link>
  );
};

export default ProductCard;
