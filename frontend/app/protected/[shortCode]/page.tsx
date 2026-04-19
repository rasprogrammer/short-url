import { api } from "@/lib/api";
import { useState } from "react";

export default function ProtectedPage() {
  const [password, setPassword] = useState("");

  const handleAccess = async () => {
    const res = await api.post("/verify-password", { password });
    if (res.data.valid) {
      window.location.href = res.data.redirectUrl;
    }
  };

  return (
    <div>
      <h2>This URL is protected</h2>
      <input onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleAccess}>Access</button>
    </div>
  );
}