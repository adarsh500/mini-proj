import React from 'react';
import { useState } from 'react';
import { Button, Form, Modal, FloatingLabel } from 'react-bootstrap';

const FirModal = (props) => {
  const { edit } = props;
  const [id, setId] = useState();
  const [description, setDescription] = useState();
  const [type, setType] = useState();

  const handleSubmit = async (e) => {
    console.log('wroking');
    e.preventDefault();
    try {
      const req = await fetch('api/fir', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: id,
          description: description,
          type: type,
        }),
      });
      const status = req.status;
      console.log(status);
      if (status === 200) {
        console.log('req success');
      } else {
        console.log('req uncess');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const req = await fetch(`api/fir/${props.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: props.id,
          description: description,
          type: type,
        }),
      });
      const status = req.status;
      console.log(status);
      if (status === 200) {
        console.log('edit success');
      } else {
        console.log('edit unsuccess');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add FIR Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="FIR ID"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="ID"
              onChange={(e) => setId(e.target.value)}
              value={edit ? props.id : id}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="FIR description"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="FIR type"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="XXXX XXXX XXXX"
              onChange={(e) => setType(e.target.value)}
            />
          </FloatingLabel>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            props.onHide();
            edit ? handleEdit(e) : handleSubmit(e);
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FirModal;
