const Drawer = ({ setCartOpened }) => {
  const closeCart = () => setCartOpened(false);

  return (
    <div class="overlay">
      <div className="free-space" onClick={closeCart}></div>
      <div class="drawer">
        <h4>Корзина</h4>
        <div class="cart-list">
          <div class="cart-item">
            <img
              width="70px"
              height="70px"
              src="images/image 5.jpg"
              alt="cart-item"
            />
            <div class="cart-item-info">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12999 p.</b>
            </div>
            <div>
              <button class="common-button delete-button">
                <span></span>
              </button>
            </div>
          </div>
          <div class="cart-item">
            <img
              width="70px"
              height="70px"
              src="images/image 5.jpg"
              alt="cart-item"
            />
            <div class="cart-item-info">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12999 p.</b>
            </div>
            <div>
              <button class="common-button delete-button">
                <span></span>
              </button>
            </div>
          </div>
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

export default Drawer;
