import React from 'react';
import './Header.css'
import logo from '../images/logo.webp'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='nav'>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;