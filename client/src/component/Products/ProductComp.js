import React from 'react';
import {Link} from 'react-router-dom';

export default function ProductComp({item}) {
    return (
        <Link to={'/ProductDetailed/'+ item._id}>
            <div style={styles.productContainer}>
                <img src={item.image_url} style={styles.productImg} />
                <p style={styles.productTitle}>{item.name}</p>
                <p>{item.current_price}</p>
            </div>
        </Link>
    )
}

const styles = {
    productImg : {
        borderRadius : '2rem',
        width : '60%'
    },
    productTitle : {
        fontSize : '1rem',
        fontWeight : '600',
    },
    productContainer : {
        textAlign : 'center',
        padding : '1rem',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        width : '18rem'
    }
}