import { useEffect, useState } from "react";
import { fetchArticles } from "../api/articlesApi";
import type { Article } from "../types/article";

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then(setArticles)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { articles, loading };
};
