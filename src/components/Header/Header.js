import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
const Header = props => {
  return (
    <Navbar bg="light" expand="lg">
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
          <Link to="/Dashboard/">Dashboard</Link>&nbsp;&nbsp;
          <Link to="/Signup/">Signup</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
