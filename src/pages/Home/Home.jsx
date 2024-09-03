import { useState } from "react";
import "./styles.scss";

/*
array of food by category, category leads to a page with all the food in that category
*/

const Home = () => {
  const [categories, setCategories] = useState([]);

  return (
    <div className="home-main-container">
      <div className="home-title-container">
        <h1>Joey&apos;s Cookbook</h1>
      </div>
      <div className="home-cat-container">
        <h2>Categories</h2>
        <div className="home-categories">
          {/* map through categories */}
          {categories.map((cat, index) => (
            <div key={index}>
              <h3>{cat.name}</h3>
              <img>{cat.image}</img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
