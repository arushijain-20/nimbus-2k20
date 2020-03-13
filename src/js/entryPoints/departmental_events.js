import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../../sass/components/navbar.scss";
import "../../sass/pages/departmental_events.scss";
import "./menu";

const anime = require("animejs/lib/anime");

$("[href='#exe']").click();

let events = [
  {
    team: "EXE",
    events: [
      {
        name: "EXE wala event",
        desc: `Description Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Doloribus, est!Description Lorem, ipsum
    dolor sit amet consectetur adipisicing elit. Doloribus, est!`,
        venue: "Auditorium",
        date: new Date("3/27/2020 12:00")
      }
    ]
  },
  {
    team: "Madextrous",
    events: [
      {
        name: "Madextrous wala event",
        desc: `Description Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Doloribus, est!Description Lorem, ipsum
    dolor sit amet consectetur adipisicing elit. Doloribus, est!`,
        venue: "Auditorium",
        date: new Date("3/27/2020 12:00")
      }
    ]
  },
  {
    team: "Hermetica",
    events: [
      {
        name: "Hermetica wala event",
        desc: `Description Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Doloribus, est!Description Lorem, ipsum
    dolor sit amet consectetur adipisicing elit. Doloribus, est!`,
        venue: "Auditorium",
        date: new Date("3/27/2020 12:00")
      }
    ]
  },
  {
    team: "C_Helix",
    events: [
      {
        name: "C_Helix wala event",
        desc: `Description Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Doloribus, est!Description Lorem, ipsum
    dolor sit amet consectetur adipisicing elit. Doloribus, est!`,
        venue: "Auditorium",
        date: new Date("3/27/2020 12:00")
      }
    ]
  },
  {
    team: "Ojas",
    events: [
      {
        name: "Ojas wala event",
        desc: `Description Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Doloribus, est!Description Lorem, ipsum
    dolor sit amet consectetur adipisicing elit. Doloribus, est!`,
        venue: "Auditorium",
        date: new Date("3/27/2020 12:00")
      }
    ]
  },
  {
    team: "Designocrats",
    events: [
      {
        name: "Designocrats wala event",
        desc: `Description Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Doloribus, est!Description Lorem, ipsum
    dolor sit amet consectetur adipisicing elit. Doloribus, est!`,
        venue: "Auditorium",
        date: new Date("3/27/2020 12:00")
      }
    ]
  },
  {
    team: "Vibhav",
    events: [
      {
        name: "Vibhav wala event",
        desc: `Description Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Doloribus, est!Description Lorem, ipsum
    dolor sit amet consectetur adipisicing elit. Doloribus, est!`,
        venue: "Auditorium",
        date: new Date("3/27/2020 12:00")
      }
    ]
  },
  {
    team: "Meta_Morph",
    events: [
      {
        name: "Meta_Morph wala event",
        desc: `Description Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Doloribus, est!Description Lorem, ipsum
    dolor sit amet consectetur adipisicing elit. Doloribus, est!`,
        venue: "Auditorium",
        date: new Date("3/27/2020 12:00")
      }
    ]
  }
];

renderEvents(events);

function createEvent(team) {
  let node = document.createElement("div");
  node.className = "tab-pane fade";
  node.id = team.team;
  let events = document.createElement("div");
  node.innerHTML += `
    <h3 class="club">${team.team}</h3>
    <div class="events">`;

  for (let ev of team.events) {
    node.innerHTML += `
      <div class="ev">
        <div class="name">${ev.name}</div>
        <div class="desc">
          ${ev.desc}
        </div>
        <div class="venue">${ev.venue}</div>
        <div class="date">${ev.date.toLocaleString()}</div>
      </div>
    `;
  }

  node.innerHTML += `</div>`;
  return node;
}

function renderEvents(events) {
  let tabs = document.querySelector(".tab-content");
  for (let team of events) {
    console.log(team);
    let ev = createEvent(team);
    console.log(ev);
    tabs.appendChild(ev);
  }
}
