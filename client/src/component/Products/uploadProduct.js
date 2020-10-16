import React, { useState } from 'react';
import StyledHeading from '../Styled Components/StyledHeading';
import StyledButton from '../Styled Components/StyledButton';
import axios from 'axios';

const multer = require('multer')

export default function UploadProduct() {
    const styles = {
         row : {
        display : 'flex',
        justifyContent : 'center',
        width : '100%'
        },

     col : {
        width : '50%',
        justifyContent : 'center',
        alignItems : 'center',
        padding : '2rem',
    },
    input : {
        marginBottom : '2rem',
        display : 'block'
    },

    textarea : {
        marginBottm : '2rem',
        padding : '2rem 5rem'
    }
};

    const [defimg, setDefimg] = useState('https://www.dhresource.com/f2/albu/g5/M01/C1/E5/rBVaJFmKp0eABXBZAAOsQxiEDls519.jpg');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState();

    const onSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', defimg);
        console.log(defimg);

        axios.post('http://localhost:5000/api/uploadproduct', formData);
    }



    return (
        <div>
            <form onSubmit={onSubmit} enctype="multipart/form-data">
                <div style={styles.row} className='imgDetailContainer'>
                    <div style={styles.col}>
                        <img src={defimg}
                        style={{width : '90%', borderRadius : '2rem', height : '30rem'}}/>
                        <input style={styles.input} type='file' onChange={e=>setDefimg(e.target.files[0])}/>
                    </div>
                    <div style={styles.col}>
                        <StyledHeading med>Product Name</StyledHeading>
                        <input style={styles.input} type='text' value={name} onChange={e=>setName(e.target.value)}/>

                        <StyledHeading small>Product Company</StyledHeading>
                        <input style={styles.input} type='text' value={company} onChange={e=>setCompany(e.target.value)}/>

                        <StyledHeading small>Price</StyledHeading>
                        <input type='number' value={price} onChange={e=>setPrice(e.target.value)}/>

                        <StyledHeading>Product Description</StyledHeading>
                        <textarea style={styles.textarea} value={desc} onChange={e=>setDesc(e.target.value)}/>

                        <div style={{display : 'flex', justifyContent : 'start'}}>
                            <StyledButton onClick={onSubmit} primary>Upload</StyledButton>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}
