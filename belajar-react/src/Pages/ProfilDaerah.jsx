import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { profil } from '../data/index';

const ProfilDaerah = () => {
  return (
    <div>
      <h2>Profil Daerah</h2>
      <ListGroup>
        {profil.map((item) => (
          <ListGroup.Item key={item.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{item.judul}</Card.Title>
                <Card.Text>{item.isi}</Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ProfilDaerah;
