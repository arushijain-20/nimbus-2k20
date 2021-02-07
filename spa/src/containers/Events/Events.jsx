import React, { useEffect, useState } from "react";
import "../Main/Main.scss";
import "./Events.scss";
import { CONSTANTS } from "../../config";
import EventCard from "../../components/EventCard/EventCard";
import Nav from "../../components/Nav/Nav";
import Loader from "../../components/Loader/Loader";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [availableEvents, setAvailableEvents] = useState([]);
  const [finishedEvents, setFinishedEvents] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [typeFilter, setTypeFilter] = useState(null);

  const getAllEvents = async () => {
    try {
      let response = await fetch(CONSTANTS.BASE_URL + `events`);
      let data = await response.json();
      if ([200, 201].includes(response.status)) {
        console.log("Got Events.");
        data = data.sort(
          (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
        );
        setEvents(data);
        setDisplayedEvents(data);
      }
    } catch (err) {
      console.log("Cant Get Events - ", err.message);
    }
  };

  const filter = ({ type = undefined, text = undefined }) => {
    let _displayEvents = [];
    if (text !== undefined) {
      text = text.toLowerCase().trim();
      _displayEvents = events.filter(
        (ev) => ev.name.toLowerCase().indexOf(text) !== -1
      );
      setDisplayedEvents(_displayEvents);
    } else if (type !== undefined) {
      if (type === null) {
        _displayEvents = [...events];
      } else {
        _displayEvents = events.filter((ev) => ev.Type == type);
      }
      setDisplayedEvents(_displayEvents);
    }
  };

  //EFFECTS
  useEffect(() => {
    getAllEvents();
  }, []);

  useEffect(() => {
    let _availableEvents = displayedEvents.filter(
      (ev) => new Date(ev.end).getTime() >= new Date().getTime()
    );
    let _finishedEvents = displayedEvents.filter(
      (ev) => new Date(ev.end).getTime() < new Date().getTime()
    );
    setAvailableEvents(_availableEvents);
    setFinishedEvents(_finishedEvents);
  }, [displayedEvents]);

  useEffect(() => {
    if (typeFilter !== null) setTypeFilter(null);
    filter({ text: searchText });
  }, [searchText]);

  useEffect(() => {
    if (typeFilter === null) {
      return;
    }
    filter({ type: typeFilter });
  }, [typeFilter]);

  return (
    <div className="main events-page">
      <Nav />
      <div className="heading">
        <h1>Events</h1>
      </div>
      <div className="container">
        <div className="ctrl">
          <div className="search">
            <input
              type="search"
              placeholder="Search Event"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className="types">
            <div
              className="type"
              onClick={() => setTypeFilter((tf) => (tf === 0 ? null : 0))}
              dataValue="0"
              title="Departmental Events"
              style={{
                background:
                  typeFilter === null || typeFilter === 0 ? "#ff5722" : "#666",
              }}
            ></div>
            <div
              className="type"
              onClick={() => setTypeFilter((tf) => (tf === 1 ? null : 1))}
              dataValue="1"
              title="Institutional Events"
              style={{
                background:
                  typeFilter === null || typeFilter === 1 ? "#8bc34a" : "#666",
              }}
            ></div>
            <div
              className="type"
              onClick={() => setTypeFilter((tf) => (tf === 2 ? null : 2))}
              dataValue="2"
              title="Lectures"
              style={{
                background:
                  typeFilter === null || typeFilter === 2 ? "#00bcd4" : "#666",
              }}
            ></div>
            <div
              className="type"
              onClick={() => setTypeFilter((tf) => (tf === 4 ? null : 4))}
              dataValue="4"
              title="Workshops"
              style={{
                background:
                  typeFilter === null || typeFilter === 4 ? "#ffeb3b" : "#666",
              }}
            ></div>
          </div>
        </div>
        <div className="events">
          {availableEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              active={
                Math.abs(
                  new Date(event.start).getTime() - new Date().getTime()
                ) <
                5 * 24 * 60 * 60 * 1000 // PROXIMITY
              }
            />
          ))}

          {!displayedEvents.length ? <Loader /> : null}
        </div>
        <div className="events finished-events">
          {finishedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
