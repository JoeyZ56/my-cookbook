import "./styles.scss";

/*
inputs for recipe name, description, ingredients, instructions, and image
add a link to category it belongs to for the backend to place for the category mapping
*/

const RecipeForm = () => {
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
        <form>
          <div className="form-input-container">
            <label>Recipe Name</label>
            <input type="text" name="recipeName" placeholder="Recipe Name" />
          </div>
          <div className="form-input-container">
            <label>Ingredients</label>
            <input type="text" name="ingredients" placeholder="Ingredients" />
          </div>
          <div className="form-input-container">
            <label>Image</label>
            <input type="text" name="image" placeholder="Image" />
          </div>
          <div className="form-input-container">
            <label>Instructions</label>
            <textarea
              type="text"
              name="instructions"
              placeholder="Instructions"
            />
          </div>
          <div className="form-input-container">
            <label>Category</label>
            <select type="text" name="category" placeholder="Category">
              <option value="select">Select Food Category</option>
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
