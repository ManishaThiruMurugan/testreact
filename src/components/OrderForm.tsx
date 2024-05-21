import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addOrder } from '../redux/OrdersSlice';
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const history = useNavigate();

  const onSubmit = (data) => {
    dispatch(addOrder(data));
    history('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register('firstName', { maxLength: 20 })} />
        {errors.firstName && <p>First name cannot exceed 20 characters</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input {...register('lastName', { required: true, maxLength: 20 })} />
        {errors.lastName && <p>Last name is required and cannot exceed 20 characters</p>}
      </div>
      <div>
        <label>Order Description</label>
        <input {...register('orderDescription', { required: true, maxLength: 100 })} />
        {errors.orderDescription && <p>Order description is required and cannot exceed 100 characters</p>}
      </div>
      <div>
        <label>Quantity</label>
        <input type="number" {...register('quantity', { required: true, min: 1, max: 20 })} />
        {errors.quantity && <p>Quantity must be between 1 and 20</p>}
      </div>
      <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
  );
};

export default OrderForm;
