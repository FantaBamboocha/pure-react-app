const Header = ({ setCartOpened }) => {
  const openCart = () => setCartOpened(true);

  return (
    <section class="header-content">
      <div class="header">
        <div class="header-left">
          <img
            width="40"
            height="40"
            src="images/header-image.svg"
            alt="logo"
          />

          <div class="left-content">
            <h3>react sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul class="header-right">
          <li onClick={openCart}>
            <img src="images/cart.svg" alt="cart" />
            <span>1205 p.</span>
          </li>
          <li>
            <img src="images/favorite.svg" alt="favorite" />
          </li>
          <li>
            <img src="images/profile.svg" alt="profile" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
