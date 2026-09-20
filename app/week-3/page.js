import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Shopping List</h1>
      <ItemList />
    </main>
  );
}