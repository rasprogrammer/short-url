import axios from "axios";
import { useState } from "react";

export default function UrlForm() {
  const [form, setForm] = useState({
    longUrl: "",
    customAlias: "",
    expiresAt: "",
    password: ""
  });

  const handleSubmit = async () => {
    try {
      await axios.post("/urls", form);
      alert("Short URL created!");
    } catch (err: any) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div className="card">
      <input placeholder="Enter long URL" />
      <input placeholder="Custom alias (optional)" />
      <input type="datetime-local" />
      <input placeholder="Password (optional)" />

      <button onClick={handleSubmit}>Shorten</button>
    </div>
  );
}