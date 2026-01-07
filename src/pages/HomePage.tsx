import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2"; // ! ВАЖНО: Импорт Grid2
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ArticleCard from "../components/ArticleCard";
import SearchInput from "../components/SearchInput";
import { useArticles } from "../hooks/useArticles";
import { useArticlesContext } from "../context/ArticlesContext";
import { filterAndSortArticles } from "../utils/filterUtils";

const HomePage = () => {
  useArticles(); // Хук для загрузки данных
  const { articles, search } = useArticlesContext();

  const filteredArticles = filterAndSortArticles(articles, search);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Filter by keywords
        </Typography>

        <Box sx={{ maxWidth: 600, mb: 3 }}>
          <SearchInput />
        </Box>

        <Typography variant="body2" color="text.secondary">
          Found: {filteredArticles.length} results
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Grid2: container определяется автоматически или явно */}
      <Grid container spacing={3}>
        {filteredArticles.map((article) => (
          // В версии v6 используем size вместо item xs={...}
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={article.id}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
