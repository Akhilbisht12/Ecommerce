import React, {useEffect,useState} from 'react';
import Axios from 'axios'

export default function Order() {
    const [orders, setOrders] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        Axios.get('http://localhost:5000/api/getAllProducts/')
        .then(res=>{
            if(res.status===400)alert('something went worng')
            else{
                setOrders(res.data);
                setLoading(false)
            }
        })
    },[])

    if(loading)return(<div>loading</div>)
    else {
        return (
            <div>
                {orders.map((item)=>{
                    return(
                        <div>{item.customerId.email}</div>
                    )
                })}
            </div>
        )
    }
}
