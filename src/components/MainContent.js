import { useEffect, useState } from "react";

import Card from "./Card";

const MainContent = ({ cartItemList, setCartItemList }) => {
  const [requestData, setRequestData] = useState(null);

  useEffect(() => {
    fetch(
      "https://651e90f344a3a8aa4768992b.mockapi.io/items?random=${Math.random()"
    )
      .then((response) => response.json())
      .then((data) => setRequestData(data));
  }, []);

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
        <h2>Все кроссовки</h2>
        <div class="search-block">
          <img
            width="14px"
            height="45px"
            src="images/search.svg"
            alt="search"
          />
          <input type="text" placeholder="Поиск..." />
        </div>
      </div>
      <div class="card-area">
        {requestData
          ? requestData.map(({ title, price, imageURL, id }) => (
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
