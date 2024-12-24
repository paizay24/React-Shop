import React from "react";
import { useParams } from "react-router";
import products from "../data/products";
import Rating from "../Components/Rating";
import Breadcrumb from "../Components/Breadcrumb";
import Container from "../Components/Container";

const ProductDetail = () => {
  const { productId } = useParams();
  const currentProduct = products.find((product) => product.id == productId);

  return (
    <Container>
      <Breadcrumb currentPageTitle="Product Detail" />
      <div className="flex justify-center items-center my-5">
        <div className="border border-black p-5 w-full sm:w-5/6 md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Image Section */}
            <div className="col-span-1 flex justify-center items-center">
              <img
                src={currentProduct.image}
                className="w-3/4 h-auto"
                alt={currentProduct.title}
              />
            </div>

            {/* Details Section */}
            <div className="col-span-1 space-y-3 flex flex-col justify-center">
              <h1 className="font-bold text-2xl sm:text-3xl">
                {currentProduct.title}
              </h1>
              <p className="bg-gray-200 text-gray-700 inline-block px-5 py-1">
                {currentProduct.category}
              </p>
              <p className="text-sm sm:text-base">
                {currentProduct.description}
              </p>
              <Rating rate={currentProduct.rating.rate} />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-base sm:text-lg">
                    Price: ${currentProduct.price}
                  </p>
                </div>
                <div>
                  <button className="border border-black p-2 hover:bg-black hover:text-white transition duration-200">
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
