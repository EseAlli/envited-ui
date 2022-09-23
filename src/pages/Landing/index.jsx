import React from "react";
import "./index.css";
import landingPageImage from "../../assets/images/lp_img.svg";

const index = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <header>
          <h1>
            Imagine If <span>SnapChat</span> had events.
          </h1>
          <p>
            Easily host and share events with your friends across any social
            media.
          </p>
          <button>🎉 Create my event</button>
        </header>
        <img src={landingPageImage} alt="Events" />
        <button>🎉 Create my event</button>
      </div>
    </div>
  );
};

export default index;
