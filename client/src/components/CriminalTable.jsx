import React, { useState, useEffect } from 'react';
import { Button, Table, Form, Modal } from 'react-bootstrap';

const CriminalTable = () => {
  const [criminal, setCriminal] = useState([]);

  useEffect(() => {
    fetch('/api/criminal')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCriminal(data);
      });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>aadhar</th>
          <th>email</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        {criminal.map((crim, index) => (
          <tr key={index}>
            <td>{crim.id}</td>
            <td>{crim.name}</td>
            <td>{crim.adhaar}</td>
            <td>{crim.email}</td>
            <td>{crim.address}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CriminalTable;
