import React, {useEffect, useState} from 'react';
import './Home.css'
import CatComp from './CatComp';
import ProductComp from '../Products/ProductComp'
import StyledHeading from '../Styled Components/StyledHeading';
import Axios from 'axios';
import LocalStorage from 'local-storage'

export default function Home() {
    const pyjama = []
    var c=0;
    const [ products, setProducts] = useState([]);
    useEffect(()=>{
        console.log(JSON.parse(LocalStorage.get('user')))
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
            <div className='container'>
                <StyledHeading med>Categories</StyledHeading>
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
            </div>
            <div className='container'>
                <div style={{display : 'flex', justifyContent : 'space-between'}}>
                    <StyledHeading med style={{marginTop : '3rem'}}>T Shirts</StyledHeading>
                    <StyledHeading style={{marginTop : '3rem'}}>View All</StyledHeading>
                </div>
                <div className='displayProduct' style={{display : 'flex', alignItems : 'center'}}>
                    {products.map((item,i)=>{
                        if(item.subcategory === 'Shirts' && c<4){
                            c=c+1;
                            return(<ProductComp item={item}/>)   
                        }else if(item.subcategory === 'Pyjama'){
                            pyjama.push(<ProductComp item={item}/>)
                        }
                    })}
                </div>
                <div style={{display : 'flex', justifyContent : 'space-between'}}>
                    <StyledHeading med style={{marginTop : '3rem'}}>Pyjamas</StyledHeading>
                    <StyledHeading style={{marginTop : '3rem'}}>View All</StyledHeading>
                </div>
                <div className='displayProduct' style={{display : 'flex', alignItems : 'center'}}>
                    {pyjama}
                </div>
            </div>
        </div>
    )
}
