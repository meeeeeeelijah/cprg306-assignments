"use client";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

function getAuthErrorMessage(error) {
  if (error?.code === "auth/configuration-not-found") {
    return "Firebase Authentication is not configured yet. Enable GitHub under Firebase Console > Authentication > Sign-in method, then restart the app.";
  }

  if (error?.code === "auth/operation-not-allowed") {
    return "GitHub sign-in is disabled. Enable the GitHub provider in Firebase Console > Authentication > Sign-in method.";
  }

  if (error?.code === "auth/popup-blocked") {
    return "The sign-in popup was blocked by your browser. Allow popups for localhost and try again.";
  }

  return error?.message || "Unable to sign in with GitHub.";
}

export default function AuthPanel() {
  const { user, loading, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [error, setError] = useState("");

  async function handleSignIn() {
    setError("");
    try {
      await gitHubSignIn();
    } catch (signInError) {
      setError(getAuthErrorMessage(signInError));
    }
  }

  async function handleSignOut() {
    setError("");
    try {
      await firebaseSignOut();
    } catch (signOutError) {
      setError(signOutError.message || "Unable to sign out.");
    }
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
      <h2 className="text-xl font-semibold text-slate-100">GitHub Login</h2>
      {loading ? (
        <p className="mt-4 text-slate-400">Checking your login status...</p>
      ) : user ? (
        <div className="mt-4 space-y-4">
          <p className="text-slate-300">
            Welcome,{" "}
            <span className="font-semibold text-amber-400">
              {user.displayName || user.email}
            </span>
            ! Your email is {user.email}, and here is your image!
          </p>
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt={`${user.displayName || "User"}'s GitHub profile photo`}
              className="h-40 w-40 rounded-lg object-cover grayscale"
            />
          )}
          <button
            type="button"
            onClick={handleSignOut}
            className="rounded-lg bg-slate-700 px-4 py-2 font-medium text-white transition hover:bg-slate-600"
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          <p className="text-slate-400">Sign in to complete Assignment 9.</p>
          <button
            type="button"
            onClick={handleSignIn}
            className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Sign in with GitHub
          </button>
        </div>
      )}
      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
    </section>
  );
}
