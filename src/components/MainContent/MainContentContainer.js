import { useEffect, useState } from "react";
import axios from "axios";

import MainContentView from "./MainContentView";

import { API_BASE_URL, ITEMS_ENDPOINT, CART_ENDPOINT } from "../../api";

const MainContentContainer = ({ cartItemList, setCartItemList }) => {
  const [requestData, setRequestData] = useState(null);
  const [inputQuery, setInputQuery] = useState("");

  useEffect(() => {
    const fetchRequestData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}${ITEMS_ENDPOINT}?random=${Math.random()}`
        );

        setRequestData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchRequestData();
  }, []);

  const handleInputChange = (event) => {
    setInputQuery(event.target.value);
  };

  const handleAddButton = async (item) => {
    const { id, isAdded } = item;

    try {
      if (isAdded) {
        await axios.post(`${API_BASE_URL}${CART_ENDPOINT}`, item);

        setCartItemList([...cartItemList, item]);
      } else {
        await axios.delete(`${API_BASE_URL}${CART_ENDPOINT}/${id}`);

        setCartItemList(cartItemList.filter((cartItem) => cartItem.id !== id));
      }
    } catch (error) {
      console.log(error.message);
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
