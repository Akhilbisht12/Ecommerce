import React, {useState} from 'react';
import StyledHeading from '../Styled Components/StyledHeading';
import StyledButton from '../Styled Components/StyledButton';
import Axios from 'axios';
import LocalStorage from 'local-storage';
import {Link} from 'react-router-dom'

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [flat, setFlat] = useState('');
    const [street, setStreet] = useState('');
    const [locality, setLocality] = useState('');
    const [landmark, setLandmark] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [step, setStep] = useState(1)
    const registerUser = (e) => {
        e.preventDefault();
        
        const data = {
            email,
            password,
            firstName,
            lastName,
            flat,
            street,
            locality,
            landmark,
            pincode,
            city,
            state,
            country
        }

        Axios.post('http://localhost:5000/api/register', data)
        .then(res=>{
            console.log(res)
            if(res.status===400){alert('error')}
            else{
                LocalStorage.set('user', JSON.stringify(res.data.user))
                alert('user registered')
            }
        })
        .catch(err=>console.log(err));
    }
    const styles = {
        input : {
            marginBottom : '1rem',
            padding : '0.5rem 2rem',
            borderRadius : '0.5rem',
            borderWidth : '0.1rem',
            outline : 'none',
        },
        label : {
            marginTop : '1rem',
            fontSize : '1.2rem',
            fontWeight : '500',
            display : 'block'
        },
        horizontalFlex : {
            display : 'flex',
            justifyContent : 'space-around'
        },
        input2 : {
            marginBottom : '1rem',
            padding : '0.5rem 2rem',
            borderRadius : '0.5rem',
            borderWidth : '0.1rem',
            outline : 'none',
            width : '100%'
        }
    }
    if(step === 1){
        return (
            <div style={styles.horizontalFlex}>
                <div style={{width : '50%', padding : '3rem'}}>
                    <div>
                        <StyledHeading small>Welcome On Board</StyledHeading>
                        <StyledHeading med>Sign Up</StyledHeading>
                        <form style={{display : 'flex',flexDirection : 'column'}} onSubmit={registerUser} enctype="multipart/form-data">
                            <label style={styles.label}>Email</label>
                            <input type='email' style ={styles.input}
                            value={email}
                            onChange={e =>{setEmail(e.target.value)}}
                            />
                            <label style={styles.label}>Password</label>
                            <input style = {styles.input} type='password'
                            value={password}
                            onChange={e=>{setPassword(e.target.value)}}
                            />
                            <StyledButton primary onClick={()=>setStep(2)}>Next</StyledButton>
                        </form>
                    </div>
                    <div>
                        Already a user Login Instead 
                        <Link to='/signin'>Click Here</Link>
                    </div>
                </div>
                <div style={{width : '50%'}}>
                    <img
                    src='https://cdn.pixabay.com/photo/2019/08/27/15/52/groynes-4434535_960_720.jpg'
                    style={{width : '100%', borderRadius : '1rem'}}
                    />
                </div>
            </div>
        )
    }else if(step === 2){
        return(
            <div style={{display : 'flex'}}>
                <div style={{width : '50%'}}>
                    <div style={{display : 'flex', flexDirection : 'column'}}>

                        <div style={styles.horizontalFlex}>
                            <div>
                                <label style={styles.label}>First Name</label>
                                <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} style={styles.input2}/>
                            </div>
                            <div>
                                <label style={styles.label}>Last Name</label>
                                <input value={lastName} onChange={(e)=>setLastName(e.target.value)} style={styles.input2}/>
                            </div>
                        </div>

                        <div style={styles.horizontalFlex}>
                            <div>
                                <label style={styles.label}>Flat / House No.</label>
                                <input value={flat} onChange={(e)=>setFlat(e.target.value)} style={styles.input2}/>
                            </div>
                            <div>
                                <label style={styles.label}>Street</label>
                                <input value={street} onChange={(e)=>setStreet(e.target.value)} style={styles.input2}/>
                            </div>
                        </div>

                        <div style={styles.horizontalFlex}>
                            <div>
                                <label style={styles.label}>Landmark</label>
                                <input value={landmark} onChange={(e)=>setLandmark(e.target.value)} style={styles.input2}/>
                            </div>
                            <div>
                                <label style={styles.label}>Locality</label>
                                <input value={locality} onChange={(e)=>setLocality(e.target.value)} style={styles.input2}/>
                            </div>
                        </div>
                        
                        <div style={styles.horizontalFlex}>
                            <div>
                                <label style={styles.label}>Pincode</label>
                                <input type='number' value={pincode} onChange={(e)=>setPincode(e.target.value)} style={styles.input2}/>
                            </div>
                            <div>
                                <label style={styles.label}>City</label>
                                <input value={city} onChange={(e)=>setCity(e.target.value)} style={styles.input2}/>
                            </div>
                        </div>
                        
                        <div style={styles.horizontalFlex}>
                            <div>
                                <label style={styles.label}>State</label>
                                <input value={state} onChange={(e)=>setState(e.target.value)} style={styles.input2}/>
                            </div>
                            <div>
                                <label style={styles.label}>Country</label>
                                <input value={country} onChange={(e)=>setCountry(e.target.value)} style={styles.input2}/>
                            </div>
                        </div>
                        <StyledButton onClick={registerUser} primary>Sign Up</StyledButton>
                    </div>
                </div>
                <div style={{display : 'flex', justifyContent : 'center'}}>
                    <img
                    src='https://cdn.pixabay.com/photo/2019/08/27/15/52/groynes-4434535_960_720.jpg'
                    style={{width : '80%', borderRadius : '1rem'}}
                    />
                </div>
            </div>
        )
    }
}
