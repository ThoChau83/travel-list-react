import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);
  function handleItem(newItem) {
    setItems((currItem) => [...currItem, newItem]);
  }
  function handleDelete(id) {
    setItems((currItem) => currItem.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItems((currItem) =>
      currItem.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function handleClear() {
    if (items.length !== 0) {
      const confirmed = window.confirm("Xóa hết thiệt hả");
      if (confirmed) setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo></Logo>
      <Form onHandle={handleItem}></Form>
      <PackingList
        items={items}
        onHandleDelete={handleDelete}
        onToggleItem={handleToggle}
        onClear={handleClear}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}
