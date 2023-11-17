import React from "react";
import { Link } from "react-router-dom";

function PopUpComponent({ data }) {
  return (
    <div className="popUp">
      <h3>PopUpComponent</h3>
      <ul>
        {data.map((item) => (
          <li key={item.no}>
            <Link to={item.path}>
              <button>{item.buttonText}</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopUpComponent;
