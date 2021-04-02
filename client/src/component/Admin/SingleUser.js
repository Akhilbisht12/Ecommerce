import React from 'react'

export default function SingleUser(props) {
    const user = props.location.item
    return (
        <div>
            <h4>{user.username}</h4>
            <h4>{user.firstName+ ' '+user.lastName}</h4>
            <h4>{user.email}</h4>
            <h4>{user.address.flat+' '+user.address.street+' '+user.address.locality+' '+user.address.landmark+' '+user.address.city+' '+user.address.pincode+' '+user.address.state}</h4>
        </div>
    )
}
