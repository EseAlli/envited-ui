import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import landingPageImage from "../../assets/images/lp_img.svg";

const index = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <header>
          <h1>
            Imagine if <span>SnapChat</span> had events.
          </h1>
          <p>
            Easily host and share events with your friends across any social
            media.
          </p>
          <Link to="/create">
            <button>🎉 Create my event</button>
          </Link>
        </header>
        <img src={landingPageImage} alt="Events" />
        <Link to="/create">
          <button>🎉 Create my event</button>
        </Link>
      </div>
    </div>
  );
};

export default index;
