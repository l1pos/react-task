import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useArticlesContext } from "../context/ArticlesContext";

const SearchInput = () => {
  const { search, setSearch } = useArticlesContext();

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Filter by keywords..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" sx={{ mr: 1 }} />
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: "white",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "#e0e0e0" },
          "&:hover fieldset": { borderColor: "#bdbdbd" },
        },
      }}
    />
  );
};

export default SearchInput;
