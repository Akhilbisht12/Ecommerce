import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

export default function Header() {
    return (
        <div className='mainHeader'>
            <div className="logo">
                <Link to="/">Ecommerce App</Link>
            </div>
            <div className="menu">
                <ul className='navigation'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
