import React from "react";
import CategoryBtn from "./CategoryBtn";
import Container from "./Container";
import useStoreCategory from "../store/useStoreCategory";

const ProductCategorySection = () => {
 const {categories} = useStoreCategory();
  return (
    <Container>
      <div className="">
        <p className=" text-gray-500">Product Categories</p>
        <div className=" flex gap-2 mt-2 ">
          {categories.map((category) => (
            <CategoryBtn
              key={category.id}
              category={category}
            ></CategoryBtn>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductCategorySection;
