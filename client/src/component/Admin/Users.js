import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

export default function Users() {
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    const [toggle, setToggle] = useState('none')
    useEffect(()=>{
        Axios.get('http://localhost:5000/api/getAllUsers/')
        .then((res)=>{
            console.log(res.data)
            setUsers(res.data);
            setLoading(false)
        })
    },[])

    if(loading) return <div>loading</div>
    else {
        return(
            <div style={{width : '100%'}}>
                {users.map((item)=>{
                    return (
                        <div onMouseEnter={()=>setToggle('block')}
                        onMouseLeave={()=>setToggle('none')}
                         style={{display : 'flex', justifyContent : 'space-around'}}>
                            <div style={{display : 'flex'}}>
                                <img style={{width : '2rem'}} src={item.image}/>
                                <div>
                                {item.username}
                                <div style={{display : toggle}}>
                                    <Link to={{pathname:'/dashboard/user/'+item._id, item}}>View</Link>
                                </div>
                                </div>
                            </div>
                            <div>
                                {item.firstName+' '+item.lastName}
                            </div>
                            <div>
                                {item.email}
                            </div>
                            <div>
                                {item.role}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
