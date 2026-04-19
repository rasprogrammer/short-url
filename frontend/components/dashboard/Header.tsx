import { logout } from "@/lib/auth";

export default function Header() {
  return (
    <div className="flex justify-between p-4 shadow">
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}