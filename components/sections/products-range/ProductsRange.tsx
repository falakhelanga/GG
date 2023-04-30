import ContentWrap from "@/components/elements/ui/ContentWrap";
import React from "react";
import Product from "../homepage/products/Product";
import { ApiProductsRangeProductsRange } from "@/schemas";
import ProductBlock from "@/components/elements/ui/ProductBlock";

const ProductsRange = ({
  products,
  isBlogPage,
}: {
  products: any[];
  isBlogPage?: boolean;
}) => {
  return (
    <>
      {products.length === 1 && (
        <ProductBlock
          product={{
            data: {
              attributes: products[0],
            },
          }}
        />
      )}
      {products.length !== 1 && (
        <div className="grid  md:grid-cols-3 md:gap-x-[8rem] md:gap-y-[7rem] gap-y-24 ">
          {products.map((product, idx) => {
            return (
              <div key={idx} className="">
                <Product product={product} isBlogPage={isBlogPage} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ProductsRange;
