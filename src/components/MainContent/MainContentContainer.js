import { useEffect, useState } from "react";

import MainContentView from "./MainContentView";

const MainContentContainer = ({ cartItemList, setCartItemList }) => {
  const [requestData, setRequestData] = useState(null);
  const [inputQuery, setInputQuery] = useState("");

  useEffect(() => {
    fetch(
      "https://651e90f344a3a8aa4768992b.mockapi.io/items?random=${Math.random()"
    )
      .then((response) => response.json())
      .then((data) => setRequestData(data));
  }, []);

  const handleInputChange = (event) => {
    setInputQuery(event.target.value);
  };

  const handleAddButton = (item) => {
    const { id, isAdded } = item;
    if (isAdded) setCartItemList([...cartItemList, item]);
    if (!isAdded) {
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
