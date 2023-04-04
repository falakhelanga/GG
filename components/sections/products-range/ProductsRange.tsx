import ContentWrap from "@/components/elements/layout/ContentWrap";
import React from "react";
import Product from "../homepage/products/Product";

const ProductsRange = () => {
  return (
    <div className="grid md:grid-cols-3 md:gap-x-[8rem] md:gap-y-[6rem] gap-10">
      {[...Array(10)].map((_, idx) => {
        return (
          <div key={idx}>
            <Product />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsRange;
