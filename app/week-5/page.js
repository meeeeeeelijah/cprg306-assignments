import NewItem from './new-item';

export default function Page() {
    return (
        <main className="min-h-screen bg-black p-8 text-white">
            <h1 className="mb-6 text-3xl font-bold">New Shopping List item</h1>
            <NewItem />
        </main>
    );
}
