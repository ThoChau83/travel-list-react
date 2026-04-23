import { useState } from "react";
export default function Form({ onHandle }) {
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
