import {createSlice} from "@reduxjs/toolkit";

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

export const sortOptions = createSlice({
  name: 'Sort',
  initialState: 'ALL',
  reducers: {
    changeSort: (state, action) => {
      return action.payload
    }
  }
});
