import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import { headercss } from "./Header.module.css"
const Header = props => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Link to="/">
        <img
          src={props.headerLogo}
          width="100%"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/#features" className="link-style">
            Features
          </Link>
          <Link to="/#benefits" className="link-style">
            Benefits
          </Link>
          <Link to="/#howitworks" className="link-style">
            How it works
          </Link>
          <Link to="/Signup/" className="link-style">
            Contact us
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
