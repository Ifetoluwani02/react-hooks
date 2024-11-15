import React from 'react';
import { Card } from 'react-bootstrap';

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={posterURL} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p><strong>Rating:</strong> {rating}</p>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
