import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrder } from '../redux/OrdersSlice';

const OrderList = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <span>{order.firstName} {order.lastName}: {order.orderDescription} (Quantity: {order.quantity})</span>
            <button onClick={() => dispatch(deleteOrder(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
