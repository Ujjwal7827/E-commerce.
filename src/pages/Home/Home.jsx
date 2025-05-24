import React, { useState } from 'react';
import { category } from '../../category';
import Product from '../../components/Product/product';
import { dummydata } from '../../dummydata';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import Front from '../../components/Front';

const Home = () => {
  const [cate, setCate] = useState(dummydata);

  const filterProduct = (category) => {
    const updateData = dummydata.filter((items) => items.category === category);
    setCate(updateData);
  };

  return (
    <div className='home Items flex flex-wrap mt-7 bg-white justify-center gap-10 p-4'>
      {/* category card map */}
      <div className='category-section flex flex-wrap justify-center gap-6 mb-4'>
        {category.slice(0, 5).map((item) => (
         <div
         key={item.id}
         onClick={() => filterProduct(item.name)}
         className='category-card w-full sm:w-36 md:w-40 lg:w-48 xl:w-52 mt-5 p-2 rounded-2xl hover:border-gray-500 hover : shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center text-center'
       >
         <img
           src={item.image}
           alt={item.name}
           className='object-contain w-full h-28 rounded-md mb-4'/>
         <span className='text-xl font-bold p-2'>{item.name}</span>
       </div>
        ))}
      </div>

      {/* Front section */}
      <Front />

      <h1>Trending Products</h1>
      <div className='product-section'>
        {cate.slice(0, 7).map((items) => (
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

export default Home;
