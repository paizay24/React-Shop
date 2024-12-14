import React from "react";
import CategoryBtn from "./CategoryBtn";
import Container from "./Container";

const ProductCategorySection = () => {
  const Categories = [
    "All",
    "Electronics",
    "Jewllery",
    "Men's Clothing",
    "Women's Clothing",
  ];
  return (
    <Container>
      <div className="">
        <p className=" text-gray-500">Product Categories</p>
        <div className=" flex gap-2 mt-2 ">
          {Categories.map((category) => (
            <CategoryBtn
              key={category}
              title={category}
              current={true}
            ></CategoryBtn>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductCategorySection;
