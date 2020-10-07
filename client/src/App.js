import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Products from './component/Products/Products.js';
import ProductDetailed from './component/ProductDetailed';
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
        <Route exact path='/productDetailed' component={ProductDetailed}/>
      </Switch>

    </div>
  </Router>
  )
}