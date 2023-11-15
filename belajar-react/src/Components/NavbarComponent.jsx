// NavbarComponent.jsx

import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import PopupNavbar from "./PopupNavbar"; // Import PopupNavbar

const NavbarComponent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

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
                  <>
                    {link.subTopics ? (
                      <NavDropdown
                        title={link.text}
                        id={`nav-dropdown-${link.id}`}
                        show={showPopup}
                        onMouseEnter={handlePopupToggle}
                        onMouseLeave={handlePopupToggle}
                      >
                        <PopupNavbar subTopics={link.subTopics} />
                      </NavDropdown>
                    ) : (
                      <NavLink to={link.path} className="textLink">
                        {link.text}
                      </NavLink>
                    )}
                  </>
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
