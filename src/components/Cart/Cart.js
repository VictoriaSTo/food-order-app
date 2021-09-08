import React, { useContext } from 'react';
import Modal from '../Layout/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = props => {
const cartCtx = useContext(CartContext);

const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
const hasItems = cartCtx.items.length > 0;

const CartItemRemoveHandler = id => {};
const cartItemAddHandler = item => {}; 

const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((meal) => (
<CartItem 
  key={meal.id}
  name={meal.name} 
  amount={meal.amount} 
  price={meal.price}
  onRemove={CartItemRemoveHandler.bind(null, meal.id)}
  onAdd={cartItemAddHandler}
  />
  ))};
</ul>;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>      
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  ); 
};

export default Cart;