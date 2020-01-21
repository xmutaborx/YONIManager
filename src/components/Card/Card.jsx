import React from 'react'
import './Card.scss'
import cn from 'classnames'

const Card = ({ data }) => {
    const rowClassPaid = cn({
        'item-card__row': true,
        'negative': !data.paid,
        'positive': data.paid
    })

    const rowClassShip = cn({
        'item-card__row': true,
        'negative': !data.ship,
        'positive': data.ship
    })

    return (
        <div className="item-card">
            <span className="item-card__id">{data.id}</span>
            <p className="item-card__title">{data.article}</p>
            <div className="item-card__row">
                <span className="item-card__name">Имя</span>
                <p className="item-card__text">{data.name}</p>
            </div>
            <div className="item-card__row">
                <span className="item-card__name">Адрес</span>
                <p className="item-card__text">{data.address}</p>
            </div>
            {data.description && (
                <div className="item-card__row">
                    <span className="item-card__name">Описание</span>
                    <p className="item-card__text">{data.description}</p>
                </div>
            )}
            <div className="item-card__row">
                <span className="item-card__name">Цвет</span>
                <span className="item-card__text">{data.color}</span>
            </div>
            <div className="item-card__row">
                <span className="item-card__name">Размер</span>
                <span className="item-card__text">{data.size}</span>
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
            <div className="item-card__row">
                <span className="item-card__name">Дата</span>
                <span className="item-card__text">{data.date}</span>
            </div>
            <div className={rowClassPaid}>
                <span className="item-card__name">Статус</span>
                <span className='item-card__text'>{data.paid ? `Оплачено` : `Ожидает оплаты`}</span>
            </div>
            <div className={rowClassShip}>
                <span className="item-card__name">Отправка</span>
                <span className='item-card__text'>{data.ship ? `Отправлено` : `Ожидает`}</span>
            </div>

            <div className="item-card__btn-wrap">
                <button className="btn btn-info">Редактировать</button>
            </div>
        </div>
    )
}

export default Card
