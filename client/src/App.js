import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Products from './component/Products/Products.js';
import ProductDetailed from './component/Products/ProductDetailed';
import Cart from './component/Cart/Cart';
import SignUp from './component/Auth/SignUp';
import SignIn from './component/Auth/SignIn';
import Dashboard from './component/Admin/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App(){
  return(
  <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/productDetailed/:id' component={ProductDetailed}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
  </Router>
  )
}