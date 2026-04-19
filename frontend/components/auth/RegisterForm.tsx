"use client";
import { useState } from "react";
import { api } from "@/lib/api";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleRegister = async () => {
    await api.post("/auth/register", form);
    window.location.href = "/login";
  };

  return (
    <div>
      <input placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <input placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <input placeholder="Password" type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}