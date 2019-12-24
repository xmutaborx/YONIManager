import React from 'react';
import List from '../List/List.jsx';
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from '../../store/slices';

import { EXAMPLE_ITEMS } from '../../constants/constants';
import Navbar from '../Navbar/Navbar.jsx';
import Form from '../Form/Form.jsx';

const MainPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const users = useSelector(state => state.users);

  return (
      <main>
        <Navbar />
        <div className="container">
          <h1>Main page</h1>
          {users.length ? (
              <p className="alert alert-primary">Users length from store: {users.length}</p>
          ) : (
              <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>
          )}
          <div className="wrapper">
            <div className="btn-group">
              <button
                  className="btn btn-danger"
                  onClick={() => dispatch(counterSlice.actions.decrement())}
              >
                - 1
              </button>
              <p>store value: {counter}</p>
              <button
                  className="btn btn-success"
                  onClick={() => dispatch(counterSlice.actions.increment())}
              >
                + 1
              </button>
            </div>
          </div>
          <div className="wrapper">
            <p className="text-success text-center">List component:</p>
            <List items={EXAMPLE_ITEMS} />
          </div>
          <Form />
        </div>
      </main>
  )
};

export default MainPage;
