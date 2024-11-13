import { useState, useEffect } from "react";
import "./styles.scss";

const RecipeForm = () => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    category: "select",
  });
  const [loading, setLoading] = useState(false);
  const [setRecipes] = useState([]); // Store fetched recipes

  const handleRecipeChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBackbtn = () => {
    window.history.back();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", newRecipe.name);
      formData.append("ingredients", newRecipe.ingredients);
      formData.append("instructions", newRecipe.instructions);
      formData.append("image", e.target.image.files[0]);
      formData.append("category", newRecipe.category);

      const res = await fetch("/api/recipes", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Error submitting recipe!");
      }

      const data = await res.json();
      alert("Recipe added successfully!");
      console.log("Form Data:", data);

      setNewRecipe({
        name: "",
        ingredients: [],
        instructions: "",
        category: "select",
      });
    } catch (error) {
      console.log("Error submitting recipe:", error.message);
      alert("Failed to submit recipe!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetChRecipe = async () => {
      try {
        const res = await fetch("http://localhost:5003/api/recipes");
        if (!res.ok) {
          throw new Error("Failed fetching formData from the backend");
        }
        const data = await res.json();
        console.log("Fetch Data:", data);
        setRecipes(data); // Store fetched recipes
      } catch (error) {
        console.error("Failed to fetch formData from backend:", error.message);
      }
    };
    fetChRecipe();
  }, []);

  return (
    <>
      <button onClick={handleBackbtn} className="recipe-form-back-btn">
        Back
      </button>
      <div className="form-main-container">
        <h1>Add a Recipe to the pile!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={newRecipe.name}
            onChange={handleRecipeChange}
            placeholder="Recipe Name"
            required
          />

          <input
            type="text"
            name="ingredients"
            value={newRecipe.ingredients}
            onChange={handleRecipeChange}
            placeholder="Ingredients"
            required
          />

          <textarea
            name="instructions"
            value={newRecipe.instructions}
            onChange={handleRecipeChange}
            placeholder="Instructions"
            required
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            className="file-input"
            required
          />

          <select
            name="category"
            value={newRecipe.category}
            onChange={handleRecipeChange}
            required
          >
            <option value="select">Select Category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>

          <button type="submit" className="recipe-form-btn">
            {loading ? "Adding..." : "Add Recipe"}
          </button>
        </form>
      </div>
    </>
  );
};

export default RecipeForm;
