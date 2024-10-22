const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    fileupload: { type: Buffer, required: true },
    ingridients: { type: String, required: true },
    instructions: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
