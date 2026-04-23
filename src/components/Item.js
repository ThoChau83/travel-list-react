export default function Item(props) {
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
