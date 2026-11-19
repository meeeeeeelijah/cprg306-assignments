import Link from "next/link";
import AuthPanel from "../_components/auth-panel";

export default function Week9Page() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-8 px-6 py-16">
      <header>
        <Link href="/" className="text-sm text-amber-400 hover:text-amber-300">
          ← Back to assignments
        </Link>
        <p className="mb-2 mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          Assignment 9
        </p>
        <h1 className="text-3xl font-bold text-slate-100">
          Firebase GitHub Authentication
        </h1>
        <p className="mt-3 text-slate-400">
          Sign in with GitHub to display your account information and profile
          photo.
        </p>
      </header>

      <AuthPanel />
    </main>
  );
}
