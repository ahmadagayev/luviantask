import React from "react";
import SearchMenu from "../SearchMenu/SearchMenu";
import ProductList from "../ProductList/ProductList";
import { Col } from "react-bootstrap";

const ProductSearch = ({
  listItems,
  handleCheckboxChange,
  handleMaxValue,
  handleMinValue,
  handleApply,
}) => {
  return (
    <div className="row">
      <Col xl={3}>
        <SearchMenu
          handleCheckboxChange={handleCheckboxChange}
          handleMaxValue={handleMaxValue}
          handleMinValue={handleMinValue}
          handleApply={handleApply}
        />
      </Col>
      <Col xl={9}>
        <ProductList listItems={listItems} />
      </Col>
    </div>
  );
};

export default ProductSearch;
