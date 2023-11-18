import React from "react";
import { dokumen } from "../data/index";
import { Link } from "react-router-dom";

function Dokumen() {
  return (
    <div className="navPadding">
      <h2>Dokumen</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {dokumen.map((item) => (
          <div
            key={item.id}
            style={{
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to={item.path} target="_blank" >
              <button>
                <img
                  src={item.gambar}
                  alt={item.namaDokumen}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "10px",
                  }}
                />
                <p>{item.namaDokumen}</p>
              </button>
              \
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dokumen;
