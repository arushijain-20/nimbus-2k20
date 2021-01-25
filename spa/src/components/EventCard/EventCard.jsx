import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./EventCard.scss";

export default function EventCard({ event, setDetailedEvent }) {
  return (
    <div className="event-card">
      <div className="card">
        <div className="img">
          <img src={event.image ? event.image : ""} alt="Event" />
        </div>
        <div className="txt">
          <div className="title">{event.name}</div>
          <div className="desc">{event.info}</div>
          <div className="date">
            <div className="start">{event.start}</div>
            <div className="end">{event.end}</div>
          </div>
          <div className="venue">{event.venue}</div>
          <div className="details">
            <Link to={`/events/${event.id}`}>Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
