import React from "react";
import { useState } from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import { profil } from "../data/index";

const ProfilDaerah = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const handleDocClick = (doc) => {
    setSelectedDoc(doc);
  };

  return (
    <div className="navPadding">
      <h2>Profil Daerah</h2>
      <Row>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              {profil.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  action
                  onClick={() => handleDocClick(item)}
                  active={selectedDoc && selectedDoc.id === item.id}
                >
                  {item.judul}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          {selectedDoc && (
            <Card style={{ width: "18rem", marginTop: "10px" }}>
              <Card.Body>
                <Card.Title>{selectedDoc.judul}</Card.Title>
                {selectedDoc.gambar && (
                  <img src={selectedDoc.gambar} alt={selectedDoc.judul} />
                )}
                <Card.Text>{selectedDoc.isi}</Card.Text>
                <Card.Text>{selectedDoc.isi1}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ProfilDaerah;
