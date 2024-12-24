import React from "react";
import useStoreCategory from "../store/useStoreCategory";

const CategoryBtn = ({ category:{id,title,isActive} }) => {
  const {isActiveFn} = useStoreCategory();
  const isActiveHandler = () => {
    isActiveFn(id);
  };
  return (
    <div className=" mt-3">
      <button
      onClick={isActiveHandler}
        className={` ${
          isActive && "bg-black text-white"
        } border border-black p-3 text-nowrap`}
      >
        {title}
      </button>
    </div>
  );
};

export default CategoryBtn;
