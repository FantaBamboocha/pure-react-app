import CartItemContainer from "../CartItem/CartItemContainer";

import styles from "./styles.module.scss";

const DrawerView = ({ closeCart, cartItemList, deleteCartItem }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles["free-space"]} onClick={closeCart}></div>
      <div className={styles.drawer}>
        <h4>Корзина</h4>
        <div className={styles["cart-list"]}>
          {cartItemList.map((item) => (
            <CartItemContainer
              key={item.id}
              item={item}
              deleteCartItem={deleteCartItem}
            />
          ))}
        </div>
        <div className={styles["drawer-footer"]}>
          <div className={styles["drawer-footer-summary"]}>
            <p>Цена:</p>
            <div></div>
            <b>10000000000000 р.</b>
          </div>
          <div className={styles["drawer-footer-summary"]}>
            <p>Налог 5%:</p>
            <div></div>
            <b>100 р.</b>
          </div>
          <button className={styles["green-button"]}>
            Оформить заказ
            <img src="./images/order.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawerView;
