import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

export default function Header() {
    return (
        <div className='mainHeader'>
            <div className="logo">
                Ecommerce app
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
                        Clothes
                    </li>
                    <li>
                        Login
                    </li>
                </ul>
            </div>
        </div>
    )
}
