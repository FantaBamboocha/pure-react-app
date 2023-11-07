import styles from "./styles.module.scss";
import commonButtonstyles from "../common/commonButtons.module.scss";

const CartItemView = ({ item, deleteCartItem }) => {
  const { id, title, price, imageURL } = item;
  return (
    <div className={styles["cart-item"]}>
      <img width="70px" height="70px" src={imageURL} alt="cart-item" />
      <div className={styles["cart-item-info"]}>
        <p>{title}</p>
        <b>{price} p.</b>
      </div>
      <div>
        <button
          className={`${commonButtonstyles["common-button"]} ${styles["delete-button"]}`}
          onClick={() => deleteCartItem(id)}
        >
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default CartItemView;
