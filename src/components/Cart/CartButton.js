import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/ui-slice';
const CartButton = (props) => {

  const dispatch = useDispatch();
  const badge = useSelector(state=> state.cart.totalQuantity);

  function toggleCartHandler () {
    dispatch(uiAction.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler} >
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
