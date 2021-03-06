import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx'
import Form from '../../components/Form/Form.jsx';

import { PAGES_NAME } from "../../constants/constants";

const Order = () => {
    return (
        <main>
            <Navbar
                activePage={PAGES_NAME.order}
            />
            <div className="container">
                <Form/>
            </div>
        </main>
    )
};

export default Order;
