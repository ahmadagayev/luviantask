import React from "react";
import "./ListItemModal.css";
import { Button, Carousel, Modal } from "react-bootstrap";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import ProductView from "../ProductView/ProductView";

const ListItemModal = ({ handleClose, show, data }) => {
  //   console.log(data);
  return (
    <Modal show={show} onHide={handleClose} fullscreen={true}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <main>
          <ProductView data={data} />
          <ProductCarousel />

        </main>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default ListItemModal;
