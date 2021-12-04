import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg='dark' variant='dark' className='p-0'>
                <Container style={{ maxWidth: '90%' }}>
                    <Navbar.Brand href='#/'>Logo i nazwa</Navbar.Brand>
                    <Nav className='mx-auto' style={{ fontSize: '1.4rem' }}>
                        <Nav.Item className='px-1'>
                            <Nav.Link href='#/map'>Ruch</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='px-1'>
                            <Nav.Link href='#/map'>Analiza</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className='ml-auto'>
                        <Nav.Link href='#/contact'>Kontakt</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;
