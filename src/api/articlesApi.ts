import { Article } from "../types/article";

export const fetchArticles = async (): Promise<Article[]> => {
  const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles/");
  const data = await res.json();
  return data.results;
};
