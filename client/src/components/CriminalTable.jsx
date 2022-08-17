import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Button, Table, Form, Modal } from 'react-bootstrap';

const CriminalTable = (props) => {
  console.log('this is props', props.criminal);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Adhaar</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props?.criminal?.map(({ id, cid, address, adhaar, name, email }) => (
          <tr key={cid}>
            <td>{id}</td>
            <td>{cid}</td>
            <td>{name}</td>
            <td>{address}</td>
            <td>{adhaar}</td>
            <td>{email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CriminalTable;
