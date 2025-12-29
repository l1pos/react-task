import type { Article } from "../types/article";

export const fetchArticles = async (): Promise<Article[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  return res.json();
};
