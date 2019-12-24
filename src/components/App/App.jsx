import React from 'react';
import { Switch, Route } from "react-router-dom";

import MainPage from '../../pages/MainPage/MainPage.jsx';
import SecondPage from '../../pages/SecondPage/SecondPage.jsx';
import Order from '../../pages/Order/Order.jsx';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/second-page" component={SecondPage} />
            <Route exact path="/order" component={Order} />
        </Switch>
    )
};

export default App;
