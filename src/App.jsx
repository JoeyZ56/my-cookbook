import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Pages
import Home from "./pages/Home/Home";
import Breakfast from "./pages/Breakfast/Breakfast";
import Lunch from "./pages/Lunch/Lunch";
import Dinner from "./pages/Dinner/Dinner";
import Dessert from "./pages/Dessert/Dessert";
import RecipeForm from "./pages/RecipeForm/RecipeForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/recipe-from" element={<RecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
