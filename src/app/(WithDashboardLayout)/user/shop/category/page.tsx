import ManageCategories from "@/components/modules/shop/category";
import { getAllCategories } from "@/services/Category";
import React from "react";

const ProductCategory = async () => {
  const { data } = await getAllCategories();
  // console.log(data, meta);
  return (
    <div>
      <ManageCategories categories={data}></ManageCategories>
    </div>
  );
};

export default ProductCategory;
