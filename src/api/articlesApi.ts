import type { Article, ArticlesResponse } from "../types/article";

const BASE_URL = "https://api.spaceflightnewsapi.net/v4/articles/";

export const fetchArticles = async (): Promise<Article[]> => {
  const res = await fetch(`${BASE_URL}?limit=50`);

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  const data: ArticlesResponse = await res.json();
  return data.results;
};

export const fetchArticleById = async (
  id: string | number
): Promise<Article> => {
  const res = await fetch(`${BASE_URL}${id}/`);

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  return await res.json();
};
