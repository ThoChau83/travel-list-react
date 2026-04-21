import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Form></Form>
      <PackingList></PackingList>
      <Stats></Stats>
    </div>
  );
}

function Logo() {
  return <h1>Far Travel</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
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
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}
function Item(props) {
  return (
    <li>
      {" "}
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        {props.item.quantity} {props.item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>TEST</em>
    </footer>
  );
}
