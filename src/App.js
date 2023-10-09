import { useState } from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Drawer from "./components/Drawer";

const App = () => {
  const [cartOpened, setCartOpened] = useState(false);

  return (
    <>
      {cartOpened && <Drawer setCartOpened={setCartOpened} />}
      <Header setCartOpened={setCartOpened} />
      <MainContent />
    </>
  );
};

export default App;
