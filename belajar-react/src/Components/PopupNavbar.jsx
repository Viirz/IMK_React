// PopupNavbar.jsx

import React from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const PopupNavbar = ({ subTopics }) => {
  return (
    <Dropdown.Menu style={{ height: "488px", backgroundColor: "var(--header-color)" }}>
      {subTopics.map((subTopic) => (
        <Dropdown.Item key={subTopic.id}>
          <NavLink to={subTopic.path} className="textLink">
            {subTopic.text}
          </NavLink>
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  );
};

export default PopupNavbar;
