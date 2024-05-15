import { SearchObject } from "~/types/search.type.ts";

export const toSearchString = (input: SearchObject) => {
  const searchParams = new URLSearchParams();
  for (const key of Object.keys(input)) {
    const value = input[key];
    let paramValue = "";
    if (Array.isArray(value)) {
      paramValue = value.join(",");
    } else {
      paramValue = String(value);
    }
    if (!paramValue) continue;
    searchParams.set(key, paramValue);
  }
  return searchParams.toString();
};
