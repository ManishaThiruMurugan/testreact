import { configureStore } from '@reduxjs/toolkit';
import  ordersSlice from './OrdersSlice';

const store = configureStore({
  reducer: {
    orders: ordersSlice,
  },
});

export default store;
