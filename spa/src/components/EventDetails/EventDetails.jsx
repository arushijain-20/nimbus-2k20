import React, { useContext, useState } from "react";
import { CONSTANTS } from "../../config";
import GlobalContext from "../../context/GlobalContext";
import "./EventDetails.scss";

export default function EventDetails({
  event,
  setDetailedEvent,
  setEditEvent,
  onDeleteEvent,
  getEvents,
  history,
}) {
  const { authToken } = useContext(GlobalContext) ?? {};

  const [error, setError] = useState();

  const handleDelete = async () => {
    setError(null);
    if (event.id) {
      try {
        let response = await fetch(CONSTANTS.BASE_URL + "events/" + event.id, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if ([200, 201, 204].includes(response.status)) {
          console.log("Deleted Event - ", response.status);
          setError({ detail: "Deleted Event Successfully." });
          getEvents();
        } else if (response.status === 403) {
          console.log("Cant Delete Event -", response.status);
          setError({ detail: "UnAuthorized Access." });
        } else {
          console.log("Cant Delete Event -", response.status);
          setError({ detail: "Cant Delete Event" });
        }
      } catch (err) {
        console.log("Failed to delete Event - ", err.message);
        setError({ detail: err.message });
      }
    }
  };

  return (
    <div className="event-details">
      <div className="ctrl">
        {history ? null : (
          <button
            className="btn back lg"
            onClick={() => setDetailedEvent(null)}
          >
            &lt;
          </button>
        )}
        {setEditEvent ? (
          <>
            <button className="btn blue" onClick={() => setEditEvent(event)}>
              edit
            </button>
            <button className="btn red" onClick={handleDelete}>
              delete
            </button>
          </>
        ) : null}
      </div>
      <div className="ctrl error">{error ? error.detail : null}</div>

      <div className="event-form">
        <div className="event-pic">
          {event.image ? <img src={event.image} alt="event"></img> : null}
        </div>
        <div className="event-data">
          <div className="event-name">{event.name}</div>
          <div className="meta">
            <div
              className="type"
              style={{
                color: ["#ff5722", "#8bc34a", "#00bcd4", "#514A9D", "#ffeb3b"][
                  event.Type
                ],
                background: [
                  "#ff572222",
                  "#8bc34a22",
                  "#00bcd422",
                  "#514A9D22",
                  "#ffeb3b22",
                ][event.Type],
              }}
            >
              {
                [
                  "Departmental Event",
                  "Institutional Event",
                  "Lecture",
                  "Exhibition",
                  "Workshop",
                ][event.Type]
              }
            </div>
            <div className="event-club">{event.department}</div>
          </div>
          <pre className="event-description">{event.info}</pre>

          <div className="abstract">
            <div className="btn">
              <a href={event.abstract}>Read More</a>
            </div>
          </div>

          <div className="other-data">
            <div className="event-venue">
              <p>{event.venue}</p>
            </div>
            <div className="event-timing">
              {event.start ? (
                <>
                  <div className="start">
                    <span className="date">
                      {new Date(event.start).toDateString()}
                    </span>
                    <span className="time">
                      {new Date(event.start).toLocaleTimeString()}
                    </span>
                  </div>
                  <span className="to"> - </span>
                  <div className="end">
                    <span className="date">
                      {new Date(event.end).toDateString()}
                    </span>
                    <span className="time">
                      {new Date(event.end).toLocaleTimeString()}
                    </span>
                  </div>
                </>
              ) : (
                <div className="start">Coming Soon</div>
              )}
            </div>
          </div>

          <div
            className="btn register"
            style={{
              background: [
                "#ff5722",
                "#8bc34a",
                "#00bcd4",
                "#514A9D",
                "#ffeb3b",
              ][event.Type],
            }}
          >
            <a href={event.regURL}>Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
