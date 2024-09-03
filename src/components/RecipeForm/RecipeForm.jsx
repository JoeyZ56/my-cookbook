import "./styles.scss";

/*
inputs for recipe name, description, ingredients, instructions, and image
add a link to category it belongs to for the backend to place for the category mapping
*/

const RecipeForm = () => {
  return (
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
          <label>Description</label>
          <input type="text" name="description" placeholder="Description" />
        </div>
        <div className="form-input-container">
          <label>Ingredients</label>
          <input type="text" name="ingredients" placeholder="Ingredients" />
        </div>
        <div className="form-input-container">
          <label>Instructions</label>
          <input type="text" name="instructions" placeholder="Instructions" />
        </div>
        <div className="form-input-container">
          <label>Image</label>
          <input type="text" name="image" placeholder="Image" />
        </div>
        <div className="form-input-container">
          <label>Category</label>
          <input type="text" name="category" placeholder="Category" />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
