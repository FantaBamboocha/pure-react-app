import { useEffect, useState } from "react";
import axios from "axios";

import MainContentView from "./MainContentView";

import { API_BASE_URL, ITEMS_ENDPOINT, CART_ENDPOINT } from "../../api";

const MainContentContainer = ({ cartItemList, setCartItemList }) => {
  const [requestData, setRequestData] = useState(null);
  const [inputQuery, setInputQuery] = useState("");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}${ITEMS_ENDPOINT}?random=${Math.random()}`)
      .then((response) => setRequestData(response.data))
      .catch((error) => console.log(error.message));
  }, []);

  const handleInputChange = (event) => {
    setInputQuery(event.target.value);
  };

  const handleAddButton = (item) => {
    const { id, isAdded } = item;
    if (isAdded) {
      axios
        .post(`${API_BASE_URL}${CART_ENDPOINT}`, item)
        .catch((error) => console.log(error));
      setCartItemList([...cartItemList, item]);
    }
    if (!isAdded) {
      axios
        .delete(`${API_BASE_URL}${CART_ENDPOINT}/${id}`)
        .catch((error) => console.log(error));
      setCartItemList(cartItemList.filter((cartItem) => cartItem.id !== id));
    }
  };

  const handleClearInput = () => {
    setInputQuery("");
  };

  return (
    <MainContentView
      inputQuery={inputQuery}
      handleInputChange={handleInputChange}
      requestData={requestData}
      handleAddButton={handleAddButton}
      handleClearInput={handleClearInput}
    />
  );
};

export default MainContentContainer;
