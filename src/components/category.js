import RecipeDisplay from "./RecipeDisplay/RecipeDisplay";

const Breakfast = () => <RecipeDisplay category="breakfast" />;
const Lunch = () => <RecipeDisplay category="lunch" />;
const Dinner = () => <RecipeDisplay category="dinner" />;
const Dessert = () => <RecipeDisplay category="dessert" />;

export { Breakfast, Lunch, Dinner, Dessert };
