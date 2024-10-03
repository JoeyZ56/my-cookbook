import "./styles.scss";
import { Link } from "react-router-dom";
import images from "./images";

const Lunch = () => {
  const handleBackbtn = () => {
    window.history.back();
  };

  return (
    <>
      <button onClick={handleBackbtn} className="lunch-back-btn">
        Back
      </button>
      <div className="lunch-main-container">
        <div className="lunch-links-container">
          <Link
            className="link"
            style={{
              backgroundImage: `url(${images.sandwiches})`,
              backgroundSize: "cover",
            }}
          >
            Sandwiches
          </Link>
          <Link
            className="link"
            style={{
              backgroundImage: `url(${images.salads})`,
              backgroundSize: "cover",
            }}
          >
            Salads
          </Link>
          <Link
            className="link"
            style={{
              backgroundImage: `url(${images.wraps})`,
              backgroundSize: "cover",
            }}
          >
            Wraps
          </Link>
        </div>
      </div>
    </>
  );
};

export default Lunch;
