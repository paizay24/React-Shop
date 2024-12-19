import React from "react";
import Cart from "./Cart";
import Container from "./Container";
import Breadcrumb from "./Breadcrumb";
import cartProducts from "../data/cartProducts";

const CartSection = () => {
 
  return (
    <Container>
      <Breadcrumb currentPageTitle="My Cart"/>
      <div className=" mt-5 space-y-2">
        {cartProducts.map((product) => (
          <Cart key={product.id} product={product}></Cart>
        ))}
      </div>
    </Container>
  );
};

export default CartSection;
