export default function Item({ name, quantity, category }) {
  return (
    <li className="m-2 rounded bg-slate-800 p-3 text-white">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-gray-300">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
