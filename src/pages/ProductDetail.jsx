import React from "react";
import { useParams } from "react-router";
import products from "../data/products";

const ProductDetail = () => {
  const { productId } = useParams();
  const currentProduct = products.find((product) => product.id == productId);
  return <div>{currentProduct.title}</div>;
};

export default ProductDetail;
