import { useEffect } from "react";
import axios from "axios";

import DrawerView from "./DrawerView";

import { API_BASE_URL, CART_ENDPOINT } from "../../api";

const DrawerContainer = ({ setCartOpened, cartItemList, setCartItemList }) => {
  const closeCart = () => setCartOpened(false);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}${CART_ENDPOINT}`)
      .then((response) => setCartItemList(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteCartItem = (id) => {
    console.log(id);
    axios.delete(`${API_BASE_URL}${CART_ENDPOINT}/${id}`).catch((error) => {
      console.log(error);
    });

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
