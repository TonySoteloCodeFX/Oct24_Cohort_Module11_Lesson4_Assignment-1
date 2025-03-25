import React from "react";
import CharacterList from "./component/CharacterList";
import "../src/styles/mainApp.css";

const App = () => {
  return (
    <section className="mainApp" style={{ padding: "20px" }}>
      <CharacterList />
    </section>
  );
};

export default App;
