import React, { useLayoutEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import ProductCard from "./ProductCard";
import ProductMedia from "./ProductMedia";

const MediaCol = (props) => {
  function useWindowSize() {
    const [size, setSize] = useState([0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  const [width] = useWindowSize();
  let Products=props.viewMore?props.products:props.products.slice(0, 3);
  let MediaColScreen = (
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
      className="media-column product-carousel"
    >
      {props.products.map((product) => {
        return (
          <div key={product.id}>
            <div className="carousel-img">
              <ProductCard
                name={product.name}
                alt={product.alt_text}
                weight={`${product.weight} ${product.weight_unit}`}
                price={product.price}
                final_price={product.final_price}
                product_rating={product.rating}
                is_in_stock={product.is_in_stock}
                image_url={product.image_urls.x520}
              />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
  if (width < 768) {
    MediaColScreen = (
      <div className="media-column">
        <ul className="list-unstyled">
          {Products.map((product) => (
            <ProductMedia
              key={product.id}
              name={product.name}
              alt={product.alt_text}
              weight={`${product.weight} ${product.weight_unit}`}
              price={product.price}
              final_price={product.final_price}
              product_rating={product.rating}
              is_in_stock={product.is_in_stock}
              image_url={product.image_urls.x520}
            />
          ))}
        </ul>
      </div>
    );
  }

  return <div>{MediaColScreen}</div>;
};

export default MediaCol;
