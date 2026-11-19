import ItemList from "./item-list";

export const metadata = {
  title: "Shopping List",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-xl">
        <h1 className="text-4xl font-bold text-amber-400">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
