import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from './images/logo.svg';

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="light" variant="light" className="p-0">
        <Container style={{ maxWidth: '90%' }}>
          <Navbar.Brand href="/">
            <div>
              <Logo />
            </div>
          </Navbar.Brand>
          <Nav className="mx-auto" style={{ fontSize: '1.4rem' }}>
            <Nav.Item className="px-1">
              <Nav.Link href="/">Ruch</Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-1">
              <Nav.Link href="/#/analiza">Analiza</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/kontakt">Kontakt</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
