import React from 'react'
import './Cart.css'
import CartCard from '../../components/CartCard/CartCard'
import { useSelector } from 'react-redux'
import ec from '../../assets/Very_Sad_Face_Emoji_Icon_ios10_medium.avif'
import { current } from '@reduxjs/toolkit'
const Cart = () => {

  let items = useSelector(state => state)
  let total=items.cart.reduce((currentIndex,currentValue)=>currentIndex+currentValue.price,0)
  
  return (
    <div className='cart'>
      {items.cart.length <= 0 ? <div className='empty-cart'>
        <img src={ec} alt="" />
        <h1 className='font-bold font-stretch-50% text-5xl'>Cart is Empty</h1>
      </div> :
        <div className='cartCard-section'>
          {items.cart.map((item) => (
            <CartCard name={item.name} price={item.price} image={item.image} id={item.id}/>
          ))}
           <div className="price-section">
          <span>Total Products :{items.cart.length}</span>
          <span>Total Price: {total}</span>
          </div>
        </div>
       
      }

    </div>
  )
}

export default Cart
