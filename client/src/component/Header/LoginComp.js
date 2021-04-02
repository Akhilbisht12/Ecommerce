import React, {useState,useEffect} from 'react'
import {FaUserAlt} from 'react-icons/fa';
import StyledHeading from '../Styled Components/StyledHeading';
import StyledButton from '../Styled Components/StyledButton';
import LocalStorage from 'local-storage';
import {Link} from 'react-router-dom'

export default function LoginComp() {
    const [user, setUser] = useState(null);
    const [hover, setHover] = useState('none');

    useEffect(()=>{
        setUser(JSON.parse(LocalStorage.get('user')))
    },[]);


    const handleLogout = () => {
        LocalStorage.set('user', null);
        setUser(null);
    }

    const handlehoverenter = () => {
        setHover('flex')
    }

    const handlehoverleave = () => {
        setTimeout(() => {
            setHover('none');
        }, 1000);
    }

    const styles = {
        hover : {
            display : hover,
            position : 'fixed',
            top : '50',
            right : '0',
            border : '1px solid grey',
            backgroundColor : 'white',
            padding : '1rem',
            textAlign : 'center',
            borderRadius : '0.5rem',
            flexDirection : 'column'
            
        }
    }

    if(user===null || user===''){
        return (
            <div>
                <FaUserAlt onMouseEnter={handlehoverenter} onMouseLeave={handlehoverleave}/>
                <div style={styles.hover} onMouseEnter={handlehoverenter} onMouseLeave={handlehoverleave}>
                    <StyledHeading>Welcome To Being Men</StyledHeading>
                    Exclusive Offers For New Customers
                    <Link to='/signin'>
                        <StyledButton primary>Login</StyledButton>
                    </Link>
                    <Link to='/signup'>
                        <StyledButton primary>Register</StyledButton>
                    </Link>
                </div>
            </div>
        )
    }else if(user.isAdmin){
        return(
            <div>
                <p onClick={handleLogout} style={{marginRight : 10,  display : 'inline'}}>Logout</p>
                <Link to='/dashboard'>Dashboard</Link>
            </div>
        )
    }else{
        return(
            <div onClick={handleLogout}>
                Logout
            </div>
        )
    }
    
}
