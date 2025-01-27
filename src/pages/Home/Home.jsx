import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button, CircularProgress } from "@mui/material";
import images from "./images";
import HamburgerMenu from "../../components/hamburgerMenu";

/*
array of food by category, category leads to a page with all the food in that category
*/

const Home = () => {
  const [recipes, setRecipes] = useState();
  const [likedRecipes, setLikedRecipes] = useState();
  const [categories, setCategories] = useState();
  const [search, setSearch] = useState();
  const [searchResults, setSearchResults] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  //handle search
  const handleSearch = () => {
    setSearchResults(recipes.filter((recipe) => recipe.name === search));
  };

  //handle category
  const handleFilterCategory = (category) => {
    setSearchResults(recipes.filter((recipe) => recipe.catefory === category));
  };

  //get all recipes
  useEffect(() => {
    const fetchRecipes = async () => {};
  }, []);
  return (
    <Box>
      <HamburgerMenu />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFF3E0",
          // width: "95%",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{ marginTop: "3rem" }}
        >
          Recipes
        </Typography>
        <Box>{}</Box>
      </Box>
    </Box>
  );
};

export default Home;
