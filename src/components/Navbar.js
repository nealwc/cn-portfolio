import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function AppNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Carter Neal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#link">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNavbar