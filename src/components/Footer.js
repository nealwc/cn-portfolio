import React from "react";
import Navbar from "react-bootstrap/Navbar"

function Footer() {
    return (
        <Navbar fixed="bottom" bg="dark">
            <Navbar.Brand href="https://github.com/nealwc">
                <img
                    src="../../public/GitHub-Mark-64px.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="GitHub logo"
                />
            </Navbar.Brand>
            <Navbar.Brand href="https://www.linkedin.com/in/nealwc/">
                <img
                    src="../../public/LI-In-Bug.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="LinkedIn logo"
                />
            </Navbar.Brand>
        </Navbar>
    )
}

export default Footer