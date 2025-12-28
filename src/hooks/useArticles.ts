import { useEffect, useState } from "react";
import { Article } from "../types/article";

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/")
      .then(res => res.json())
      .then(data => setArticles(data.results))
      .finally(() => setLoading(false));
  }, []);

  return { articles, loading };
};
    