export const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidAlias = (alias: string) => {
  return /^[a-zA-Z0-9_-]+$/.test(alias);
};