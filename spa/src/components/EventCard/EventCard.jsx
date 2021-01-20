import React from "react";
import "./EventCard.scss";

export default function EventCard({ event, setDetailedEvent }) {
  return (
    <div className="event-card" onClick={() => setDetailedEvent(event)}>
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
          <div className="details">Details</div>
        </div>
      </div>
    </div>
  );
}
