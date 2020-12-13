import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Products from './component/Products/Products.js';
import uploadProduct from './component/Products/uploadProduct.js';
import ProductDetailed from './component/Products/ProductDetailed';
import Cart from './component/Cart/Cart';
import Auth from './component/Auth/Auth';
import SignIn from './component/Auth/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App(){
  return(
  <Router>
    <div className="mainApp">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/uploadProduct' component={uploadProduct}/>
        <Route exact path='/productDetailed/:id' component={ProductDetailed}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/signup' component={Auth}/>
        <Route exact path='/signin' component={SignIn}/>
      </Switch>

    </div>
  </Router>
  )
}