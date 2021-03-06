import React, {useState} from 'react';
import StyledHeading from '../Styled Components/StyledHeading';
import StyledButton from '../Styled Components/StyledButton';
import Axios from 'axios';
import LocalStorage from 'local-storage';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = (e) => {
        e.preventDefault();
        
        const data = {
            email,
            password
        }

        Axios.post('http://localhost:5000/api/signin', data)
        .then(res=>{
            console.log(res)
            if(res.status===400){
                console.log(res.data);
                alert(res.data.msg)
            }
            else if(res.status === 200){
                console.log(res.data.user)
                LocalStorage.set('user',JSON.stringify(res.data.user))
                alert('logged in')
            }
        })
        .catch(err=>console.log(err));
    }
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
                    <StyledHeading small>Welcome Back!!</StyledHeading>
                    <StyledHeading med>Sign In</StyledHeading>
                    <form onSubmit={loginUser} enctype="multipart/form-data">
                        <input style ={styles.input}
                        value={email}
                        onChange={e =>{setEmail(e.target.value)}}
                        />
                        <input style = {styles.input}
                        value={password}
                        onChange={e=>{setPassword(e.target.value)}}
                        />
                        <StyledButton primary onClick={loginUser}>Sign In</StyledButton>
                    </form>
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
