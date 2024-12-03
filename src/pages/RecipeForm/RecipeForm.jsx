import { useState } from "react";
import "./styles.scss";

const RecipeForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    fileUpload: null,
    category: "select",
  });

  //back button handler
  const handleBackbtn = () => {
    window.history.back();
  };

  //handle input change
  /* The handleRecipeChange function is responsible for 
  dynamically updating the formData state whenever 
  the user types into any input field (name, ingredients, etc.). */
  const handleRecipeChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //handle file upload
  /* The handleFileUpload function is responsible for 
  handling the image file uploaded by the user. 
  It updates the formData state with the uploaded file. */
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        fileUpload: file,
      }));
    }
  };

  //form handler
  /* The handleFormSubmit function is triggered when 
  the user submits the recipe form. Its job is to:
  
	1.	Prevent the default form submission behavior.
	2.	Package the form data (including the image) into a FormData object.
	3.	Send the data to the backend using a POST request.
	4.	Handle the response and provide feedback to the user. */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("ingredients", formData.ingredients);
    data.append("instructions", formData.instructions);
    data.append("category", formData.category);
    if (formData.fileUpload) {
      data.append("image", formData.fileUpload);
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_KEY}/api/recipes`, {
        method: "POST",
        body: data,
      });
      if (!res.ok) {
        throw new Error("Failed to submit recipe");
      }

      //reset form on success
      setFormData({
        name: "",
        ingridients: "",
        instructions: "",
        fileUpload: null,
        category: "select",
      });
      alert("Recipe has been added");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      alert("Error occured submitting recipe");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={handleBackbtn} className="recipe-form-back-btn">
        Back
      </button>
      <div className="form-main-container">
        <h1>Add a Recipe to the pile!</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleRecipeChange}
            placeholder="Recipe Name"
            required
          />

          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleRecipeChange}
            placeholder="ingredients"
            required
          />

          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleRecipeChange}
            placeholder="Instructions"
            required
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileUpload}
            className="file-input"
            required
          />

          <select
            name="category"
            value={formData.category}
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
