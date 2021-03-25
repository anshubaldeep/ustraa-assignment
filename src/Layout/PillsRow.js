import React from "react";
import { Card} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";


const PillsRow = (props) => { 
  return (
    <div className='carousel'>
    <div className='carousel-slider'>
    <div className='carousel-child'></div>
      {props.categories.map((cat) => {
        return (
          <div key={cat.category_id} className='carousel-child'>
            <div className="carousel-img">
              <Card className="bg-dark text-white category-card" onClick={()=>props.selectCategory(cat.category_id)}>
                <Card.Img src={cat.category_image} alt={cat.category_name} />
                <Card.ImgOverlay>
                  <Card.Title>{cat.category_name.toUpperCase()}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </div>
        );
      })}
      </div>
      </div>
  );
};

export default PillsRow;
