import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900">Shopping List</h1>
      <p className="text-center text-gray-600">
        Add a new item to your shopping list.
      </p>
      <NewItem />
    </main>
  );
}
