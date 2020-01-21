import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { listItems } from "../../store/slices";
import { ARTICLES, SIZES } from "../../constants/constants";
import { CSSTransition } from 'react-transition-group';
import history from "../../history";
import { dateRender } from '../../helpers/scripts'

import OrderConfirm from '../OrderConfirm/OrderConfirm';

const Form = () => {
    const [orderStatus, setOrderStatus] = useState(false);
    const [showError, setShowError] = useState(false)

    const [article, setArticle] = useState(ARTICLES[0]);
    const [color, setColor] = useState('');
    const [size, setSize] = useState(SIZES[3]);
    const [name, setName] = useState('');
    const [instagram, setInstagram] = useState('@');
    const [phone, setPhone] = useState('+7');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [paid, setPaid] = useState(false);
    const [ship, setShip] = useState(false);

    const dispatch = useDispatch();
    const orders = useSelector(state => state.items);

    const handleChangePaid = (e) => {
        if (paid) {
            setPaid(false);
            setShip(false);
        } else {
            setPaid(true);
        }
    }

    const handleChangeArticle = (e) => {
        setArticle(e.target.value);
    };

    const handleChangeSize = (e) => {
        setSize(e.target.value);
    };

    const submitHandler = () => {
        if (!article || !color || !size || !address || !name) {
            setShowError(true);
            window.scrollTo({
                top: 0,
                behavior: `smooth`
            });
            setTimeout(() => {
                setShowError(false);
            }, 3000);
        } else {
            setOrderStatus(true);
        }
    };

    const handleConfirm = () => {
        let date = new Date();
        date = dateRender(date);

        const id = orders[orders.length - 1].id + 1

        const item = {
            article,
            color,
            size,
            name,
            instagram: instagram !== '@' ? instagram : '',
            phone: phone !== '+7' ? phone : '',
            address,
            description,
            paid,
            ship,
            date,
            id
        };
        dispatch(listItems.actions.addItem(item));
        history.push('/')
    }

    const handleEdit = () => {
        setOrderStatus(false)
    }

    return (
        <div className="card custom-card">

            {orderStatus && (
                <OrderConfirm
                    article={article}
                    color={color}
                    size={size}
                    name={name}
                    address={address}
                    instagram={instagram}
                    phone={phone}
                    description={description}
                    paid={paid}
                    ship={ship}
                    onConfirm={handleConfirm}
                    onEdit={handleEdit}
                />
            )}

            {!orderStatus && (
                <div className="custom-card__content">
                    <h4 className="mx-auto mb-4">Добавить заказ:</h4>
                    <CSSTransition
                        in={showError}
                        timeout={300}
                        classNames="alert-card"
                        mountOnEnter
                        unmountOnExit
                    >
                        <p className="alert alert-danger">Пожалуйста заполните все необходимые поля</p>
                    </CSSTransition>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="select-input">Коллекция <span className="text-danger">*</span></label>
                            <select
                                className="form-control"
                                id="select-input"
                                value={article}
                                onChange={handleChangeArticle}
                            >
                                {ARTICLES.map((item) =>
                                    <option
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </option>
                                )}
                            </select>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="color-input">Цвет <span className="text-danger">*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                id="color-input"
                                value={color}
                                onChange={(e) => {
                                    setColor(e.target.value)
                                }} />
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="size-input">Размер <span className="text-danger">*</span></label>
                            <select
                                className="form-control"
                                id="size-input"
                                value={size}
                                onChange={handleChangeSize}
                            >
                                {SIZES.map((item) =>
                                    <option
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name-input">Имя <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="name-input"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address-input">Адрес <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="address-input"
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value)
                            }}/>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="instagram-input">Instagram</label>
                            <input
                                type="text"
                                className="form-control"
                                id="instagram-input"
                                placeholder="instagram"
                                value={instagram}
                                onChange={(e) => {
                                    setInstagram(e.target.value)
                                }} />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="phone-input">Телефон</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone-input"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value)
                                }} />
                        </div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="description-input">Описание</label>
                        <textarea
                            rows="3"
                            className="form-control"
                            id="description-input"
                            placeholder="Order Note"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}/>
                        <small className="form-text text-muted">Дополнительное описание заказа</small>
                    </div>

                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="check-input"
                            checked={paid}
                            onChange={handleChangePaid}
                        />
                        <label className="form-check-label" htmlFor="check-input">Оплачено</label>
                    </div>

                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="check-ship"
                            disabled={!paid}
                            checked={ship}
                            onChange={() => setShip(!ship)}
                        />
                        <label className="form-check-label" htmlFor="check-ship">Отправлено</label>
                    </div>

                    <div className="custom-card__btn-wrap">
                        <button
                            type="submit"
                            className="btn btn-info"
                            onClick={(e) => {
                                e.preventDefault();
                                submitHandler();
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Form;
