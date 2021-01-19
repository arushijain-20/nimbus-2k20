import React, { useEffect, useState } from "react";
import "./EditEvent.scss";

export default function EditEvent({ editEvent }) {
  const [event, setEvent] = useState(editEvent);

  // FUCTIONS
  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  // EFFECTS
  useEffect(() => {
    if (!editEvent.id) {
      setEvent({
        name: "",
        info: "",
        venue: "",
        start: "",
        end: "",
        regUrl: "",
        type: 2,
      });
    }
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
                value={event.start}
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
                value={event.end}
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
                placeholder="Textual description of Event Which will be shown on website - Full detailed description can be provided seperately in the PDF"
                className="form-control"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="type">Type * </label>
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
                name="type"
                id="type"
                className="form-control"
                onChange={handleChange}
                value={event.type}
              >
                <option value="0">Mega Event</option>
                <option value="1">Institutional Event</option>
                <option value="2">Departmental Event</option>
                <option value="3">Lecture</option>
                <option value="4">Workshop</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regUrl">Registration Url *</label>
              <input
                required
                type="url"
                name="regUrl"
                id="regUrl"
                value={event.regUrl}
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
              <div className="help-text">Event Image / thumbnail</div>
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
                pdf containing all the full details of the event
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
