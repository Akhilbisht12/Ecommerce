import React, { useEffect, useState } from 'react';
import ProductComp from './ProductComp';
import StyledHeading from '../Styled Components/StyledHeading'
import StyledButton from '../Styled Components/StyledButton';
import Axios from 'axios';

export default function Products() {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        Axios.get('http://localhost:5000/api/getProducts/')
        .then((res)=>{
            console.log(res);
            setProducts(res.data);
            setLoading(false);
        })
    },[])
    const styles ={
        input : {
            width : '8rem',
            outline : 'none',
        }
    }
    if(loading){
        return <div>loading</div>
    }else{
        return (
            <div style={{display : 'flex', marginTop : '4rem', justifyContent : 'space-evenly'}}>
                <div style={{display : 'flex', flexDirection : 'column', padding : '2rem'}}>
                    <StyledHeading med >Filters</StyledHeading>
                    <StyledHeading small>Brands</StyledHeading>
                    <label>
                    <input
                    type = 'checkbox'
                    />
                    Adidas</label>
                    <label>
                    <input
                    type = 'checkbox'
                    />
                    Nike</label>
                    <label>
                    <input
                    type = 'checkbox'
                    />
                    Abibas</label>
                    <label>
                    <input
                    type = 'checkbox'
                    />
                    Nice</label>

                    <StyledHeading small>Price Range</StyledHeading>

                    <input style={styles.input}
                        type='number'
                        />
                        to
                    <input style={styles.input}
                        type='number'
                        />
                    <StyledButton primary>Search</StyledButton>
                </div>
                <div style={{display : 'flex', alignItems :'center'}}>
                    <div style={{display : 'flex',flexWrap: 'wrap',justifyContent : 'center',alignItems :'center' , marginBottom : '4rem'}}>
                        {products.map((item)=>{
                            return <ProductComp item={item}/>
                        })} 
                    </div>
                </div>
            </div>
        )
    }
}
