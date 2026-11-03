'use client';

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  function handleAddItem(item) {
    setItems((currentItems) => [item, ...currentItems]);
  }

  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(',')[0]
      .replace(/[^\p{L}\p{N}\s-]/gu, '')
      .trim();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">Shopping List</h1>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1 space-y-8">
          <NewItem onAddItem={handleAddItem} />

          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />
        </div>

        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}