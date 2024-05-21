import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './components/Navigation';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<OrderList/>} />
          <Route path="/new" element={<OrderForm/>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
