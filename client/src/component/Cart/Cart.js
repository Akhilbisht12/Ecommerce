import React from 'react';
import StyledHeading from '../Styled Components/StyledHeading';
import CartProduct from './CartProduct';
export default function Cart() {
    return (
        <div>
            <StyledHeading small center>Your Favuorite Products</StyledHeading>
            <StyledHeading large center style={{marginBottom : '2rem'}}>Cart</StyledHeading>
            <CartProduct
            url='https://fossil.scene7.com/is/image/FossilPartners/FS5305-alt?$sfcc_fos_medium$'
            name='Some Watch'/>
            <CartProduct
            url='https://www.dhresource.com/f2/albu/g5/M01/C1/E5/rBVaJFmKp0eABXBZAAOsQxiEDls519.jpg'
            name='Blue Jacket'/>
            <CartProduct
            url='https://w7.pngwing.com/pngs/134/755/png-transparent-strings-racket-tennis-balls-rakieta-tenisowa-sports-items-sporting-goods-sports-equipment-tennis.png'
            name='A Tennis Racket'/>
        </div>
    )
}
