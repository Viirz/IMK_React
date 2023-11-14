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
            {navLinks.map((link) => {
              return (
                <div key={link.id}>
                  {link.Image ? (
                    <NavLink to={link.path}>
                      <img
                        src={link.Image}
                        alt={link.text}
                        style={link.imageSize} // Terapkan properti style untuk ukuran gambar
                      />
                    </NavLink>
                  ) : (
                    <NavLink to={link.path}>{link.text}</NavLink>
                  )}
                </div>
              );
            })}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
