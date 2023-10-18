import DrawerView from "./DrawerView";

const DrawerContainer = ({ setCartOpened, cartItemList }) => {
  const closeCart = () => setCartOpened(false);

  return <DrawerView closeCart={closeCart} cartItemList={cartItemList} />;
};

export default DrawerContainer;
