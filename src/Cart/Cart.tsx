import CartItem from '../CartItem/CartItem';
//styles
import { Wrapper } from './Cart.styles';
// types
import { CartItemType } from '../App';
import { Button } from '@material-ui/core';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) => {
    return items.reduce(
      (ack: number, item) => ack + item.amount * item.price,
      0
    );
  };

  return (
    <Wrapper>
      <h2 className="headingCart">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="subnote">No items added</p>
      ) : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      {cartItems.length !== 0 ? (
        <Button className="buy_button">
          Proceed to buy ${calculateTotal(cartItems).toFixed(2)}
        </Button>
      ) : null}
    </Wrapper>
  );
};

export default Cart;
