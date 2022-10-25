import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Infocanva(props) {
  const { show, handleClose } = props


  return (
    <>

      <Offcanvas show={show} onHide={handleClose} scroll='true' backdrop="true">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Index</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>How to configure Thingworx</li>
            <li>How to configure Drivers</li>
            <li>How to create a channel</li>
            <li>How to modify channels</li>
            <li>How to browse tags</li>
            <li>How to see logs</li>
        
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Infocanva
