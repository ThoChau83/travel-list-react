export default function Stats({ items }) {
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
