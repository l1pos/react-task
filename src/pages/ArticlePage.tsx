import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import CardMedia from "@mui/material/CardMedia";
import { useArticlesContext } from "../context/ArticlesContext";
import { fetchArticleById } from "../api/articlesApi";
import type { Article } from "../types/article";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { articles } = useArticlesContext();

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const articleIdNumber = Number(id);
    const foundInContext = articles.find((a) => a.id === articleIdNumber);

    if (foundInContext) {
      setArticle(foundInContext);
      setLoading(false);
    } else {
      fetchArticleById(id)
        .then((data) => setArticle(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [id, articles]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!article) {
    return (
      <Container maxWidth="md">
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6">Article not found</Typography>
          <Button onClick={() => navigate("/")} sx={{ marginTop: 2 }}>
            Back to Home
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 6 }}>
        <Button onClick={() => navigate("/")} sx={{ mb: 3 }}>
          ← Back to Homepage
        </Button>

        <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 3 }}>
          {article.title}
        </Typography>

        <CardMedia
          component="img"
          image={article.image_url}
          alt={article.title}
          sx={{ borderRadius: 2, mb: 4, maxHeight: 400, objectFit: "cover" }}
        />

        <Typography
          variant="body1"
          sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
        >
          {article.summary}
        </Typography>

        <Box mt={4}>
          <Button variant="outlined" href={article.url} target="_blank">
            Read full article at {article.news_site}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ArticlePage;
