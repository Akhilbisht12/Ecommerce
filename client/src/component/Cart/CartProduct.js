import React from 'react';
import StyledHeading from '../Styled Components/StyledHeading';
import StyledButton from '../Styled Components/StyledButton'

export default function CartProduct(props) {
    return (
        <div style={{backgroundColor : 'rgb(234, 232, 232)', borderRadius : '1rem',
         padding : '1rem', display : 'flex', justifyContent : 'space-between',
         alignItems : 'center', marginBottom : '2rem'}}>
            <div style={{display : 'flex', justifyContent : 'start'}}>
                <div>
                    <img style={{width : '5rem', height : '5rem', marginRight : '2rem'}} src={props.url}/>
                </div>
                <div>
                    <StyledHeading med style={{margin : '0'}}>{props.name}</StyledHeading>
                    <StyledHeading small>* * * * *</StyledHeading>
                    <StyledHeading small> $ 20</StyledHeading>
                </div>
            </div>
            <div>
                <StyledButton primary>View</StyledButton>
                <StyledHeading>X remove Item</StyledHeading>
            </div>
        </div>
    )
}
