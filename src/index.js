import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './history';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import './index.scss';
import App from './components/App/App.jsx';
import { sortOptions, listItems } from './store/slices';

const reducer = {
    sort: sortOptions.reducer,
    items: listItems.reducer,
};

const store = configureStore({reducer});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById(`root`)
);
