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
        } else if (response.status == 403) {
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
        <button className="btn back lg" onClick={() => setDetailedEvent(null)}>
          &lt;
        </button>
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
      <pre className="event">{JSON.stringify(event, undefined, 2)}</pre>
    </div>
  );
}
