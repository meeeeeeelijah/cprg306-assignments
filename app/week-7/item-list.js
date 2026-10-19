'use client';

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
  });

  const activeButtonClass = 'bg-cyan-600';
  const inactiveButtonClass = 'bg-neutral-700';

  return (
    <section>
      <div className="mb-6 flex gap-3">
        <button
          type="button"
          onClick={() => setSortBy('name')}
          className={`rounded px-4 py-2 font-bold text-white hover:bg-cyan-500 ${
            sortBy === 'name' ? activeButtonClass : inactiveButtonClass
          }`}
        >
          Sort by Name
        </button>

        <button
          type="button"
          onClick={() => setSortBy('category')}
          className={`rounded px-4 py-2 font-bold text-white hover:bg-cyan-500 ${
            sortBy === 'category' ? activeButtonClass : inactiveButtonClass
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </section>
  );
}