export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 bg-neutral-900 rounded-lg border border-neutral-800 max-w-md">
      <h2 className="text-xl font-bold text-cyan-400">{name}</h2>
      <p className="text-sm text-white">
        Buy {quantity} in <span className="capitalize">{category}</span>
      </p>
    </li>
  );
}