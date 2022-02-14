import React from 'react';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';

import { MenuElements } from '../data/MenuElements';

class Barrita extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {MenuElements.map((item) => {
                  return (
                    <Nav.Link key={uuid()} as={Link} to={item.path}>
                      {item.title}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
}
export default Barrita;
