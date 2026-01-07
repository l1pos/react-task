import { createContext, useContext, useState } from "react";
import type { Article } from "../types/article";

interface ArticlesContextValue {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
  search: string;
  setSearch: (value: string) => void;
}

const ArticlesContext = createContext<ArticlesContextValue | null>(null);

export const ArticlesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState("");

  return (
    <ArticlesContext.Provider
      value={{ articles, setArticles, search, setSearch }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => {
  const ctx = useContext(ArticlesContext);
  if (!ctx) {
    throw new Error("useArticlesContext must be used inside ArticlesProvider");
  }
  return ctx;
};
