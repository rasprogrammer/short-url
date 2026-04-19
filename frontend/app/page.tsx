"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { isValidUrl } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    setError("");
    setShortUrl("");

    if (!isValidUrl(url)) {
      setError("Please enter a valid URL");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/urls/public", {
        longUrl: url,
      });

      setShortUrl(res.data.shortUrl);
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-xl font-bold">ShortURL</h1>
        <div className="space-x-4">
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Shorten Your Long URLs 🚀
        </h2>

        <p className="text-gray-600 mb-6">
          Fast, secure, and powerful URL shortener with analytics
        </p>

        <div className="flex gap-2 w-full max-w-xl">
          <Input
            placeholder="Enter your long URL..."
            value={url}
            onChange={(e: any) => setUrl(e.target.value)}
          />
          <Button onClick={handleShorten} disabled={loading}>
            {loading ? "Shortening..." : "Shorten"}
          </Button>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 mt-3">{error}</p>
        )}

        {/* Result */}
        {shortUrl && (
          <div className="mt-6 bg-white p-4 rounded shadow">
            <p className="text-green-600">Short URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              className="text-blue-600 underline"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="mt-24 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-bold text-lg mb-2">Custom Aliases</h3>
          <p className="text-gray-600">
            Create branded and memorable short links
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-bold text-lg mb-2">Analytics</h3>
          <p className="text-gray-600">
            Track clicks, countries, devices and more
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-bold text-lg mb-2">Secure Links</h3>
          <p className="text-gray-600">
            Password protect and expire your URLs
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="mt-24 text-center p-6 text-gray-500">
        © {new Date().getFullYear()} ShortURL. All rights reserved.
      </footer>
    </div>
  );
}