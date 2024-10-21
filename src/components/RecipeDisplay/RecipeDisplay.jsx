import { useEffect, useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const RecipeDisplay = ({ category }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("newRecipe")) || [];
    const filteredRrcipes = savedRecipes.filter((recipe) => {
      recipe.category === category;
    });
    setRecipes(filteredRrcipes);
  }, [category]);

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.splice(1)} Recipes</h1>
      {recipes.length < 0 ? (
        <u1>
          {recipes.map((recipe, index) => {
            <li key={index}>
              <h2>{recipe.name}</h2>
              <img src={recipe.image} alt={recipe.name} width="200" />
              <h3>Ingridents: {recipe.ingridents.join(", ")}</h3>
              <p>Instructions:{recipe.instructions}</p>
            </li>;
          })}
        </u1>
      ) : (
        <p>
          No recipes in this category yet! Would you like to add one?{" "}
          <Link to="/recipeForm">Add Recipe</Link>
        </p>
      )}
    </div>
  );
};

export default RecipeDisplay;
