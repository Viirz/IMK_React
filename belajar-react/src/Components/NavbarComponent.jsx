// NavbarComponent.jsx

import { useState } from "react";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { navLinks, popUpNav } from "../data/index";
import { NavLink } from "react-router-dom";
import PopUpComponent from "./PopUpComponent";

const NavbarComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState([]);

  const handlePopupToggle = (linkId) => {
    const selectedPopupData = popUpNav.filter((popup) => popup.id === linkId);
    setPopupData(selectedPopupData);
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
                      >
                        {/* Jangan lupa sesuaikan dengan komponen PopupNavbar */}
                        <PopUpComponent data={popupData} />
                      </NavDropdown>
                    ) : (
                      <Button
                        onClick={() => handlePopupToggle(link.id)}
                        className="textLink"
                      >
                        {link.text}
                      </Button>
                    )}
                  </>
                )}
              </div>
            ))}
          </Nav>
          <div>{showPopup && <PopUpComponent data={popupData} />}</div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
