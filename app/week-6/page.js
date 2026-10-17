import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}