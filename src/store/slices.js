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
    color: "Черный",
    size: "M",
    name: 'Ладыжкина Наськевич Андреевна',
    instagram: "@tratata",
    phone: "8123456789",
    address: "Москва, Ул. Пушкина, Дом колотушкина 14, квартира 88",
    description: "Доп вышивка на спине 8===э отправить в красной бумаге, положить стикеры",
    paid: true,
    ship: false,
    id: 1,
    date: '21.01.20'
  }],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload)
    }
  }
});