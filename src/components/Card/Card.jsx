import React from 'react'

const Card = ({ data }) => {
    return (
        <div className="item-card">
            <p>ID: ???</p>
            <p>Имя: {data.name}</p>
            <p>Коллекция: {data.article}</p>
            <p>Цвет: {data.color}</p>
            <p>Размер: {data.size}</p>
            <p>Адрес: {data.address}</p>
            {data.instagram !== '@' && (
                <p>Instagram: {data.instagram}</p>
            )}
            {data.phone !== '+7' && (
                <p>Телефон: {data.phone}</p>
            )}
            {data.description && (
                <p>Описание: {data.description}</p>
            )}
            <p>Статус: {data.paid ? `Оплачено` : `Ожидает оплаты`}</p>
        </div>
    )
}

export default Card
