"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity((currentQuantity) => Math.min(currentQuantity + 1, 20));
  }

  function decrement() {
    setQuantity((currentQuantity) => Math.max(currentQuantity - 1, 1));
  }

  return (
    <section className="mt-8 rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-white">Quantity</h2>
      <div className="mt-5 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          aria-label="Decrease quantity"
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-400 text-2xl font-bold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
        >
          -
        </button>
        <span
          className="min-w-12 text-center text-3xl font-bold"
          aria-live="polite"
        >
          {quantity}
        </span>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          aria-label="Increase quantity"
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-400 text-2xl font-bold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
        >
          +
        </button>
      </div>
      <p className="mt-4 text-center text-sm text-slate-400">
        Choose between 1 and 20 items.
      </p>
    </section>
  );
}
