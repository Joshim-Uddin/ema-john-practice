import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, price, ratings, seller} = props.product
    //console.log(props.product)
    const addToCart = props.addToCart;
    return (
        
        <div className="product">
            <div className='product-info'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price : ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} stars</p>
            </div>
            <button className='add-button' onClick={()=>addToCart(props.product)}>
                Add to Cart 
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>               
            
        </div>

    )
};

export default Product;

// {img, name, price, rating, seller}