import React from 'react';
import './SortPanel.scss';
import { useDispatch } from 'react-redux';
import { sortOptions } from '../../store/slices'
import { SORT_OPTIONS } from '../../constants/constants'

const SortPanel = () => {
    const dispatch = useDispatch();

    const handleChangeSort = (option) => {
        dispatch(sortOptions.actions.changeSort(option))
        console.log(option, 'asd ')
    }

    return (
        <div className="panel">
            <div className="panel__btn-wrap">
                <button
                    className="btn btn-light"
                    onClick={() => handleChangeSort(SORT_OPTIONS.all)}
                >
                    Все
                </button>

                <button
                    className="btn btn-light"
                    onClick={() => handleChangeSort(SORT_OPTIONS.paid)}
                >
                    Оплаченные
                </button>

                <button
                    className="btn btn-light"
                    onClick={() => handleChangeSort(SORT_OPTIONS.unpaid)}
                >
                    Неоплаченные
                </button>

                <button
                    className="btn btn-light"
                    onClick={() => handleChangeSort(SORT_OPTIONS.delivered)}
                >
                    Доставленные
                </button>

                <button
                    className="btn btn-light"
                    onClick={() => handleChangeSort(SORT_OPTIONS.undelivered)}
                >
                    Недоставленные
                </button>
            </div>
        </div>
    )
}

export default SortPanel;
