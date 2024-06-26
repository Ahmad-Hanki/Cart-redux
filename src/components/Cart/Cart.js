import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const Cart = (props) => {
  const items = useSelector(state => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(item => <CartItem title = {item.title} price = {item.price} total = {item.totalPrice} quantity = {item.quantity} key={item.id} id = {item.id}
          
        />)}
        
      </ul>
    </Card>
  );
};

export default Cart;
