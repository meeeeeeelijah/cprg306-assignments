import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="space-y-3">
        <li>
          <Link href="/week-2" className="hover:underline">
            Week 2 Assignments
          </Link>
        </li>
        <li>
          <Link href="/week-3" className="hover:underline">
            Week 3 Assignment
          </Link>
        </li>

        <li>
          <Link href="/week-4" className="hover:underline">
            Week 4 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}