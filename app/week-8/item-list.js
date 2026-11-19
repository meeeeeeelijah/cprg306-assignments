"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy]),
  );

  const buttonClass = (value) =>
    `rounded px-4 py-2 font-semibold transition ${
      sortBy === value
        ? "bg-amber-400 text-slate-950"
        : "bg-slate-700 text-white hover:bg-slate-600"
    }`;

  return (
    <section className="mt-6">
      <div className="flex gap-3">
        <button
          className={buttonClass("name")}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={buttonClass("category")}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
      <ul className="mt-4 space-y-3">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
        ))}
      </ul>
    </section>
  );
}
