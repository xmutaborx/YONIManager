import React from 'react'

const Card = ({ data }) => {
    console.log(data)
    return (
        <div className="item-card">
            <p>ID: ???</p>
            <p>Коллекция: {data.article}</p>
            <p>Цвет: {data.color}</p>
            <p>Размер: {data.size}</p>
            <p>Instagram: {data.instagram}</p>
            <p>Телефон: {data.phone}</p>
            <p>Адрес: {data.address}</p>
            <p>Описание: {data.description}</p>
            <p>Статус: {data.paid ? `Оплачено` : `Ожидает оплаты`}</p>
        </div>
    )
}

export default Card
