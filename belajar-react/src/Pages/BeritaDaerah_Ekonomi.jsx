import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { beritaEkonomi } from "../data/index";

const BeritaDaerah_Ekonomi = () => {
  const [selectedBerita, setSelectedBerita] = useState(null);

  useEffect(() => {
    if (beritaEkonomi.length > 0) {
      setSelectedBerita(beritaEkonomi[0]);
    }
  }, []);

  const handleBeritaClick = (berita) => {
    setSelectedBerita(berita);
  };

  return (
    <div className="beritaPage">
      <div className="sidebar">
        <Card className="sidebar-card-berita" style={{ width: "100%" }}>
          <ListGroup variant="flush">
            {beritaEkonomi.map((item) => (
              <ListGroup.Item
                key={item.id}
                action
                onClick={() => handleBeritaClick(item)}
                active={selectedBerita && selectedBerita.id === item.id}
                className="sidebar-item-berita"
              >
                {item.berita}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
      <div className="content-berita">
        {selectedBerita && (
          <Card className="content-card-berita" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title className="content-card-judul">
                {selectedBerita.berita}
              </Card.Title>
              <Card.Text>{selectedBerita.isiberita}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BeritaDaerah_Ekonomi;
