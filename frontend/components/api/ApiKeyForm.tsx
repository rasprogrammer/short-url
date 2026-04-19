"use client";
import { api } from "@/lib/api";

export default function ApiKeyForm() {
  const generate = async () => {
    await api.post("/api-keys");
  };

  return <button onClick={generate}>Generate API Key</button>;
}