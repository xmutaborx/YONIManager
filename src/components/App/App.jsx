import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { usersSlice } from '../../store/slices';


import {URL, STATUS_CODE} from '../../constants/constants';
import MainPage from '../MainPage/MainPage.jsx';
import SecondPage from '../SecondPage/SecondPage.jsx';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                if (response.status === STATUS_CODE.ok) {
                    dispatch(usersSlice.actions.setUsers(response.data));
                }})
    }, [dispatch]);

    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/second-page" component={SecondPage} />
        </Switch>
    )
};

export default App;
