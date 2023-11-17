import React from "react";
import { Link } from "react-router-dom";

function PopUpComponent({ data }) {
  return (
    <div className="popUp">
      {data.map((item) => (
        <div key={item.no} className="popUpItem">
          <Link to={item.path}>
            <button className="popUpButton">{item.buttonText}</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PopUpComponent;
