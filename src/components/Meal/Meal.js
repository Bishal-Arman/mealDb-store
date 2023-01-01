import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Meal.css'
const Meal = (props) => {
    const { handleAddToCart } = props;
    const { img, name, price, seller, rating } = props.meal;
    return (
        <div className='meal'>
            <img src={img} alt="" />
            <div className='meal-info'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p className='rating'><small>Ratings: {rating} star</small></p>
            </div>

            <button className='btn-cart' onClick={() => handleAddToCart(props.meal)}>
                Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Meal;