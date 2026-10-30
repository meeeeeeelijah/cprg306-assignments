// Name: Alex Ghebremicael Assignment 7

"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  // start the list with the data from items.json
  const [items, setItems] = useState(itemsData);

  // add the new item to the end of the list
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-slate-100 px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-800">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
