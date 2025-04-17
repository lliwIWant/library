import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-hei">
            <Container>
                <Navbar.Brand href="/">코딩알려주는 누나 도서관</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>

                <Nav>
                    <Nav.Link href="/" className='green'>메인</Nav.Link>
                    <Nav.Link href="/myBook" className='green'>나의 책</Nav.Link>
                    <Nav.Link eventKey={2} href="/login" className='green'>
                        로그인
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header