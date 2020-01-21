import React from 'react'
import './Card.scss'

const Card = ({ data }) => {
    return (
        <div className="item-card">
            <p className="item-card__title">{data.article}</p>
            <div className="item-card__row">
                <span className="item-card__name">Имя</span>
                <span className="item-card__text">{data.name}</span>
            </div>
            <div className="item-card__row">
                <span className="item-card__name">Цвет</span>
                <span className="item-card__text">{data.color}</span>
            </div>
            <div className="item-card__row">
                <span className="item-card__name">Размер</span>
                <span className="item-card__text">{data.size}</span>
            </div>
            <div className="item-card__row">
                <span className="item-card__name">Адрес</span>
                <p className="item-card__text">{data.address}</p>
            </div>
            {data.instagram !== '@' && (
                <div className="item-card__row">
                    <span className="item-card__name">Instagram</span>
                    <span className="item-card__text">{data.instagram}</span>
                </div>
            )}
            {data.phone !== '+7' && (
                <div className="item-card__row">
                    <span className="item-card__name">Телефон</span>
                    <span className="item-card__text">{data.phone}</span>
                </div>
            )}
            {data.description && (
                <div className="item-card__row">
                    <span className="item-card__name">Описание</span>
                    <p className="item-card__text">{data.description}</p>
                </div>
            )}
            <div className="item-card__row">
                <span className="item-card__name">Статус</span>
                <span className="item-card__text">{data.paid ? `Оплачено` : `Ожидает оплаты`}</span>
            </div>
            <div className="item-card__row">
                <span className="item-card__name">Дата</span>
                <span className="item-card__text">{data.date}</span>
            </div>
            <div className="item-card__row">
                <span className="item-card__name">ID</span>
                <span className="item-card__text">?</span>
            </div>
        </div>
    )
}

export default Card
