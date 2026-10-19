'use client';

import { useState } from 'react';

const categories = [
  ['produce', 'Produce'],
  ['dairy', 'Dairy'],
  ['bakery', 'Bakery'],
  ['meat', 'Meat'],
  ['frozen-foods', 'Frozen Foods'],
  ['canned-goods', 'Canned Goods'],
  ['dry-goods', 'Dry Goods'],
  ['beverages', 'Beverages'],
  ['snacks', 'Snacks'],
  ['household', 'Household'],
  ['other', 'Other'],
];

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName('');
    setQuantity(1);
    setCategory('produce');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md space-y-6 rounded-lg border border-neutral-800 bg-neutral-900 p-6"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-semibold text-cyan-400"
        >
          Item Name
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full rounded border border-neutral-700 bg-neutral-800 px-3 py-2 text-white outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <span className="mb-2 block font-semibold text-cyan-400">
          Quantity
        </span>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="rounded bg-cyan-600 px-4 py-2 font-bold text-white hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            -
          </button>

          <span className="min-w-12 text-center text-2xl font-bold">
            {quantity}
          </span>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="rounded bg-cyan-600 px-4 py-2 font-bold text-white hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label
          htmlFor="category"
          className="mb-2 block font-semibold text-cyan-400"
        >
          Category
        </label>

        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full rounded border border-neutral-700 bg-neutral-800 px-3 py-2 text-white outline-none focus:border-cyan-400"
        >
          {categories.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded bg-cyan-600 px-4 py-2 font-bold text-white hover:bg-cyan-500"
      >
        Add Item
      </button>
    </form>
  );
}