import type { Article } from "../types/article";

interface Props {
  article: Article;
}

const ArticleCard = ({ article }: Props) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, marginBottom: 12 }}>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticleCard;
