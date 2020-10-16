import React from 'react';
import StyledHeading from '../Styled Components/StyledHeading';
import StyledButton from '../Styled Components/StyledButton';

export default function Auth() {
    const styles = {
        input : {
            marginBottom : '1rem',
            padding : '0.5rem 2rem',
            borderRadius : '0.5rem',
            borderWidth : '0.1rem'
        }
    }
    return (
        <div style={{padding : '4rem'}}>
            <div style = {{display : 'flex', width : '100%'}}>
                <div style={{width : '50%', display : 'flex', flexDirection : 'column',
                 justifyContent : 'center', paddingRight : '4rem'}}>
                    <StyledHeading small>Welcome On Board</StyledHeading>
                    <StyledHeading med>Sign Up</StyledHeading>
                    <input style ={styles.input}
                    />
                    <input style = {styles.input}
                    />
                    <StyledButton primary>Sign Up</StyledButton>
                </div>
                <div style={{width : '50%'}}>
                    <img
                    src='https://cdn.pixabay.com/photo/2019/08/27/15/52/groynes-4434535_960_720.jpg'
                    style={{width : '100%', borderRadius : '1rem'}}
                    />
                </div>
            </div>
        </div>
    )
}
