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
    instagram: "@tratata",
    phone: "8123456789",
    address: "address",
    description: "description",
    paid: true
  }],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload)
    }
  }
});