import React, { useState } from 'react';
import StyledHeading from '../Styled Components/StyledHeading';
import StyledButton from '../Styled Components/StyledButton';
import Axios from 'axios';

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
        width : '20rem',
        marginBottom : '2rem',
        display : 'block',
        height : '1.5rem',
        borderRadius : '0.5rem',
        borderWidth : '0.1rem',
        paddingLeft : '0.5rem'
    },

    textarea : {
        marginBottom : '2rem',
        width : '25rem',
        height : '10rem',
        borderRadius : '0.5rem',
        padding : '0.5rem'
    },
    file : {
    },
    col2 : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    }
};

    const [defimg, setDefimg] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState();
    const [option, setOption] = useState();
    const [image, setImage] = useState('https://www.dhresource.com/f2/albu/g5/M01/C1/E5/rBVaJFmKp0eABXBZAAOsQxiEDls519.jpg')

    const handleOption = (e) => {
        setOption(e.target.value);
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', defimg);
        formData.append('name' , name);
        formData.append('desc' , desc);
        formData.append('price' , price);
        formData.append('company',company);
        formData.append('category', option);

        Axios.post('http://localhost:5000/api/uploadproduct', formData)
        .then(res=>{
            if(res.status===400)alert('failed Upload' + res.err);
            else if(res.status===200)alert('Product Uploaded Successfully');
        })
        .catch(err=>console.log(err))
    }

    const handleFile = (e)=>{
        setDefimg(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]))

    }

    return (
        <div>
            <form onSubmit={onSubmit} enctype="multipart/form-data">
                <div style={styles.row} className='imgDetailContainer'>
                    <div style={styles.col}>
                        <div style={styles.col2}>
                            <img src={image}
                            style={{width : '90%', borderRadius : '2rem', height : '30rem'}}/>
                            <input style={styles.file} type='file' onChange={handleFile}/>
                        </div>
                    </div>
                    <div style={styles.col}>
                        <StyledHeading med>Product Name</StyledHeading>
                        <input style={styles.input} type='text' value={name} onChange={e=>setName(e.target.value)}/>

                        <StyledHeading small>Product Company</StyledHeading>
                        <input style={styles.input} type='text' value={company} onChange={e=>setCompany(e.target.value)}/>

                        <select style={styles.input} onChange={handleOption} value={option}>
                            <option value="tshirt">T shirt</option>
                            <option value="trousers">Trousers</option>
                            <option selected value="blazzer">Blazzer</option>
                            <option value="jeans">Jeans</option>
                        </select>

                        <StyledHeading small>Price</StyledHeading>
                        <input style={styles.input} type='number' value={price} onChange={e=>setPrice(e.target.value)}/>

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
