import React from 'react';
import {Link} from 'react-router-dom';

export default function ProductComp(props) {
    const productImg = {
        borderRadius : '2rem',
        width : '12rem',
        height : '14rem'
    }

    const productTitle = {
        fontSize : '1rem',
        fontWeight : '600',
    }

    return (
        <Link to={'/ProductDetailed/'+ props.id}>
            <div style={{textAlign : 'center', marginRight : '2rem'}}>
                <img src={props.url} style={productImg} />
                <p style={productTitle}>{props.name}</p>
                <p>{props.price}</p>
            </div>
        </Link>
    )
}
