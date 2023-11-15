import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar className="navBar">
        <Container fluid>
          <Nav className="mx-auto">
            {navLinks.map((link) => (
              <div key={link.id} className="navLinkItem">
                {link.Image ? (
                  <NavLink to={link.path}>
                    <div className="logoContainer">
                      <img
                        src={link.Image}
                        alt={link.text}
                        style={link.imageSize}
                        className="logoImage"
                      />
                    </div>
                  </NavLink>
                ) : (
                  <NavLink to={link.path} className="textLink">
                    {link.text}
                  </NavLink>
                )}
              </div>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
