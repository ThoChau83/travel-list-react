import Item from "./Item.js";
import { useState } from "react";
export default function PackingList({
  items,
  onHandleDelete,
  onToggleItem,
  onClear,
}) {
  const [sorted, setSorted] = useState("Sắp xếp theo thứ tự");
  let typesort;
  if (sorted === "Sắp xếp theo thứ tự") typesort = items;
  if (sorted === "Sắp sếp theo chữ cái")
    typesort = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sorted === "Sắp xếp theo số lượng")
    typesort = items
      .slice()
      .sort((a, b) => Number(b.quantity) - Number(a.quantity));
  return (
    <div className="list">
      <ul>
        {typesort.map((item) => (
          <Item
            item={item}
            key={item.id}
            ocD={onHandleDelete}
            onToggle={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSorted(e.target.value)}>
          <option>Sắp xếp theo thứ tự </option>
          <option>Sắp sếp theo chữ cái</option>
          <option>Sắp xếp theo số lượng</option>
        </select>
        <button onClick={onClear}>Xóa hết</button>
      </div>
    </div>
  );
}
