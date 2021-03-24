import React from 'react';
import ProductMedia from './ProductMedia';


const MediaCol=(props)=>{
        return(
                <div className="media-column">
                <ul className="list-unstyled">
                {props.products.map(product=>(
                        <ProductMedia
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

export default MediaCol;