import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'

const List = () => {
    const orders = useSelector(state => state.items);

    return (
        <div className="row">
            {orders.map((item, i) =>
                <div
                    className="col-lg-4 col-md-6 col-sm-12"
                    key={i}
                >
                    <Card data={item}/>
                </div>
            )}
        </div>
    )
}

export default List
