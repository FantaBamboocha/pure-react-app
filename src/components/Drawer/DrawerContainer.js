import { useEffect } from "react";
import axios from "axios";

import DrawerView from "./DrawerView";

import { API_BASE_URL, CART_ENDPOINT } from "../../api";

const DrawerContainer = ({ setCartOpened, cartItemList, setCartItemList }) => {
  const closeCart = () => setCartOpened(false);

  useEffect(() => {
    const fetchCartItemList = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}${CART_ENDPOINT}`);

        setCartItemList(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCartItemList();
  }, []);

  const handleDeleteCartItem = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}${CART_ENDPOINT}/${id}`);

      setCartItemList((itemList) =>
        itemList.filter((cartItem) => cartItem.id !== id)
      );
    } catch (error) {
      console.log(error.message);
    }
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
