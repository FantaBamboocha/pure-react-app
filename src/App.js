import { useState } from "react";

import Header from "./components/Header";
import MainContentContainer from "./components/MainContent/MainContentContainer";
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
          setCartItemList={setCartItemList}
        />
      )}
      <Header setCartOpened={setCartOpened} />
      <MainContentContainer
        cartItemList={cartItemList}
        setCartItemList={setCartItemList}
      />
    </>
  );
};

export default App;
