import React from "react";
import "./EventDetails.scss";

export default function EventDetails({
  event,
  setDetailedEvent,
  setEditEvent,
  onDeleteEvent,
}) {
  return (
    <div className="event-details">
      <div className="ctrl">
        <button className="btn" onClick={() => setDetailedEvent(null)}>
          back
        </button>
        <button className="btn blue" onClick={() => setEditEvent(event)}>
          edit
        </button>
        <button className="btn red">delete</button>
      </div>
      <pre className="event">{JSON.stringify(event, undefined, 2)}</pre>
    </div>
  );
}
