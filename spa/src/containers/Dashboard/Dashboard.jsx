import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { CONSTANTS } from "../../config";
import "./Dashboard.scss";
import EditEvent from "../../components/EditEvent/EditEvent";
import EventCard from "../../components/EventCard/EventCard";
import EventDetails from "../../components/EventDetails/EventDetails";

export default function Dashboard() {
  const {
    user,
    setUser,
    authToken,
    setAuthToken,
    setRefreshToken,
  } = useContext(GlobalContext);

  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);
  const [detailedEvent, setDetailedEvent] = useState(null);

  // FUNCTIONS
  const logOut = () => {
    setAuthToken(null);
    setRefreshToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    localStorage.removeItem("expires");
  };

  const handleCreateEvent = () => {
    if (editEvent) {
      setEditEvent(null);
    } else {
      setEditEvent({});
    }
  };

  const handleDeleteEvent = (eventId) => {
    console.log("Event Deleted.");
  };

  const getEvents = () => {
    fetch(CONSTANTS.BASE_URL + `events?department=${user.name}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.log("Cant Get Events Error - ", err.message);
      });
  };

  //EFFECTS
  useEffect(() => {
    if (!authToken) return;
    getEvents();
  }, [authToken]);

  if (!user) {
    return null;
  }

  return (
    <div className="main dashboard">
      <div className="heading">
        <h1>{user?.name}</h1>
        <div className="user-actions">
          <button className="btn logout" onClick={logOut}>
            Logout
          </button>
          <img src={user?.image} alt="avatar" className="avatar" />
        </div>
      </div>
      <div className="container">
        <div className="ctrl">
          <button
            className={`btn ${editEvent ? "cancel" : "create"}`}
            onClick={handleCreateEvent}
          >
            {editEvent ? "Cancel" : "Create Event"}
          </button>
        </div>
        {editEvent ? (
          <EditEvent
            editEvent={editEvent}
            setEditEvent={setEditEvent}
            getEvents={getEvents}
          />
        ) : detailedEvent ? (
          <EventDetails
            event={detailedEvent}
            setDetailedEvent={setDetailedEvent}
            setEditEvent={setEditEvent}
            onDeleteEvent={handleDeleteEvent}
            getEvents={getEvents}
          />
        ) : (
          <div className="events">
            {events.length ? (
              events.map((event) => (
                <EventCard event={event} setDetailedEvent={setDetailedEvent} />
              ))
            ) : (
              <div className="empty">
                <p>You don't have any Events</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
