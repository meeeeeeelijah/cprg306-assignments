"use client";

import { useEffect, useState } from "react";

export async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`,
  );
  if (!response.ok) throw new Error("Unable to load meal ideas.");
  const data = await response.json();
  return data.meals ?? [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!ingredient) {
      setMeals([]);
      setError("");
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError("");
    fetchMealIdeas(ingredient)
      .then((results) => {
        if (!cancelled) setMeals(results);
      })
      .catch(() => {
        if (!cancelled)
          setError("Meal ideas could not be loaded. Please try again.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [ingredient]);

  return (
    <section className="rounded-lg bg-white p-6 text-slate-900 shadow-lg">
      <h2 className="text-2xl font-bold text-slate-950">Meal Ideas</h2>
      {!ingredient && (
        <p className="mt-3 text-slate-600">
          Select an ingredient to see meal ideas.
        </p>
      )}
      {loading && <p className="mt-3 text-slate-600">Loading meal ideas...</p>}
      {error && <p className="mt-3 text-red-600">{error}</p>}
      {!loading && ingredient && !error && meals.length === 0 && (
        <p className="mt-3 text-slate-600">
          No meal ideas found for {ingredient}.
        </p>
      )}
      <ul className="mt-4 space-y-3">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="flex items-center gap-3 rounded bg-slate-100 p-3"
          >
            <img
              src={meal.strMealThumb}
              alt=""
              className="h-16 w-16 rounded object-cover"
            />
            <span className="font-semibold">{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
