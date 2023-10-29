import { useEffect, useState } from "react";

import Card from "./Card";

const MainContent = ({ cartItemList, setCartItemList }) => {
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

  return (
    <section class="content">
      <div class="content-header">
        <h2>
          {inputQuery ? `Поиск по запросу: "${inputQuery}"` : "Все кроссовки"}
        </h2>
        <div class="search-block">
          <img
            width="14px"
            height="45px"
            src="images/search.svg"
            alt="search"
          />
          <input
            type="text"
            value={inputQuery}
            onChange={handleInputChange}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div class="card-area">
        {requestData
          ? requestData
              .filter(({ title }) =>
                title.toLowerCase().includes(inputQuery.toLowerCase())
              )
              .map(({ title, price, imageURL, id }) => (
                <Card
                  key={id}
                  title={title}
                  price={price}
                  imageURL={imageURL}
                  id={id}
                  handleAddButton={handleAddButton}
                />
              ))
          : "Загрузочка ..."}
      </div>
    </section>
  );
};

export default MainContent;
