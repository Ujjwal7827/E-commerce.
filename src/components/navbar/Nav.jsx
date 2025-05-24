import React from 'react'
import { FaShopify } from 'react-icons/fa6'
import { FiShoppingCart } from 'react-icons/fi'
import { IoSearchOutline } from 'react-icons/io5'
import "./Nav.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Nav = () => {
    // dispatch data update store 
    let dispatch = useDispatch()
    let items=useSelector(state=>state)
    console.log(items);
    
    
    return (
        <div className='nav  '>
            <div className="top-nav">
                <Link to='/'><div className="logo">
                <FaShopify />
                    <span>U-Kart</span>
                </div></Link>
                <form className='search-box'>
                    <input type="text" placeholder='Search  for Products,   Brands and more' />
                    <button><IoSearchOutline /></button>
                </form>
              
                <div className="bottom-nav flex list-none gap-4 flex-wrap hover:text-gray-500">
                <Link to='/'><li>Home</li></Link>
                <Link to='/shop'><li>Shop</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                <Link to='/cart'> <div className="cart-box">
                    <FiShoppingCart />
                    <span >{items.cart.length}</span>
                </div></Link>



            </div>
            </div>

           
        </div>
    )
}

export default Nav
