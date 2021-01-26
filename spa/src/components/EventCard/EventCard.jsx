import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./EventCard.scss";

export default function EventCard({ event, setDetailedEvent }) {
  return (
    <div className="event-card">
      <Link to={`/events/${event.id}`}>
        <div className="card">
          <div className="img">
            {event.image ? (
              <img src={event.image ? event.image : ""} alt="Event" />
            ) : null}
          </div>
          <div className="txt">
            <div className="title">{event.name}</div>
            <div className="desc">{event.info}</div>
            <div className="date">
              <div className="start">
                <time dateTime={event.start}>
                  <span className="date">
                    {new Date(event.start).toDateString()}
                  </span>
                  <span className="time">
                    {new Date(event.start).toLocaleTimeString()}
                  </span>
                </time>
              </div>
              <span className="to">-</span>
              <div className="end">
                <time dateTime={event.end}>
                  <span className="date">
                    {new Date(event.end).toDateString()}
                  </span>
                  <span className="time">
                    {new Date(event.end).toLocaleTimeString()}
                  </span>
                </time>
              </div>
            </div>
            <div className="venue">
              {event.venue.includes("http") ? (
                <a href={event.venue}>{event.venue}</a>
              ) : (
                event.venue
              )}
            </div>
            {/* <div className="details">
            <Link to={`/events/${event.id}`}>View Event</Link>
          </div> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
