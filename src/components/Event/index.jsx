import React from "react";
import { HiCalendar, HiOutlineChevronRight } from "react-icons/hi";
import "./index.css";

const Event = () => {
  return (
    <div className="event-info">
      <div className="event-icon">
        <HiCalendar />
      </div>
      <div>
        <p className="start-date">18 August 6:00PM</p>
        <p className="end-date">
          to <span>19 August 1:00PM</span> UTC +10
        </p>
      </div>
      <div className="view">
        <HiOutlineChevronRight />
      </div>
    </div>
  );
};

export default Event;
