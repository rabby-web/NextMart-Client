import { IProduct } from "@/types";
import React from "react";

const ProductDetails = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <p className="rounded-full px-4 py-1 bg-gray-100">
        Brand: {product?.brand?.name}
      </p>
    </div>
  );
};

export default ProductDetails;
