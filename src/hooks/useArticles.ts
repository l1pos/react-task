import { useEffect } from "react";
import { fetchArticles } from "../api/articlesApi";
import { useArticlesContext } from "../context/ArticlesContext";

export const useArticles = () => {
  const { articles, setArticles } = useArticlesContext();

  useEffect(() => {
    if (articles.length === 0) {
      fetchArticles().then(setArticles).catch(console.error);
    }
  }, []);

  return { articles };
};
