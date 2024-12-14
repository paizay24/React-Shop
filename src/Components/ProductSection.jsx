import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import products from "../data/products";

const ProductSection = () => {
 
  return (
    <Container>
      <div>
        <p className=" mt-3 text-gray-600">Available Product Lists</p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductSection;
