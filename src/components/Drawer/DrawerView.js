import CartItemContainer from "../CartItem/CartItemContainer";

const DrawerView = ({ closeCart, cartItemList, deleteCartItem }) => {
  return (
    <div class="overlay">
      <div className="free-space" onClick={closeCart}></div>
      <div class="drawer">
        <h4>Корзина</h4>
        <div class="cart-list">
          {cartItemList.map((item) => (
            <CartItemContainer
              key={item.id}
              item={item}
              deleteCartItem={deleteCartItem}
            />
          ))}
        </div>
        <div class="drawer-footer">
          <div class="drawer-footer-summary">
            <p>Цена:</p>
            <div></div>
            <b>10000000000000 р.</b>
          </div>
          <div class="drawer-footer-summary">
            <p>Налог 5%:</p>
            <div></div>
            <b>100 р.</b>
          </div>
          <button class="green-button">
            Оформить заказ
            <img src="./images/order.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawerView;
