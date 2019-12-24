import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { listItems } from "../../store/slices";

const Form = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [paid, setPaid] = useState(false);
    const dispatch = useDispatch();

    const submitHandler = () => {
        const item = {
            title,
            description,
            status: paid
        }
        dispatch(listItems.actions.addItem(item));
        setTitle('');
        setDescription('');
        setPaid(false);
    }

    return (
        <div className="card custom-card">
            <div className="form-group">
                <label htmlFor="title-input">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title-input"
                    placeholder="title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }} />
                <small className="form-text text-muted">the name must be unique</small>
            </div>
            <div className="form-group">
                <label htmlFor="description-input">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="description-input"
                    placeholder="description"
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
    )
};

export default Form;
