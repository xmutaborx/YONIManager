import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { listItems } from "../../store/slices";
import { ARTICLES, SIZES } from "../../constants/constants";
import { CSSTransition } from 'react-transition-group';

const Form = () => {
    const [showError, setShowError] = useState(false)
    const [article, setArticle] = useState(ARTICLES[0]);
    const [color, setColor] = useState('');
    const [size, setSize] = useState(SIZES[3]);
    const [instagram, setInstagram] = useState('@');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [paid, setPaid] = useState(false);
    const dispatch = useDispatch();

    const handleChangeArticle = (e) => {
        setArticle(e.target.value);
    };

    const handleChangeSize = (e) => {
        setSize(e.target.value);
    };

    const submitHandler = () => {
        if (!article || !color || !size || !city || !address) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 3000);
        } else {
            const item = {
                article,
                color,
                size,
                instagram,
                city,
                address,
                description,
                paid
            };
            dispatch(listItems.actions.addItem(item));
            setArticle(ARTICLES[0]);
            setColor('')
            setSize(SIZES[3])
            setInstagram('@')
            setCity('')
            setAddress('')
            setDescription('')
            setPaid(false)
        }
    };

    return (
        <div className="card custom-card">
            <h3 className="mx-auto mb-4">Add Order</h3>
            <CSSTransition
                in={showError}
                timeout={300}
                classNames="alert-card"
                mountOnEnter
                unmountOnExit
            >
                <p className="alert alert-danger">Please fill in all required fields. </p>
            </CSSTransition>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="select-input">Article <span className="text-danger">*</span></label>
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
                    <label htmlFor="color-input">Color <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        id="color-input"
                        placeholder="Color"
                        value={color}
                        onChange={(e) => {
                            setColor(e.target.value)
                        }} />
                </div>

                <div className="form-group col-md-4">
                    <label htmlFor="size-input">Size <span className="text-danger">*</span></label>
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

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="city-input">City <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        id="city-input"
                        placeholder="City"
                        value={city}
                        onChange={(e) => {
                            setCity(e.target.value)
                        }}/>
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="address-input">Address <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        id="address-input"
                        placeholder="Adress"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}/>
                </div>
            </div>



            <div className="form-group">
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
                <small className="form-text text-muted">Enter instagram address</small>
            </div>

            <div className="form-group">
                <label htmlFor="description-input">Description</label>
                <textarea
                    type="text"
                    rows="3"
                    className="form-control"
                    id="description-input"
                    placeholder="Order Note"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}/>
            </div>

            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="check-input"
                    checked={paid}
                    onChange={() => setPaid(!paid)}
                />
                <label className="form-check-label" htmlFor="check-input">Paid</label>
            </div>
            <div className="custom-card__btn-wrap">
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e) => {
                        e.preventDefault();
                        submitHandler();
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    )
};

export default Form;
