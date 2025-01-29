import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Breakfast = () => {
  const [breakfastRecipes, setBreakfastRecipes] = useState([]);

  const handleBackBtn = () => {
    window.history.back();
  };

  useEffect(() => {
    const savedRecipe = JSON.parse(localStorage.getItem("newRecipe")) || [];
    const filteredBreakfast = savedRecipe.filter((recipe) => {
      recipe.category === "Breakfast";
    });
    setBreakfastRecipes(filteredBreakfast);
  }, []);

  return (
    <>
      <button onClick={handleBackBtn}>Back</button>
      <div className="breakfast-main-container">
        <div className="breakfast-links-container">
          {breakfastRecipes.length > 0 ? (
            breakfastRecipes.map((recipe, index) => (
              <Link
                key={index}
                to={`/recipe/${recipe.name.toLowerCase()}`}
                className="link"
                style={{
                  backgroundImage: `url(${recipe.image})`,
                  backgroundSize: "cover",
                }}
              >
                {recipe.name}
              </Link>
            ))
          ) : (
            <div className="recipeform-link-container">
              <h2 className="recipeform-message">
                No Breakfast recipies in this category yet!
                <br />
                <span>
                  Add one!{" "}
                  <Link to="/recipe-form" className="recipeform-link">
                    Add Recipe
                  </Link>
                </span>
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Breakfast;
