import React, { useEffect, useState } from "react";
import "./EventDetailsPage.scss";
import EventDetails from "../../components/EventDetails/EventDetails";
import { CONSTANTS } from "../../config";
import Nav from "../../components/Nav/Nav";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

export default function EventDetailsPage(route) {
  const [detailedEvent, setDetailedEvent] = useState(null);

  const getEventbyId = async (id) => {
    try {
      let response = await fetch(CONSTANTS.BASE_URL + `events/${id}`);
      let data = await response.json();
      if ([200, 201].includes(response.status)) {
        console.log("Got Events.");
        setDetailedEvent(data);
      }
    } catch (err) {
      console.log(`Cant Get Events - #${id}`, err.message);
    }
  };

  useEffect(() => {
    console.log(route.match.params.id);
    getEventbyId(route.match.params.id);
  }, [route]);
  return (
    <div className="main event-details">
      <Nav />
      <div className="heading">
        <Link to="/events">
          <h1>Events</h1>
        </Link>
      </div>
      <div className="container">
        {detailedEvent ? (
          <EventDetails
            event={detailedEvent}
            setDetailedEvent={setDetailedEvent}
            history={route.history}
          />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
