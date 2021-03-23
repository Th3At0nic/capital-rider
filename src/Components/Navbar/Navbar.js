import React from "react";
import { Nav } from "react-bootstrap";

const Navber = () => {
  return (
    <div className="bg-white container">
      <Nav className="container-fluid" variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">
            <h3>Capital Rider</h3>
          </Nav.Link>
        </Nav.Item>
        <Nav className="d-flex">
          <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled">Disabled</Nav.Link>
          </Nav.Item>
        </Nav>
      </Nav>
    </div>
  );
};

export default Navber;
