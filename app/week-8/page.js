// Name: Alex Ghebremicael Assignment 8

"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // add the new item to the end of the list
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // cleans up the item name so the meal API can use it
  function handleItemSelect(item) {
    const cleanName = item.name
      .split(",")[0] // drops the size, e.g. "milk, 4 L" becomes "milk"
      .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}️]/gu, "") // drops emojis
      .trim();

    setSelectedItemName(cleanName);
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16">
      <h1 className="mb-6 text-center text-3xl font-semibold text-slate-800">
        Shopping List
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex w-full max-w-md flex-col items-center gap-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
