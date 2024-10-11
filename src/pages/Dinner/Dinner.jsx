import "./styles.scss";
import { Link } from "react-router-dom";
import images from "./images";

const Dinner = () => {
  const handleBackBtn = () => {
    window.history.back();
  };

  return (
    <>
      <button onClick={handleBackBtn} className="dinner-back-btn">
        back
      </button>
      <div className="dinner-main-container">
        <div className="dinner-links-container">
          <Link
            className="link"
            style={{
              backgroundImage: `url(${images.American})`,
              backgroundSize: "cover",
            }}
          >
            American Cuisines
          </Link>
          <Link
            className="link"
            style={{
              backgroundImage: `url(${images.Mexican})`,
              backgroundSize: "cover",
            }}
          >
            Mexican Cuisines
          </Link>
          <Link
            className="link"
            style={{
              backgroundImage: `url(${images.Italian})`,
              backgroundSize: "cover",
            }}
          >
            Italian Cuisines
          </Link>
          <Link
            className="link"
            style={{
              backgroundImage: `url(${images.Asian})`,
              backgroundSize: "cover",
            }}
          >
            Asian Cuisines
          </Link>
          <Link
            className="link"
            style={{
              backgroundImage: `url(${images.MiddleEastern})`,
              backgroundSize: "cover",
            }}
          >
            Middle Eastern Cuisines
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dinner;
