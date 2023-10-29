import DrawerView from "./DrawerView";

const DrawerContainer = ({ setCartOpened, cartItemList, setCartItemList }) => {
  const closeCart = () => setCartOpened(false);

  const handleDeleteCartItem = (id) => {
    setCartItemList((itemList) => {
      const copyCartItemList = structuredClone(itemList);
      return copyCartItemList.filter((cartItem) => cartItem.id !== id);
    });
  };

  return (
    <DrawerView
      closeCart={closeCart}
      cartItemList={cartItemList}
      deleteCartItem={handleDeleteCartItem}
    />
  );
};

export default DrawerContainer;
