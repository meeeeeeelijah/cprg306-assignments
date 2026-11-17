'use client';

import Link from 'next/link';
import { useUserAuth } from './_utils/auth-context';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">Week 9</h1>

      {!user ? (
        <button
          type="button"
          onClick={gitHubSignIn}
          className="rounded bg-cyan-600 px-4 py-2 font-bold hover:bg-cyan-500"
        >
          Sign in with GitHub
        </button>
      ) : (
        <div className="space-y-4">
          <p>
            Welcome, {user.displayName || user.email}
          </p>

          <button
            type="button"
            onClick={firebaseSignOut}
            className="rounded bg-red-600 px-4 py-2 font-bold hover:bg-red-500"
          >
            Sign out
          </button>

          <div>
            <Link
              href="/week-9/shopping-list"
              className="text-cyan-400 hover:underline"
            >
              Go to Shopping List
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}