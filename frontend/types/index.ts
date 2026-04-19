export interface User {
  id: string;
  name: string;
  email: string;
  plan: "free" | "pro" | "enterprise";
}

export interface Url {
  id: string;
  longUrl: string;
  shortCode: string;
  shortUrl: string;
  clicks: number;
  status: "active" | "disabled" | "expired";
  expiresAt?: string;
  createdAt: string;
}

export interface ApiKey {
  id: string;
  key: string;
  createdAt: string;
}

export interface Domain {
  id: string;
  domain: string;
  verified: boolean;
}