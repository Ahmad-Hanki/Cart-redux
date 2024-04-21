import classes from './CartItem.module.css';
import { cartAction } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';
const CartItem = ({ title, quantity, total, price, id }) => {
  // Check if total and price are defined before using toFixed
  const formattedTotal =  total.toFixed(2);
  const formattedPrice =  price.toFixed(2);
  const dispatch = useDispatch()
  const removeFromCartHandler = () => {
    dispatch(cartAction.removeItemFromCart(id));
  }

  const addToCartHandler = () => {
    dispatch(cartAction.addItemToCart(
      {
      title,
      price,
      id,
    }
    ))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${formattedTotal}{' '}
          <span className={classes.itemprice}>(${formattedPrice}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
