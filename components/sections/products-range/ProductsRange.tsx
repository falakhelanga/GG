import ContentWrap from "@/components/elements/layout/ContentWrap";
import React from "react";
import Product from "../homepage/products/Product";
import { ApiProductsRangeProductsRange } from "@/schemas";

const ProductsRange = ({ products }: { products: any[] }) => {
  return (
    <div className="grid md:grid-cols-3 md:gap-x-[8rem] md:gap-y-[7rem] gap-y-24">
      {products.map((product, idx) => {
        return (
          <div key={idx} className="">
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsRange;
