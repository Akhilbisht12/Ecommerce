import React, {useEffect, useState} from 'react';
import './Home.css'
import CatComp from './CatComp';
import ProductComp from '../Products/ProductComp'
import StyledHeading from '../Styled Components/StyledHeading';
import Axios from 'axios';
import LocalStorage from 'local-storage'

export default function Home() {
    const elements=[];
    const [ products, setProducts] = useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:5000/api/getProducts')
        .then((res)=>{
            setProducts(res.data);
        })
    },[]);

    return (
        <div className='homeContainer'>
            <div className='carousel'>
                <img className="headImg" src={require('../../img/headerImg.png')}/>
            </div>
            <StyledHeading>Categories</StyledHeading>
            <div className='categoryContainer'>
                <CatComp 
                url='https://img.icons8.com/pastel-glyph/64/000000/t-shirt--v1.png'
                text='Mens T-shirt'/>
                <CatComp 
                url='https://img.icons8.com/windows/32/000000/pajama-pants.png'
                text='Mens Pants'/>
                <CatComp 
                url='https://img.icons8.com/carbon-copy/100/000000/womens-t-shirt.png'
                text='Women T-shirt'/>
                <CatComp 
                url='https://img.icons8.com/ios-glyphs/30/000000/womens-pants.png'
                text='Women Pants'/>
                <CatComp 
                url='https://img.icons8.com/ios/30/000000/badminton.png'
                text='Sports Item'/>
                <CatComp 
                url='https://img.icons8.com/ios/50/000000/sneakers.png'
                text='Mens Footwear'/>
                <CatComp 
                url='https://img.icons8.com/ios/50/000000/women-shoe-side-view.png'
                text='Womens Footwear'/>
                <CatComp 
                url='https://img.icons8.com/ios/50/000000/apple-watch-apps.png'
                text='Accessories'/>

            </div>
            <div style={{display : 'flex', justifyContent : 'space-between'}}>
                <StyledHeading style={{marginTop : '3rem'}}>Mens Clothing</StyledHeading>
                <StyledHeading style={{marginTop : '3rem'}}>View All</StyledHeading>
            </div>
            <div className='displayProduct' style={{display : 'flex', justifyContent : 'center'}}>
                {products.forEach(product => {
                    if(product.subcategory === 'Shirts' && elements.length<8){
                        elements.push(<ProductComp
                        url={product.image_url}
                        name={product.name}
                        price={product.price}
                        id={product._id}
                        key={product._id}
                        />)
                    }
                })};
                {elements}
            </div>

            <div style={{display : 'flex', justifyContent : 'space-between'}}>
                <StyledHeading style={{marginTop : '3rem'}}>Sport Items</StyledHeading>
                <StyledHeading style={{marginTop : '3rem'}}>View All</StyledHeading>
            </div>
            <div className='displayProduct' style={{display : 'flex', justifyContent : 'center'}}>
                <ProductComp 
                url='https://apollo-singapore.akamaized.net/v1/files/zps0m1zojdn01-IN/image'
                name = 'Yellow Ball'
                price = 'Very Cheap'/>

                <ProductComp 
                url='https://w7.pngwing.com/pngs/134/755/png-transparent-strings-racket-tennis-balls-rakieta-tenisowa-sports-items-sporting-goods-sports-equipment-tennis.png'
                name = 'Tennis Racket'
                price = 'Very Expensive'/>

                <ProductComp 
                url='https://img.pngio.com/mto-tennis-ballpng-liked-on-polyvore-featuring-sport-items-tennis-and-tennis-ball-tennis-ball-png-600_600.jpg '
                name = 'Tennis Ball'
                price = 'Very Expensive'/>

                <ProductComp 
                url='https://3.imimg.com/data3/FB/PY/MY-21557166/715ms0qrzwl-_sl1500_-500x500.jpg'
                name = 'Cricket BAtt'
                price = 'Very Expensive'/>
            </div>

        </div>
    )
module.exports = { products}
}
