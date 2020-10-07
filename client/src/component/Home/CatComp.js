import React from 'react'

export default function CatComp(props) {
    const catStyle = {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        margin : '0.5rem',
        backgroundColor : 'rgb(234, 232, 232)',
        padding : '1rem',
        borderRadius : '0.3rem',
        maxWidth : '5rem',
        textAlign : 'center'
        
    };

    const caticon = {
        maxWidth : '2rem',
    }

    return (
        <div style={catStyle}>
            <img style={caticon} src={props.url} className='catImage'/>
            <p className='catText'>{props.text}</p>
        </div>
    )
}
