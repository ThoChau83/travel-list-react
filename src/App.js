import { useState } from "react";

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

  return (
    <div className="app">
      <Logo></Logo>
      <Form onHandle={handleItem}></Form>
      <PackingList
        items={items}
        onHandleDelete={handleDelete}
        onToggleItem={handleToggle}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}

function Logo() {
  return <h1>Far Travel</h1>;
}
function Form({ onHandle }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };

    if (newItem.description !== "") {
      onHandle(newItem);
      setDescription("");
      setQuantity(1);
    }
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Cần gì cho chuyến đi nhờ</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>
      <input
        type="text"
        placeholder="Item"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <button>Summit</button>
    </form>
  );
}
function PackingList({ items, onHandleDelete, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            ocD={onHandleDelete}
            onToggle={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}
function Item(props) {
  return (
    <li>
      {" "}
      <input
        type="checkbox"
        checked={props.item.packed}
        onChange={() => props.onToggle(props.item.id)}
      ></input>
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        {props.item.quantity} {props.item.description}
      </span>
      <button onClick={() => props.ocD(props.item.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed === true).length;
  const percent = Math.round((numPacked / numItems) * 100);
  if (percent === 100)
    return (
      <footer className="stats">
        <em>Đi đi đi</em>
      </footer>
    );
  return (
    <footer className="stats">
      <em>
        {numItems === 0
          ? `Thêm đồ vô list để chuẩn bị nè`
          : `Đang có ${numItems} item trong list. Đã chuẩn bị được ${numPacked} món (
        ${percent}%)`}
      </em>
    </footer>
  );
}
