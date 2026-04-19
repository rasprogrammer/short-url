import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dubclone — Link Management",
  description: "Create, track, and manage short links with your own domain.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}