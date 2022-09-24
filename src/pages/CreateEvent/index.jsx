import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const index = () => {
  return (
    <div className="create-event">
      <div className="event-form-header">
        <h1>Create Event</h1>
      </div>
      <form>
        <div>
          <label htmlFor="name">Event Name</label>
          <input name="name" />
        </div>
        <div>
          <label htmlFor="name">Host Name</label>
          <input name="name" />
        </div>
        <div>
          <label htmlFor="name">Location</label>
          <input name="name" />
        </div>
        <div>
          <label htmlFor="name">Start Date</label>
          <input type="datetime-local" name="name" />
        </div>
        <div>
          <label htmlFor="name">End Date</label>
          <input type="datetime-local" name="name" />
        </div>
        <div>
          <input name="name" type="file" />
        </div>
        <div className="cta">
          <button>Create Event</button>
          <Link to="/event">Next</Link>
        </div>
      </form>
    </div>
  );
};

export default index;
