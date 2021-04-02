import Axios from 'axios'
import React from 'react'

export default function ProductComp({item}) {
    const handleDeleteProduct = ()=>{
        var temp = window.confirm('Are You Sure You Want To Delete This Product')
        if(temp){
            Axios.post(`http://localhost:5000/api/deleteProduct/${item._id}`)
            .then((res)=>{
                if(res.status===200) alert('Product Deleted Successfully')
            })
            .catch((err)=>{
                console.log(err)
                alert('Sorry Something Went Wrong')
            })
        }
    }
    return (
        <div style={styles.main}>
            <div style={{display : 'flex'}}>
                <div>
                    <img style={styles.img} src={item.image_url}/>
                </div>
                <div style={{width : '20rem'}}>
                    {item.name}
                </div>
            </div>
            <div style={{display : 'flex',alignItems : 'center'}}>
                <p>{item.subcategory}</p>
            </div>
            <div style={{display : 'flex',alignItems : 'center'}}>
                <p>$ {item.raw_price}</p>
            </div>
            <div style={{color : 'red'}}>
                <button onClick={handleDeleteProduct}>Delete</button>
            </div>
        </div>
    )
}

const styles = {
    main : {
        display : 'flex',
        justifyContent : 'space-between',
        width : '100%',
        alignItems : 'center'
    },
    img : {
        width : '5rem',
        height : '5rem'
    }
}
