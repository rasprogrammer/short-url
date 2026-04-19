"use client";
import { useState } from "react";
import { api } from "@/lib/api";

export default function DomainForm() {
  const [domain, setDomain] = useState("");

  const handleAdd = async () => {
    await api.post("/domains", { domain });
  };

  return (
    <div>
      <input placeholder="Enter domain"
        onChange={(e) => setDomain(e.target.value)} />
      <button onClick={handleAdd}>Add Domain</button>
    </div>
  );
}