import Axios from 'axios'
import React, { useEffect, useState } from 'react';
import ProductComp from './ProductComp';

export default function Products() {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        Axios.get('http://localhost:5000/api/getProducts')
        .then((res)=>{
            console.log(res)
            setProducts(res.data)
            setLoading(false)
        })
    },[])
    if(loading) return <div>loading</div>
    else{
        return (
            <div style={{width : '100%'}}>
                {products.map((item)=>{
                    return(
                        <ProductComp item={item}/>
                        )
                })}
            </div>
        )
    }
}
