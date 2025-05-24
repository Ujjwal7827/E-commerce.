import React, { useState } from 'react';
import './shop.css';
import { category } from '../../category';
import Product from '../../components/product/product';
import { dummydata } from '../../dummydata';
import Front from '../../components/Front';


const Shop = () => {
  const [cate, setCate] = useState(dummydata);

  // Filter products based on the category
  const filterProduct = (category) => {
    if (category === 'All') {
      setCate(dummydata);  // Reset to all products
    } else {
      const updateData = dummydata.filter((items) => items.category === category);
      setCate(updateData);
    }
  };

  return (
    <div className="shop">
      {/* Category Section with Buttons to Filter */}
      <div className="category-section">
        <button
          onClick={() => filterProduct('All')}
          className="Add category-card">
          <span className="">
            All Products
          </span>
        </button>
        {category.map((item) => (
          <div
            key={item.id}
            onClick={() => filterProduct(item.name)}
            className="category-card " >
            <img
              src={item.image}
              alt={item.name}
              className="cat-img"/>
            <span className="">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Front Section (Image Slider) */}
      <div className="Slider">
        <Front />
      </div>

      {/* Product List */}
      <div className="Shop-Slid product-section">
        {cate.map((items) => (
          <Product
            key={items.id}
            name={items.name}
            price={items.price}
            image={items.image}
            id={items.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
