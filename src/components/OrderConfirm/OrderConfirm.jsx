import React from 'react'
import './OrderConfirm.scss'

const OrderConfirm = ({ article, color, size, name, address, instagram, phone, description, paid, onConfirm, onEdit }) => {
    return (
        <div className="order-confirm">
            <p className="order-confirm__card-title">Подтверждение заказа</p>
            <div className="order-confirm__content">
                <div className="order-confirm__row">
                    <span className="order-confirm__title">Коллекция: </span>
                    <span className="order-confirm__text">{article}</span>
                </div>
                <div className="order-confirm__row">
                    <span className="order-confirm__title">Цвет: </span>
                    <span className="order-confirm__text">{color}</span>
                </div>
                <div className="order-confirm__row">
                    <span className="order-confirm__title">Размер: </span>
                    <span className="order-confirm__text">{size}</span>
                </div>
                <div className="order-confirm__row">
                    <span className="order-confirm__title">Имя: </span>
                    <span className="order-confirm__text">{name}</span>
                </div>
                <div className="order-confirm__row">
                    <span className="order-confirm__title">Адрес: </span>
                    <span className="order-confirm__text">{address}</span>
                </div>
                {instagram !== '@' && (
                    <div className="order-confirm__row">
                        <span className="order-confirm__title">Instagram: </span>
                        <span className="order-confirm__text">{instagram}</span>
                    </div>
                )}
                {phone !== '+7' && (
                    <div className="order-confirm__row">
                        <span className="order-confirm__title">Телефон: </span>
                        <span className="order-confirm__text">{phone}</span>
                    </div>
                )}
                {description && (
                    <div className="order-confirm__row">
                        <span className="order-confirm__title">Описание заказа: </span>
                        <span className="order-confirm__text">{description}</span>
                    </div>
                )}
                <div className="order-confirm__row">
                    <span className="order-confirm__title">Статус: </span>
                    <span className="order-confirm__text">{paid ? `Оплачено` : `Ожидает оплаты`}</span>
                </div>
            </div>
            <div className="order-confirm__btn-wrap">
                <button
                    className="btn btn-info"
                    onClick={onConfirm}
                >
                    Подтвердить
                </button>
                <button
                    className="btn btn-light"
                    onClick={onEdit}
                >
                    Редактировать
                </button>
            </div>
        </div>
    )
}

export default OrderConfirm;
