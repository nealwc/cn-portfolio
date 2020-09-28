import React from "react";
import { Navbar } from "react-bootstrap"

function Footer() {
    return (
        <>
            <Navbar fixed="bottom" bg="light" className="justify-content-md-center">
                <Navbar.Brand href="https://github.com/nealwc">
                    <i className="fa fa-github" aria-hidden="true"></i>
                </Navbar.Brand>
                <Navbar.Brand href="https://www.linkedin.com/in/nealwc/">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Footer