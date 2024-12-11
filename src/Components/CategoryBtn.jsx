import React from "react";

const CategoryBtn = ({ title, current }) => {
  return (
    <div className=" mt-3">
      <button
        className={` ${
          current && "bg-black text-white"
        } border border-black p-3`}
      >
        {title}
      </button>
    </div>
  );
};

export default CategoryBtn;
