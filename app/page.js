import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-amber-500">
        CPRG 306: Web Development 2 - Assignments{" "}
      </h1>
      <Link href="/week-2" className="hover:text-amber-400">
        Week 2 Assignment
      </Link>

      <br />

      <Link href="/week-3" className="hover:text-amber-400">
        Week 3 Assignment
      </Link>

      <br />

      <Link href="/week-4" className="hover:text-amber-400">
        Week 4 Assignment
      </Link>

      <br />

      <Link href="/week-5" className="hover:text-amber-400">
        Week 5 Assignment
      </Link>
      <br />

      <Link
        href="/week-6
       "
        className="hover:text-amber-400"
      >
        Week 6 Assignment
      </Link>
      <br />

      <Link
        href="/week-7
       "
        className="hover:text-amber-400"
      >
        Week 7 Assignment
      </Link>

      <br />

      <Link href="/week-8" className="hover:text-amber-400">
        Week 8 Assignment
      </Link>

      <br />

      <Link href="/week-9" className="hover:text-amber-400">
        Week 9 Assignment
      </Link>
    </main>
  );
}
