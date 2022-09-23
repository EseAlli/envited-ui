import React from "react";
import "./index.css";
import birthdayCake from "../../assets/images/cake.png";
import Event from "../../components/Event";

const index = () => {
  return (
    <>
      <div className="event-page">
        <img src={birthdayCake} alt="birthday-cake" />
        <div className="event-content">
          <h1>Birthday Bash</h1>
          <p className="host">
            Hosted by <span>Elysia</span>
          </p>
          <div className="event-details">
            <Event />
            <Event />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
