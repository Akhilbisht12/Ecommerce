import React from 'react';
import StyledHeading from '../Styled Components/StyledHeading';
import StyledButton from '../Styled Components/StyledButton';
import {Link} from 'react-router-dom';
import LocalStorage from 'local-storage';

export default function CartProduct({item}) {
    const handleRemoveCart = () => {
        var cart = [];
        cart = JSON.parse(LocalStorage.get('cart'));
        console.log(cart)
        var temp = cart.filter((el)=>el._id!==item._id);
        LocalStorage.set('cart', JSON.stringify(temp))
    }
    return (
        <div style={{backgroundColor : 'rgb(234, 232, 232)', borderRadius : '1rem',
         padding : '1rem', display : 'flex', justifyContent : 'space-between',
         alignItems : 'center', marginBottom : '2rem'}}>
            <div style={{display : 'flex', justifyContent : 'start'}}>
                <div>
                    <img style={{width : '5rem', height : '5rem', marginRight : '2rem'}} src={item.image_url}/>
                </div>
                <div>
                    <StyledHeading med style={{margin : '0'}}>{item.name}</StyledHeading>
                    <StyledHeading small>* * * * *</StyledHeading>
                    <StyledHeading small>{item.price}</StyledHeading>
                </div>
            </div>
            <div>
                <Link to={'/ProductDetailed/'+ item._id}>
                    <StyledButton primary>View</StyledButton>
                </Link>
                <StyledHeading onClick={handleRemoveCart}>X remove Item</StyledHeading>
            </div>
        </div>
    )
}
