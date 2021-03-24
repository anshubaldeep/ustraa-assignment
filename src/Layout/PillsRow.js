import React from "react";
import { Card} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const PillsRow = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {props.categories.map((cat) => {
        return (
          <div key={cat.category_id}>
            <div className="carousel-img">
              <Card className="bg-dark text-white">
                <Card.Img src={cat.category_image} alt={cat.category_name} />
                <Card.ImgOverlay>
                  <Card.Title>{cat.category_name.toUpperCase()}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default PillsRow;
