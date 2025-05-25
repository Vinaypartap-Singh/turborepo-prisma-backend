// app/page.tsx or app/page.jsx
import "./globals.css";

async function fetchUsers() {
  const res = await fetch("http://localhost:8080/", {
    cache: "no-store", // optional: disables caching
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export default async function Home() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
