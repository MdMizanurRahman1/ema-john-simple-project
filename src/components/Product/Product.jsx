import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='price'>Price: ${price}</p>
                <p className='rate1'>Manufacturer: {seller}</p>
                <p className='rate2'>Rating: {ratings} start</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;