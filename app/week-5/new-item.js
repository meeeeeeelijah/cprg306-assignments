"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const categories = [
    "produce",
    "dairy",
    "bakery",
    "meat",
    "frozen foods",
    "canned goods",
    "dry goods",
    "beverages",
    "snacks",
    "household",
    "other",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-5 rounded-lg bg-white p-6 text-gray-900 shadow-lg"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-medium">
          Item Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter item name"
          required
          className="rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Quantity</label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity === 1}
            className="rounded-md bg-gray-200 px-4 py-2 disabled:opacity-50"
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity(Math.min(20, quantity + 1))}
            disabled={quantity === 20}
            className="rounded-md bg-gray-200 px-4 py-2 disabled:opacity-50"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {" "}
        <label htmlFor="category" className="font-medium">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Add Item
      </button>
    </form>
  );
}
