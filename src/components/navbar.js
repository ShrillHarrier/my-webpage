import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './style.css';

function Topbar() {
	return(
	  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Navbar.Brand href="#homepage">Professional</Navbar.Brand>
  {/*<Navbar.Brand href="#homepage">Personal</Navbar.Brand>*/}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    {/*<Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>*/}
    <Nav className="ml-auto">
      <Nav.Link href="#aboutpage">About</Nav.Link>
      <Nav.Link href="#projectpage">Projects</Nav.Link>
      <Nav.Link href="#contactpage">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
	)
}

export default Topbar;