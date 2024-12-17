import React from "react";
import { useParams } from "react-router";
import products from "../data/products";
import Rating from "../Components/Rating";

const ProductDetail = () => {
  const { productId } = useParams();
  const currentProduct = products.find((product) => product.id == productId);

  return (
    <div className="flex justify-center items-center my-5">
      <div className="border border-black p-5 w-3/4">
        <div className="grid grid-cols-2">
          <div className="col-span-1 flex justify-center items-center">
            <img
              src={currentProduct.image}
              className="w-3/4 h-1/2"
              alt={currentProduct.title}
            />
          </div>
          <div className="col-span-1 space-y-3 flex flex-col justify-center">
            <h1 className="font-bold text-3xl">{currentProduct.title}</h1>
            <p className=" bg-gray-200 text-gray-700 inline-block px-5 py-1">
              {currentProduct.category}
            </p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between items-center">
              <div>
                <p>Price : ${currentProduct.price}</p>
              </div>
              <div>
                <button className="border border-black p-2">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
