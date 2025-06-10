import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import custom styles

const Navigation= () => {
  const location = useLocation(); // Get current route to highlight active page

  return (
    <Navbar expand="sm" className="custom-navbar shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/pictures/logo1.png"
            height="60"
            width="140"
            className="d-inline-block align-top"
            alt="Gross Appliance and TV"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={location.pathname === "/about" ? "active-link" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/inventory" 
              className={location.pathname === "/inventory" ? "active-link" : ""}
            >
              Inventory
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={location.pathname === "/contact" ? "active-link" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  
    </Navbar>
  );
};

export default Navigation;
