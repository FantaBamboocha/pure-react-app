import CartItemView from "./CartItemView";

const CartItemContainer = ({ item, deleteCartItem }) => {
  return <CartItemView item={item} deleteCartItem={deleteCartItem} />;
};

export default CartItemContainer;
