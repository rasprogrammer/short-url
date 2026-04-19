import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-gray-100 p-4">
      <Link href="/dashboard">Dashboard</Link><br />
      <Link href="/urls">URLs</Link><br />
      <Link href="/analytics">Analytics</Link><br />
      <Link href="/domains">Domains</Link><br />
      <Link href="/api-keys">API Keys</Link>
    </div>
  );
}