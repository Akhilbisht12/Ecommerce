import React from 'react';
import Order from './Order';
import Products from './Products/Products';
import Users from './Users';
import SingleUser from './SingleUser';
import Category from './Products/Category'
import uploadProduct from './Products/uploadProduct'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Dashboard() {
    return (
        <Router>
        <div style={styles.main}>
            <div style={styles.tabs}>
                <div style={styles.tabUl}>
                    <Link to='/dashboard/orders' style={styles.tabLi}>
                        Orders
                    </Link>
                    <Link to='/dashboard/products' style={styles.tabLi}>
                        Products
                    </Link>
                    <li style={styles.tabLi}>
                        customers
                    </li>
                    <Link to='/dashboard/users' style={styles.tabLi}>
                        Users
                    </Link>
                    <Link to='/dashboard/uploadProducts' style={styles.tabLi}>
                        Upload Products
                    </Link>
                    <Link to='/dashboard/category' style={styles.tabLi}>
                        Category
                    </Link>
                </div>
            </div>
            <div style={{width : '100%', maxHeight : '100%', overflowY : 'scroll'}}>
                <Switch>
                    <Route exact path='/dashboard/' component={Order}/>
                    <Route exact path='/dashboard/orders' component={Order}/>
                    <Route exact path='/dashboard/products' component={Products}/>
                    <Route exact path='/dashboard/users' component={Users}/>
                    <Route exact path='/dashboard/uploadProducts' component={uploadProduct}/>
                    <Route exact path='/dashboard/category' component={Category}/>
                    <Route exact path='/dashboard/user/:id' component={SingleUser}/>
                </Switch>
            </div>
        </div>
        </Router>
    )
}

const styles = {
    main : {
        display : 'flex',
        justifyContent : 'start',
        height : '81%'
        },
    tabs : {
        width : '10%',
        backgroundColor : '#2b2b2b',
        height : '100%',
        color : 'white',
        fontSize : '1.2rem'
    },
    tabUl : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    },
    tabLi : {
        marginTop : '3rem',
        color : 'white'
    }
}