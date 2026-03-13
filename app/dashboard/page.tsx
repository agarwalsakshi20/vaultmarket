"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function Dashboard() {

  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (!session) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Please login</h2>
        <button onClick={() => signIn("google")}>
          Sign in
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>

      <p>Welcome {session.user?.name}</p>

      <br />

      <Link href="/products">
        <button>View Products</button>
      </Link>

      <br /><br />

      <button onClick={() => signOut()}>
        Logout
      </button>

    </div>
  )
}