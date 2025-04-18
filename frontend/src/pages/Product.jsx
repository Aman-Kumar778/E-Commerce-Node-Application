import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../components/Breadcrums/Breadcrum";
import { ProductDisplay } from "../components/ProductDisplay/ProductDisplay";
import { Descriptionbox } from "../components/Descriptionbox/Descriptionbox";
import { RelatedProducts } from "../components/RelatedProduct/RelatedProducts";

export const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  return (
    <div className="product">
      <div>
        <Breadcrum  product={product}/>
        <ProductDisplay product={product} />
        <Descriptionbox />
        <RelatedProducts />
      </div>
    </div>
  );
};
