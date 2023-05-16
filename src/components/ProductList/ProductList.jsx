import React from "react";
import ProductListHeader from "../ProductListHeader/ProductListHeader";
import ProductListItems from "../ProductListItems/ProductListItems";
import "./ProductList.css";
const ProductList = ({ listItems }) => {
  return (
    <section id="product-list">
      <div className="mobile-title">
        <h4>Apple</h4>
      </div>
      <ProductListHeader />
      <ProductListItems listItems={listItems} />
    </section>
  );
};

export default ProductList;
