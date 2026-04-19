"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { api } from "@/lib/api";

export default function RedirectPage() {
  const { shortCode } = useParams();

  useEffect(() => {
    const redirect = async () => {
      const res = await api.get(`/r/${shortCode}`);
      window.location.href = res.data.url;
    };

    redirect();
  }, []);

  return <p>Redirecting...</p>;
}