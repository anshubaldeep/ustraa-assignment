import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCard = (props) => {
  return (
    <Card className="product-card">
      <Card.Img src={props.image_url} alt={props.alt_text} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          ₹ {props.final_price} <strike>{props.price}</strike>
        </Card.Text>

        {props.is_in_stock ? (
          <Button variant="success">Add to Cart</Button>
        ) : (
          <Button variant="secondary">Out of Stock</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
