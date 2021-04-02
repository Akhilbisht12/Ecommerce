import React, {useEffect, useState} from 'react';
import StyledHeading from '../Styled Components/StyledHeading';
import StyledButton from '../Styled Components/StyledButton';
import CartProduct from './CartProduct';
import LocalStorage from 'local-storage';
import Axios from 'axios';

export default function Cart() {
    const [ cart, setCart] = useState();
    const [ loading, setLoading] = useState(true);
    useEffect(()=>{
        setCart(JSON.parse(LocalStorage.get('cart')));
        setLoading(false);
    },[])

    const handleCheckout = () => {
        var orders = {
            customerId : JSON.parse(LocalStorage.get('user'))._id,
            productId : []
        }
        cart.map((item)=>orders.productId.push(item._id))
        Axios.post('http://localhost:5000/api/postOrder', orders)
        .then((res)=>{
            console.log(res)
            if(res.status===400){
                console.log(res.data.err)
                alert('something went wrong')
            }else if(res.status === 200){
                console.log(res.data.order)
                alert('successfully Ordered')
            }
        })
        .catch((err)=>{
            console.log(err);
            alert('something went wrong');
        })
    }

    if(loading){
        return(
            <div>loading</div>
        )
    }
    else {
        return (
            <div>
                <StyledHeading small center>Your Favuorite Products</StyledHeading>
                <StyledHeading large center style={{marginBottom : '2rem'}}>Cart</StyledHeading>
                {cart.map((item)=>{
                    return <CartProduct item={item}/>
                })}
                <StyledButton onClick={handleCheckout} primary>Proceed To Checkout</StyledButton>
            </div>
        )
    }
}
