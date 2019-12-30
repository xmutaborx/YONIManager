import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'

const List = () => {
    const orders = useSelector(state => state.items);
    console.log(orders)
    return (
        <div className="wrapper-list">
            {orders.map((item, i) =>
                <Card data={item} key={i}/>
            )}
        </div>
    )
}

export default List
