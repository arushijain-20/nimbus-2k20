import React, { useEffect, useState } from "react";
import "../Main/Main.scss";
import "./Events.scss";
import { CONSTANTS } from "../../config";
import EventCard from "../../components/EventCard/EventCard";
import EventDetails from "../../components/EventDetails/EventDetails";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [detailedEvent, setDetailedEvent] = useState(null);

  const getAllEvents = async () => {
    try {
      let response = await fetch(CONSTANTS.BASE_URL + `events`);
      let data = await response.json();
      if ([200, 201].includes(response.status)) {
        console.log("Got Events.");
        setEvents(data);
      }
    } catch (err) {
      console.log("Cant Get Events - ", err.message);
    }
  };

  //EFFECTS
  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div className="main events-page">
      <div className="heading">
        <h1>Events</h1>
      </div>
      <div className="container">
        {detailedEvent ? (
          <EventDetails
            event={detailedEvent}
            setDetailedEvent={setDetailedEvent}
          />
        ) : (
          <div className="events">
            {events.map((event) => (
              <EventCard event={event} setDetailedEvent={setDetailedEvent} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
