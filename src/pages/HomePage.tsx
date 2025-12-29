import ArticleCard from "../components/ArticleCard";
import { useArticles } from "../hooks/useArticles";

const HomePage = () => {
  const { articles, loading } = useArticles();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default HomePage;
