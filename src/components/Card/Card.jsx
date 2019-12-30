import React from 'react'

const Card = ({ data }) => {
    return (
        <div className="card">
            <p>Order ID: ???</p>
            <p>Article: {data.article}</p>
            <p>Color: {data.color}</p>
            <p>Size: {data.size}</p>
            <p>Instagram: {data.instagram}</p>
            <p>Phone: {data.phone}</p>
            <p>Address: {data.address}</p>
            <p>Description: {data.description}</p>
            <p>status: {data.paid}</p>
        </div>
    )
}

export default Card
