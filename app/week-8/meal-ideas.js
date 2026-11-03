'use client';

import { useEffect, useState } from 'react';

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
  `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
    ingredient,
  )}`,
);

  if (!response.ok) {
    throw new Error('Failed to fetch meal ideas');
  }

  const data = await response.json();

  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      if (!ingredient) {
        setMeals([]);
        return;
      }

      try {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
      } catch (error) {
        console.error(error);
        setMeals([]);
      }
    }

    loadMealIdeas();
  }, [ingredient]);

  return (
    <section className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-4 text-2xl font-bold text-cyan-400">
        Meal Ideas
      </h2>

      {!ingredient && (
        <p className="text-white">
          Select an item to see meal ideas.
        </p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-white">
          No meal ideas found.
        </p>
      )}

      <ul className="space-y-4">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="rounded border border-neutral-700 bg-neutral-800 p-4"
          >
            <h3 className="font-bold text-white">{meal.strMeal}</h3>

            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="mt-3 w-full rounded"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}