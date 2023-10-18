const CartItem = ({ item }) => {
  const { title, price, imageURL } = item;
  return (
    <div class="cart-item">
      <img width="70px" height="70px" src={imageURL} alt="cart-item" />
      <div class="cart-item-info">
        <p>{title}</p>
        <b>{price} p.</b>
      </div>
      <div>
        <button class="common-button delete-button">
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
