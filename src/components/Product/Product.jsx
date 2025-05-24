import React from 'react';
import { useDispatch } from 'react-redux';
import "./product.css"
import { AddItem } from '../../redux/cartSlice';

const Product = ({ name, image, price, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="product">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="product-img"
      />

      {/* Product Info */}
      <div className="product-details ">
        <p className="product-name">{name}</p>
        <p className="product-price">Rs {price}/-</p>
      </div>

      {/* Button Wrapper */}
     
      <button
  onClick={() => dispatch(AddItem({ name, image, price, id }))}
  className="add-button hover:bg-amber-500 hover:scale-3d transition-all duration-300 ease-in-out">
  Add +
</button>

      
    </div>
  );
};

export default Product;
