import React from 'react';
import Card from '../UI/Card';

import classes from './Cart.module.css';

const Cart = props => {
const cartItems = <ul className={classes['cart-items']}>{[
  { id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99}
].map((meal) => <li className={classes.meal}>{meal.name}</li>)}</ul>;

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>36.52</span>
      </div>
      <div className={classes.actions}>      
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  ); 
};

export default Cart;