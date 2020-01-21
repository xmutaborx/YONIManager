import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => {
      return ++state
    },
    decrement: state => {
      return --state
    }
  }
});

export const listItems = createSlice({
  name: 'items',
  initialState: [{
    article: "Hoodies",
    color: "red",
    size: "M",
    name: 'Random Name',
    instagram: "@tratata",
    phone: "8123456789",
    address: "Country City Street 123, 23 test test test",
    description: "test description test description test description test description test description test description",
    paid: true,
    date: '21.01.20'
  }],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload)
    }
  }
});