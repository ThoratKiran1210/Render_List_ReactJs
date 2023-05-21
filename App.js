import React from "react";
import Item from "./Items";

const App = () => {
  const items = ["JavaScript", " NodeJs", "ReactJs"];

  return (
    <div>
      <h2>My List</h2>
      <ul>
        {items.map((item, index) => (
          <Item key={index} name={item} />
        ))}
      </ul>
    </div>
  );
};

export default App;
