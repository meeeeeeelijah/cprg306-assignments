"use client";

import { useUserAuth } from "./_utils/auth-context";

import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        }
        catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-4">Shopping List App</h1>

            {user ? (
                <div className="space-y-3"> 
                    <p>
                    Welcome, {user.displayName} ({user.email})
                    </p>
                    <Link href="/week-9/shopping-list" className="text-blue-500 underline block">Continue to your Shopping Link</Link>
                    <button onClick={handleSignOut} className="bg-red-600 text-white px-4 py-2 rounded">Log out</button>
                </div>
            ) : (
                <button onClick={handleSignIn} className="bg-gray-800 text-white px-4 py-2 rounded">Sign in with your GitHub</button>
            )}

        </main>
    );
}

