export default function Item({ name, quantity, category }) {
  return (
    <li className="max-w-md rounded-lg border border-neutral-800 bg-neutral-900 p-4">
      <h2 className="text-xl font-bold text-cyan-400">{name}</h2>

      <p className="text-sm text-white">
        Buy {quantity} in <span className="capitalize">{category}</span>
      </p>
    </li>
  );
}