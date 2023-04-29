import Product from "@/components/sections/homepage/products/Product";
import ProductsRange from "@/components/sections/products-range/ProductsRange";
import { ProductType } from "@/types/products";
import React from "react";

const ProductsRow = ({ products }: { products: any }) => {
  const productsData: ProductType[] = products.data.map((product: any) => ({
    ...product.attributes,
    id: product.id,
  }));
  return (
    <div className="md:mb-8 mb-8">
      <ProductsRange products={productsData} isBlogPage />
    </div>
  );
};

export default ProductsRow;
