import React from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='nav'>
           <img src={Logo} alt="Logo of Ema John" />
          <div className="menu-link">
          <a href="/Shop">Shop</a>
           <a href="/Order">Order</a>
           <a href="/Inventory">Inventory</a>
           <a href="/Login">Login</a>
          </div>
        </nav>
    );
};

export default Header;