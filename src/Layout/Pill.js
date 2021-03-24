import React from "react";
import { Carousel } from "react-bootstrap";

const Pill = (props) => {
  return (
      <>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={props.image}
        alt={props.title}
      />
      <Carousel.Caption>{props.title}</Carousel.Caption>
    </Carousel.Item>
    </>
  );
};

export default Pill;
