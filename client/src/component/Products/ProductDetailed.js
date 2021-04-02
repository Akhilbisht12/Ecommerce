import React, {useEffect, useState} from 'react';
import StyledHeading from '../Styled Components/StyledHeading';
import StyledButton from '../Styled Components/StyledButton';
import Increment from '../Increment';
import Axios from 'axios';
import LocalStorage from 'local-storage';
import { json } from 'body-parser';
export default function ProductDetailed(props) {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState();
    useEffect(()=>{
        const id = props.match.params.id
        Axios.get(`http://localhost:5000/api/getProduct/${id}`)
        .then((res=>{
            setItem(res.data);
            setLoading(false);
        }))
    })
    const row = {
        display : 'flex',
        justifyContent : 'center',
        width : '100%'
        }

    const col = {
        width : '50%',
        justifyContent : 'center',
        padding : '2rem',
    }

    const handleAddToCart = ()=>{
        var cart = []
       console.log('hit')
       var cartLocal = LocalStorage.get('cart');
       console.log(typeof(cartLocal))
       if(cartLocal===null){
        cart.push(item);
        LocalStorage.set('cart', JSON.stringify(cart))
    }else{
        cart = JSON.parse(cartLocal);
        console.log(cart)
        var temp = cart.some((element)=>element._id === item._id)
        console.log(temp)
        if(temp) alert('Already In Cart')
        else {
            cart.push(item);
            LocalStorage.set('cart', JSON.stringify(cart))
        }
    }
    }

    if(loading){
        return(
            <div>
                loading
            </div>
        )
    }else{
    return (
        <div key={item.id}>
            <div style={row} className='imgDetailContainer'>
                <div style={col}>
                    <img src={item.image_url}
                     style={{borderRadius : '2rem'}}/>
                </div>
                <div style={col}>
                    <StyledHeading med>{item.name}</StyledHeading>
                    <StyledHeading small style={{marginBottom : '2rem'}}>{item.brand}</StyledHeading>
                    <StyledHeading med
                     style = {{ padding : '0.6rem',
                                color : '#2042bf' ,
                                backgroundColor : '#e5e5e5',
                                display : 'inline',
                                borderRadius : '1rem'}}>$ 20</StyledHeading>
                    <p>{item.name}</p>

                    <div style={{display : 'flex', justifyContent : 'start'}}>
                        <Increment/>
                        <StyledButton primary onClick={handleAddToCart}>Add To cart</StyledButton>
                    </div>

                </div>
            </div>
        </div>
    )
    }
}
