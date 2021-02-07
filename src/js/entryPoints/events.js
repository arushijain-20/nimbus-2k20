// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import "@primer/css/dist/primer.css";
import "@primer/css/dist/primer.js";
import "../../sass/pages/events.scss";
import "./menu";

import { CONSTANTS } from "../config";

const anime = require("animejs/lib/anime.js");
import ScrollOut from "scroll-out";

var timeline = document.querySelector(".timeline");
const START_DATE = 26; // Nimbus Start Date

var teams = {
  ".EXE": "#ED4264",
  Medextrous: "#A6FFCB",
  Hermetica: "#FFEDBC",
  Helix: "#514A9D",
  Ojas: "#1CD8D2",
  Designocrats: "#4776E6",
  Vibhav: "#FF8008",
  "Meta Morph": "#8E54E9",
  "C-Helix": "#FFC837",
};

let events = [];

fetch(`${CONSTANTS.BASE_URL}/events/`)
  .then((response) => response.json())
  .then((data) => {
    events = data;
    events.sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    );
    let i = 0;
    let current_day = "";
    for (let j = 0; j < events.length; ++j) {
      const ev = events[j];
      const ev_date = new Date(ev.start).getDate();
      if (ev_date != current_day) {
        createDayHeader(++i);
        current_day = ev_date;
      }
      createEvent(ev, j % events.length);
    }
  })
  .catch((err) => {
    console.log("Cant Fetch Events - ", err);
  });

// Scroll the live element into view
setTimeout(() => {
  var live = document.querySelector(".coming");
  if (live) {
    console.log(live);
    live.scrollIntoView();
  }
}, 2000);

// Generator Functions
function createEvent(ev, j) {
  let node = document.createElement("div");
  node.className = "ml-6 pl-3 node";

  let TimelineItem = document.createElement("div");
  TimelineItem.className = "TimelineItem";
  if (new Date(String(ev.date + " " + ev.time)) < new Date())
    TimelineItem.classList.add("past");
  else TimelineItem.classList.add("coming");

  let TimelineItem_avatar = document.createElement("div");
  TimelineItem_avatar.className = "TimelineItem-avatar";

  let TimelineItem_badge = document.createElement("div");
  TimelineItem_badge.className = "TimelineItem-badge";
  if (new Date(String(ev.date + " " + ev.time)) < new Date())
    TimelineItem_badge.classList.add("past");
  else TimelineItem_badge.classList.add("coming");

  let TimelineItem_body = document.createElement("div");
  TimelineItem_body.className = "TimelineItem-body";

  TimelineItem_avatar.innerHTML = `<img
  data-scroll
  class="avatar"
  height="40"
  width="40"
  alt="${ev.department}"
  title="${ev.department}"
  src="./img/event.png"
    />
    `;

  TimelineItem_badge.innerHTML = `<div data-scroll class="box-shadow-large badge-but p-2 circle bg-gray-dark"></div>`;
  TimelineItem_badge.setAttribute("data-scroll", "");

  TimelineItem_body.innerHTML = `
  <a href=/events/${
    ev.id
  }><div class="d-block box-shadow-medium px-4 pt-4 pb-6 position-relative overflow-hidden no-underline card" data-scroll href="#">
    <div class="banner text-white position-absolute top-0 left-0 px-1 height-full"></div>
    <div class="team text-white position-absolute top-0 left-0 width-full">${
      ev.department
    }</div>
    <h3 style="color:${teams[ev.department]}">${ev.name}</h3>
    <p>
        ${ev.info}
    </p>
    <ul class="position-absolute bottom-0 pb-3 text-small list-style-none ">
      <li class="d-inline-flex flex-items-center  text-bold mr-1">
        <img width=20 class="mr-1" src="./img/clock.png">
        ${new Date(ev.start).toLocaleString()}
      </li>
      <li class="d-inline-flex flex-items-center text-bold ">
        <img width=18 class="mr-1" src="./img/loc.png">
        ${ev.venue}
      </li>
    </ul>
  </div></a>
  `;

  TimelineItem.append(
    TimelineItem_avatar,
    TimelineItem_badge,
    TimelineItem_body
  );

  node.appendChild(TimelineItem);
  timeline.appendChild(node);
}

function createBreak(ev) {
  let br = document.createElement("div");
  br.className = "TimelineItem-break ml-0";
  if (new Date(String(ev.date + " " + ev.time)) > new Date())
    br.classList.add("past");
  // else br.classList.add("coming");
  timeline.append(br);
}

function createDayHeader(day) {
  let nextDay = document.createElement("div");
  nextDay.className = "ml-6 pl-3 node";
  nextDay.id = `day${day}`;
  nextDay.innerHTML = `
    <div class="TimelineItem">
      <div class="TimelineItem-avatar"></div>

        <div class="TimelineItem-badge">
          <!-- octicon("flame") -->
          <svg
            class="octicon octicon-flame"
            viewBox="0 0 12 16"
            version="1.1"
            width="12"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
            ></path>
          </svg>
        </div>

        <div class="TimelineItem-body">
          <a href="#" class="text-bold link-gray mr-1">Day ${day}</a>
          of the
          <a href="#" class="text-bold link-gray">Nimbus 2k21</a>
          <a href="#" class="link white">at NIT Hamirpur</a>
          <a href="#" class="text-bold link-gray">${
            START_DATE + day
          } Mar 2020</a>
        </div>
      </div>
    </div>
  `;
  timeline.append(nextDay);
}

// Animations

ScrollOut({
  onShown: function (el) {
    if (el.classList.contains("card")) {
      anime({
        targets: el,
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
      });
    }
    if (el.classList.contains("TimelineItem-badge")) {
      anime({
        targets: el,
        translateY: [-70, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
      });
    }
    if (el.classList.contains("badge-but")) {
      anime({
        targets: el,
        translateY: [-40, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
      });
    }
    if (el.classList.contains("avatar")) {
      anime({
        targets: el,
        translateX: [-40, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
      });
    }
  },
});
