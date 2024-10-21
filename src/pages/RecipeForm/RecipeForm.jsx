import { useState } from "react";
import "./styles.scss";

const RecipeForm = () => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    ingirdents: [],
    instructions: "",
  });

  const [ingirdentInput, setIngirdentInput] = useState("");

  const handlerecipeChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleIngridentsChange = () => {
    if (ingirdentInput.trim() === "") return;

    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingirdents: [...prevRecipe.ingirdents, ingirdentInput],
    }));
    setIngirdentInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefautl();

    const savedRecipe = JSON.parse(localStorage.getItem("newRecipe")) || [];
    const updateRecipe = [...savedRecipe, newRecipe];

    localStorage.setItem("newRecipe", JSON.stringify(updateRecipe));

    setNewRecipe({
      name: "",
      image: "",
      ingirdents: [],
      instructions: "",
      category: "",
    });
    alert("recipe created successfully");
  };

  const handleBackbtn = () => {
    window.history.back();
  };

  return (
    <>
      <button onClick={handleBackbtn} className="recipe-form-back-btn">
        Back
      </button>
      <div className="form-main-container">
        <div className="form-title-container">
          <h1>Add a Recipe</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-input-container">
            <label>Recipe Name</label>
            <input
              type="text"
              name="name"
              value={newRecipe.name}
              onChange={handlerecipeChange}
              placeholder="Recipe Name"
            />
          </div>
          <div className="form-input-container">
            <label>Image</label>
            <input
              type="text"
              name="image"
              value={newRecipe.image}
              onChange={handlerecipeChange}
              placeholder="Image URL"
            />
          </div>
          <div className="form-input-container">
            <label>Ingredients</label>
            <input
              type="text"
              name="ingredients"
              value={ingirdentInput}
              onChange={(e) => setIngirdentInput(e.target.value)}
              placeholder="Ingredients"
            />
            <button onClick={handleIngridentsChange}>Add Ingirdent</button>
            <ul>
              {newRecipe.ingirdents.map((item, index) => {
                <li key={index}>{item}</li>;
              })}
            </ul>
          </div>

          <div className="form-input-container">
            <label>Instructions</label>
            <textarea
              type="text"
              name="instructions"
              value={newRecipe.instructions}
              onChange={handlerecipeChange}
              placeholder="Instructions"
            />
          </div>
          <div className="form-input-container">
            <label>Category</label>
            <select
              name="category"
              value={newRecipe.category}
              onChange={handlerecipeChange}
            >
              <option value="select">Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>
          <button type="submit" className="recipe-form-btn">
            Add Recipe
          </button>
        </form>
      </div>
    </>
  );
};

export default RecipeForm;
