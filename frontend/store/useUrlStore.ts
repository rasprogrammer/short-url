import { create } from "zustand";

interface UrlsType {
  id: string;
  url: string;
}

export const useUrlStore = create((set) => ({
  urls: [],
  setUrls: (urls: UrlsType) => set({ urls }),
}));