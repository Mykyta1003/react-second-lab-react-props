import React from "react";
import Main from "./components/Main/Main";
import { cardsData } from "./data";

const App = () => {
  return (
    <div>
      <h1>React Props Lab</h1>
      <Main cards={cardsData} />
    </div>
  );
};

export default App;