export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        className="m-2 w-[calc(100%-1rem)] rounded bg-slate-800 p-3 text-left text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-300">
          Buy {quantity} in {category}
        </p>
      </button>
    </li>
  );
}
