import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {FaShoppingBag} from 'react-icons/fa';
import data from '../../img/category';
import Hover from './Hover';
import LoginComp from './LoginComp';
import LocalStorage from 'local-storage';

export default function Header() {
    const [cart, setCart] = useState(0)
    useEffect(()=>{
        setCart(JSON.parse(LocalStorage.get('cart')).length);
    },[cart])
    return (
        <div className='mainHeader'>
            <div className='logoHeader'>
                <div className="logo">
                    <Link to="/">Being Men</Link>
                </div>
                <div className='search'>
                    <input placeholder='Shoes'/>
                    <div>
                        <button>search</button>
                    </div>
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
                            <Link to="/cart"><FaShoppingBag/>{cart}</Link>
                        </li>
                        <li>
                            <LoginComp/>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <ul className='categories'>
                    {data.map((item)=>{
                        return(
                            <li>
                                <Hover item={item}/>
                             </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}