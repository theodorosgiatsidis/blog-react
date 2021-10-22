import React, { useState, useEffect } from "react";
import "./todo.css";

function ToDo() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);
  function handleRemoveItem(id) {
    const newItems = items.filter((item) => {
      return item.id != id;
    });

    setItems(newItems);
  }

  return (
    <div className="Wrapper">
      {items.map((item) => (
        <div className="WrapperItems" key={item.id}>
          {item.title}
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="btnItems"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToDo;
