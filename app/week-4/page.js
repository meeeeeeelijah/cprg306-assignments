import BackHome from "../backhome";
import NewItem from "./new-item";

export const metadata = {
  title: "New Shopping List Item",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto w-full max-w-xl">
        <h1 className="text-4xl font-bold text-amber-400">New Item</h1>
        <p className="mt-2 text-slate-300">
          Choose the quantity for your new shopping list item.
        </p>

        <NewItem />

        <div className="mt-8">
          <BackHome />
        </div>
      </div>
    </main>
  );
}
