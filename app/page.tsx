"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {

  const { data: session } = useSession()

  if (session) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>Welcome {session.user?.name}</h1>
        <p>You are logged in.</p>

        <button onClick={() => signOut()}>
          Logout
        </button>
      </main>
    )
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>VaultMarket</h1>
      <p>Digital Product Marketplace</p>

      <button onClick={() => signIn("google")}>
        Sign in with Google
      </button>
    </main>
  )
}