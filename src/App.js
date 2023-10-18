import { useState } from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import DrawerContainer from "./components/Drawer/DrawerContainer";

const App = () => {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItemList, setCartItemList] = useState([]);

  return (
    <>
      {cartOpened && (
        <DrawerContainer
          setCartOpened={setCartOpened}
          cartItemList={cartItemList}
        />
      )}
      <Header setCartOpened={setCartOpened} />
      <MainContent
        cartItemList={cartItemList}
        setCartItemList={setCartItemList}
      />
    </>
  );
};

export default App;
