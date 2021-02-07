import React, { useContext, useEffect, useState } from "react";
import "./EditEvent.scss";
import { CONSTANTS } from "../../config";
import GlobalContext from "../../context/GlobalContext";

export default function EditEvent({ editEvent, setEditEvent, getEvents }) {
  const [event, setEvent] = useState(editEvent);
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const { authToken } = useContext(GlobalContext);
  // FUCTIONS
  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setMsg(null);
    setLoading(true);
    if (!event.id) {
      // CREATE EVENT
      console.log("Creating Event - ", event);
      try {
        let formData = new FormData();
        for (const prop in event) {
          if (
            [
              "name",
              "id",
              "info",
              "venue",
              "start",
              "end",
              "regURL",
              "Type",
              "department",
            ].includes(prop)
          ) {
            formData.append(prop, event[prop]);
          }
        }
        let $image = document.querySelector("#image");
        let $abstract = document.querySelector("#abstract");

        if ($image.files[0]) {
          formData.append("image", $image.files[0]);
        }
        if ($abstract.files[0]) {
          formData.append("abstract", $abstract.files[0]);
        }

        let response = await fetch(CONSTANTS.BASE_URL + "events/", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          body: formData,
        });
        let data = await response.json();
        if ([200, 201].includes(response.status)) {
          setLoading(false);
          setMsg("success");
          getEvents();
          setTimeout(() => {
            setEditEvent(null);
          }, 1000);
        } else {
          setLoading(false);
          setMsg(JSON.stringify(data));
        }
        console.log("Created Event - ", data);
      } catch (err) {
        console.log("Error while Creating Event - ", err.message);
        setLoading(false);
        setMsg(err.message);
      }
    } else {
      // UPDATE EVENT
      console.log("Updating Event ", event);
      try {
        let formData = new FormData();
        for (const prop in event) {
          if (
            [
              "name",
              "id",
              "info",
              "venue",
              "start",
              "end",
              "regURL",
              "Type",
              "department",
            ].includes(prop)
          ) {
            formData.append(prop, event[prop]);
          }
        }
        let $image = document.querySelector("#image");
        let $abstract = document.querySelector("#abstract");

        if ($image.files[0]) {
          formData.append("image", $image.files[0]);
        }
        if ($abstract.files[0]) {
          formData.append("abstract", $abstract.files[0]);
        }

        let response = await fetch(CONSTANTS.BASE_URL + "events/" + event.id, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          body: formData,
        });
        let data = await response.json();
        if ([200, 201].includes(response.status)) {
          setLoading(false);
          setMsg("success");
          getEvents();
          setTimeout(() => {
            setEditEvent(null);
          }, 1000);
        } else {
          setLoading(false);
          setMsg(JSON.stringify(data));
        }
        console.log("Created Event - ", data);
      } catch (err) {
        console.log("Error while Creating Event - ", err.message);
        setLoading(false);
        setMsg(err.message);
      }
    }
  };

  // EFFECTS
  useEffect(() => {
    if (!editEvent.id) {
      setEvent({
        name: "",
        info: "",
        venue: "",
        start: "",
        end: "",
        regURL: "",
        Type: 0,
      });
    }
    console.log({ event });
  }, [editEvent]);

  if (!event) {
    return null;
  }

  return (
    <div className="edit-event">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Event Name * </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                value={event.name}
                onChange={handleChange}
                placeholder="Display Name of Event"
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="venue">Venue * </label>
              <input
                required
                type="text"
                name="venue"
                id="venue"
                value={event.venue}
                onChange={handleChange}
                placeholder="Online - Google Meet, ( meet link etc. if exists )"
                className="form-control"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="start">Start * </label>
              <input
                required
                type="datetime-local"
                name="start"
                id="start"
                value={event.start?.replace(/\+[0-9Z:]*/, "")}
                onChange={handleChange}
                placeholder=""
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="end">End * </label>
              <input
                required
                type="datetime-local"
                name="end"
                id="end"
                value={event.end?.replace(/\+[0-9Z:]*/, "")}
                onChange={handleChange}
                placeholder=""
                className="form-control"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="info">Description * </label>
              <textarea
                required
                type="text"
                name="info"
                id="info"
                value={event.info}
                onChange={handleChange}
                placeholder="Try to describe the key points of the event in first line, as only first line may be visible in some places on website. - Full detailed description can be provided seperately in the PDF."
                className="form-control"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="Type">Type * </label>
              {/* <input
                required
                type="text"
                name="type"
                id="type"
                value={event.type}
                onChange={handleChange}
                placeholder=""
                className="form-control"
                autoComplete="off"
              /> */}
              <select
                name="Type"
                id="Type"
                className="form-control"
                onChange={handleChange}
                value={event.Type}
              >
                <option value="0">Departmental Event</option>
                <option value="1">Institutional Event</option>
                <option value="2">Talk</option>
                {/* <option value="3">Exhibition</option> */}
                <option value="4">Workshop</option>
              </select>
              {/* <div className="help-text">
                Clubs will have Type - Departmental Event most of the time
              </div> */}
            </div>
            <div className="form-group">
              <label htmlFor="regURL">Registration Url *</label>
              <input
                required
                type="url"
                name="regURL"
                id="regURL"
                value={event.regURL}
                onChange={handleChange}
                placeholder="Google Form Registration URL"
                className="form-control"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="image">Image </label>
              <input
                // required
                type="file"
                name="image"
                id="image"
                accept="image/*"
                className="form-control"
              />
              <div className="help-text">
                Event Image / thumbnail [square fit]
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="abstract">Abstract</label>
              <input
                // required
                type="file"
                name="abstract"
                id="abstract"
                className="form-control"
                accept="image/*,.pdf"
                autoComplete="off"
              />
              <div className="help-text">
                pdf containing full details of the event
              </div>
            </div>
          </div>
          <div className="form-row ctrl">
            <button disabled={loading} className="btn green lg">
              {loading ? "Saving" : msg === "success" ? "Saved" : "Save"}
            </button>
          </div>
          <div className="form-row error">{msg ? msg : null}</div>
        </form>
      </div>
    </div>
  );
}
