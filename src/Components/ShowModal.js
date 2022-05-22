import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ShowModal = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="container">
        <Button variant="primary mt-5" onClick={() => setShow(true)}>
          Show
        </Button>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>YouR ModaL tiTle </Modal.Title>
          </Modal.Header>
          <Modal.Body>YOuR ConTEnt wouLd be HErE</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ShowModal;
