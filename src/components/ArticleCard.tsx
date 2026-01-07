import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import HighlightText from "./HighlightText";
import { useArticlesContext } from "../context/ArticlesContext";
import type { Article } from "../types/article";

interface Props {
  article: Article;
}

const ArticleCard = ({ article }: Props) => {
  const { search } = useArticlesContext();
  const navigate = useNavigate();

  const formattedDate = new Date(article.published_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const summaryText =
    article.summary.length > 100
      ? article.summary.slice(0, 100) + "..."
      : article.summary;

  return (
    <Card
      onClick={() => navigate(`/article/${article.id}`)}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={article.image_url}
        alt={article.title}
        sx={{ objectFit: "cover" }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mb: 1, display: "block" }}
        >
          {formattedDate}
        </Typography>

        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", lineHeight: 1.2 }}
        >
          <HighlightText text={article.title} query={search} />
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <HighlightText text={summaryText} query={search} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
