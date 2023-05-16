import React, { useEffect, useState } from "react";
import "./ProductListItems.css";
import ListItem from "../ListItem/ListItem";
const ProductListItems = ({ listItems }) => {
  return (
    <div className="product-list-items active" id="small-view">
      {listItems?.map((item, index) => (
        <ListItem data={item} key={index} product={true} />
      ))}
    </div>
  );
};

export default ProductListItems;
