import React, {useEffect, useState} from 'react';
import Axios from 'axios'

export default function Category() {
    const [ category, setCategory] = useState();
    const [ loading, setLoading] = useState(true);
    const [name, setName] = useState();
    const [parent, setParent] = useState();
    const [image, setImage] = useState();

    useEffect(()=>{
        Axios.get('http://localhost:5000/api/getCategory')
        .then((res)=>{
            if(res.status===400) alert('something went wrong')
            else{
                setCategory(res.data)
                setLoading(false)
            }
        })
    },[])
    
    const handleCategorySubmit = () => {
        const formData = new FormData;
        formData.append('name', name)
        formData.append('parent', parent)
        formData.append('image', image)
        console.log(parent)
        Axios.post('http://localhost:5000/api/uploadCategory', formData)
        .then((res)=>{
            if(res.status===400) alert('Something Went Wrong')
            else if(res.status === 200){
                setName('');
                setParent('')
                setImage('')
                alert('Category Succesfully Uploaded')
            }
        })
    }

    if(loading) return <div>loading</div>
    else{
        return (
            <div>
                <div style={styles.uploadCat}>
                    <label>Category Name</label>
                    <input name='name' onChange={e=>setName(e.target.value)} value={name}/>
                    <label>Parent Category</label>
                    <select onChange={e=>setParent(e.target.value)} value={parent}>
                        <option>new</option>
                        {category.map((item)=>{
                            return(
                                <option value={item._id}>{item.name}</option>
                            )
                        })}
                    </select>
                    <label>Product Image</label>
                    <input name='image' type='file' onChange={(e)=>setImage(e.target.files[0])}/>
                    <button onClick={handleCategorySubmit}>Submit</button>
                </div>
            </div>
        )
    }
}

const styles = {
    uploadCat : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'flex-end'
    }
}