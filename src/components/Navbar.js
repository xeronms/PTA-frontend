import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg='dark' variant='dark' className='p-0'>
                <Container>
                    <Navbar.Brand href='#home'>Klimaton</Navbar.Brand>
                    <Nav className='ml-auto'>
                        <Nav.Link href='#kontakt'>Kontakt</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;
