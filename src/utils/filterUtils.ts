import type { Article } from "../types/article";

export const filterAndSortArticles = (
  articles: Article[],
  keyword: string
): Article[] => {
  if (!keyword.trim()) return articles;

  const lowerKeyword = keyword.toLowerCase();
  const queryWords = lowerKeyword
    .split(/\s+/)
    .filter((word) => word.length > 0);

  return (
    articles
      .map((article) => {
        let score = 0;
        const titleLower = article.title.toLowerCase();
        const summaryLower = article.summary.toLowerCase();

        queryWords.forEach((word) => {
          // Приоритет 1: Совпадение в заголовке (10 очков)
          if (titleLower.includes(word)) score += 10;
          // Приоритет 2: Совпадение в описании (1 очко)
          if (summaryLower.includes(word)) score += 1;
        });

        return { article, score };
      })
      // Оставляем только те, где есть совпадения
      .filter((item) => item.score > 0)
      // Сортируем: чем выше score, тем выше статья
      .sort((a, b) => b.score - a.score)
      .map((item) => item.article)
  );
};
