import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
    deleteOrder: (state, action) => {
      return state.filter((order, index) => index !== action.payload);
    },
  },
});

export const { addOrder, deleteOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
