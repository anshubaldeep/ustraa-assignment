import React from 'react';
import { Col, Media, Row } from 'react-bootstrap';
import StarIcon from '@material-ui/icons/Star';

const ProductMedia=(props)=>{
        return(
                <Media as="li">
                <img
                  className="media-image"
                  src={props.image_url}
                  alt={props.alt_text}
                />
                <Media.Body>
                <Row>
                  <Col className='media-title' xs={10}><h5>{props.name}</h5></Col>
                  <Col xs={2}><div  className='media-rating'>{props.product_rating} {props.product_rating?<StarIcon className='star-icon'/>:''}</div></Col>
                  </Row>
                  <div className='media-weight'>{props.weight}</div>
                  <div className='media-final-price'>₹ {props.final_price} <strike>{props.price}</strike></div>
                  <div className='media-price'>{props.is_in_stock}</div>
                </Media.Body>
              </Media>
        );
}

export default ProductMedia;   