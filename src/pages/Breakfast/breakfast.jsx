import "./styles.scss";
import { Link } from "react-router-dom";
import images from "./images";

const Breakfast = () => {
  const handleBackbtn = () => {
    window.history.back();
  };

  return (
    <>
      <button onClick={handleBackbtn} className="breakfast-back-btn">
        Back
      </button>
      <div className="breakfast-main-container">
        <div className="breakfast-links-container">
          <Link
            to="/eggs"
            className="link"
            style={{
              backgroundImage: `url(${images.eggs})`,
              backgroundSize: "cover",
            }}
          >
            Eggs
          </Link>
          <Link
            to="/pancake"
            className="link"
            style={{
              backgroundImage: `url(${images.pancakes})`,
              backgroundSize: "cover",
            }}
          >
            Pancakes
          </Link>
          <Link
            to="/quiche"
            className="link"
            style={{
              backgroundImage: `url(${images.quiche})`,
              backgroundSize: "cover",
            }}
          >
            Quiche
          </Link>
        </div>
      </div>
    </>
  );
};

export default Breakfast;
