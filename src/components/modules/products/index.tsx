import ProductCard from "@/components/ui/core/ProductCard";
import { IProduct } from "@/types";
import React from "react";

const AllProducts = ({ products }: { products: IProduct[] }) => {
  console.log(products);
  return (
    <div className="flex ">
      <div>sidebar</div>
      <div>
        <div className="grid grid-cols-3 gap-8">
          {products?.map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
