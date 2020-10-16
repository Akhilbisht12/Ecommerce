import React from 'react';
import StyledHeading from '../Styled Components/StyledHeading';
import StyledButton from '../Styled Components/StyledButton';
import Increment from '../Increment';

export default function ProductDetailed() {
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
    return (
        <div>
            <div style={row} className='imgDetailContainer'>
                <div style={col}>
                    <img src='https://www.dhresource.com/f2/albu/g5/M01/C1/E5/rBVaJFmKp0eABXBZAAOsQxiEDls519.jpg'
                     style={{width : '100%', borderRadius : '2rem', height : '30rem'}}/>
                </div>
                <div style={col}>
                    <StyledHeading med>Long Blue Winter Jacket</StyledHeading>
                    <StyledHeading small style={{marginBottom : '2rem'}}>By Jacket Company</StyledHeading>
                    <StyledHeading med
                     style = {{ padding : '0.6rem',
                                color : '#2042bf' ,
                                backgroundColor : '#e5e5e5',
                                display : 'inline',
                                borderRadius : '1rem'}}>$ 20</StyledHeading>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <div style={{display : 'flex', justifyContent : 'start'}}>
                        <Increment/>
                        <StyledButton primary>Add To cart</StyledButton>
                    </div>

                </div>
            </div>
        </div>
    )
}
