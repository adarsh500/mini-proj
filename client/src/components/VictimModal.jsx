import React from 'react';
import { useState } from 'react';
import { Button, Form, Modal, FloatingLabel } from 'react-bootstrap';

const VictimModal = (props) => {
  const { id } = props;
  const [vid, setVid] = useState();
  const [name, setName] = useState('');
  const [aadhar, setAadhar] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();

  const handleSubmit = async (e) => {
    console.log('wroking');
    e.preventDefault();
    try {
      const req = await fetch('api/victim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: id,
          vid: vid,
          name: name,
          email: email,
          adhaar: aadhar,
          address: address,
        }),
      });
      const status = (await req).status;
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

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Criminal Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Victim ID"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="ID" value={id} readOnly />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="VID" className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setVid(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Victim Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="firstname lastname"
              onChange={(e) => setName(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Victim Aadhar Number"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="XXXX XXXX XXXX"
              onChange={(e) => setAadhar(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="email@domain.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Address"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
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
            handleSubmit(e);
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VictimModal;