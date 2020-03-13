// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import "@primer/css/dist/primer.css";
import "@primer/css/dist/primer.js";
import "../../sass/pages/events.scss";
import "./menu";

const anime = require("animejs/lib/anime.js");
import ScrollOut from "scroll-out";

var timeline = document.querySelector(".timeline");
var gradients = [
  "#ED4264",
  "#A6FFCB",
  "#FFEDBC",
  "#514A9D",
  "#1CD8D2",
  "#4776E6",
  "#FF8008",
  "#8E54E9",
  "#FFC837",
  "#1FA2FF"
];

var teams = {
  ".EXE": "#ED4264",
  Medextrous: "#A6FFCB",
  Hermetica: "#FFEDBC",
  Helix: "#514A9D",
  Ojas: "#1CD8D2",
  Designocrats: "#4776E6",
  Vibhav: "#FF8008",
  "Meta Morph": "#8E54E9",
  "C-Helix": "#FFC837"
};

var events = [
  {
    team: "C-Helix",
    type: "Institutional",
    name: "Clash Of Cranes",
    desc:
      "In this event we will design tower crane using popsicle sticks, cotton strings and a simple adhesive that can sustain the maximum possible load with optimum radius and self weight.",
    img: "https://drive.google.com/open?id=1hgOsjFL47Wg6JD8MZcnmq4rViNDu2rvH",
    venue: "Auditorium",
    date: "03/27/2020",
    time: "12:00"
  },
  {
    team: "Designocrats",
    type: "Institutional",
    name: "The Wall Art war",
    desc:
      "The participants would be registering online with their ideas and the those who will be shortlisted will be painting them on the walls. The entries would be excepted in three catagories- The murals, The graffiti, The Doodle.",
    img: "https://drive.google.com/open?id=1p9lD-SGba59R1xO56NnTVDA_EIh_dO-U",
    venue: "Auditorium",
    date: "03/27/2020",
    time: "12:00"
  },
  {
    team: "Hermetica",
    type: "Institutional",
    name: "Chem -e- Car",
    desc: "Chemical energy driven car",
    img: "https://drive.google.com/open?id=1nsG3LXBt0CwLNSlxz29T0XTAXcaa4nOf",
    venue: "Auditorium",
    date: "03/27/2020",
    time: "12:00"
  },
  {
    team: "Medextrous",
    type: "Institutional",
    name: "Robowars",
    desc:
      "Robowar is an event where participants present there bots in the arena and then we will have the fight in between two bots and whosoever bot wins the fight, wins the game.",
    img: "https://drive.google.com/open?id=1qy74a7M0nNcyhsBuiuIi1JbaxiL0b7RD",
    venue: "Auditorium",
    date: "03/27/2020",
    time: "12:00"
  },
  {
    team: "Meta Morph",
    type: "Institutional",
    name: "Foam Glider",
    desc:
      "A light engineless aircraft designed to glide after being towed aloft or launched from \na catapult. Each group (maximum 5, minimum 2) of participants will be provided with the same \nset of materials and design choice of glider will be totally of their liking, as long as it meets the \ncriteria of maximum and minimum wing span (50-60 cm) and fuselage (65-75% of wing span).",
    img: "https://drive.google.com/open?id=1ui7xk24IY2WMwqkMcRVxFWR1T28EGwh_",
    venue: "Auditorium",
    date: "03/28/2020",
    time: "12:00"
  },
  {
    team: "Ojas",
    type: "Institutional",
    name: "Water Boat Racing",
    desc:
      "The arena consists of certain check obstacles. The robots should be able to\nnavigate through the obstacles.\n? The arena will be tank having water.\n? A robot completes the task after having reached the finish line, to the other\nend the arena\nAbout the competition \nIn 1st round one boat is provided to the participant, he/she has to navigate the\nboat from Start position to the Finish position in limited time, the participants who\nwill reach to ending position in time will be qualified for the 2nd round. 4\nparticipants will be qualified for the next round based on their timings.\nIn second round we will group the qualified participants in 2 teams. Each\ngroup has two members. We will provide two boat to each group and the member\nof each group will compete with his/her own member. One who will reach to the\nfinishing point will be qualified for the final round.\nIn final round the winners of the 2 groups will compete with each other. In\nthis round one competitor will start from starting point and other will from\nfinishing point, the one who will reach opposite end first will be the winner.",
    img: "https://drive.google.com/open?id=15zn1NQhRmXOlAfzwBBB6GJc-OTQg_4Yj",
    venue: "Auditorium",
    date: "03/28/2020",
    time: "12:00"
  },
  {
    team: ".EXE",
    type: "Institutional",
    name: "NITH-CTF 1.0 (Capture The Flag)",
    desc:
      "This event will be an on-site event at the Computer Centre. The event aims at\nbolstering the Cybersecurity culture among the college students. The basic motive of this\nevent is to introduce the enthusiasts to the different areas of Cybersecurity and to\nencourage them to participate in CTFs happening in different parts of India and\nworldwide.\n",
    img: "https://drive.google.com/open?id=1iGN_-y3sWnwm-fhyO4YDe1cM2PR-G16S",
    venue: "Auditorium",
    date: "03/28/2020",
    time: "12:00"
  },
  {
    team: "Vibhav",
    type: "Institutional",
    name: "Fill in the Blocks",
    desc:
      'With the goal of promoting innovation and technical skills among the students, Team Vibhav is conducting a "Gripper Bot" event that will play a role in hindering creative minds. In this scenario, the team needs to build a manually controlled bot that can perform simple tasks of grasping blocks while overcoming various obstacles and completing the run in the minimum time possible.',
    img: "https://drive.google.com/open?id=1Dlz2W3WnhZyuBm8eShabbyS_oHk47IqZ",
    venue: "Auditorium",
    date: "03/29/2020",
    time: "12:00"
  }
];

// var events;
// fetch("/js/data/events.json")
//   .then(res => res.json())
//   .then(data => {
//     events = data;
//   });

// var exx = { ...ex, date: new Date("27 jan 2020 08:00") };

// Render Elements on Screen
// createEvent(exx);
// let totalDays = 3;
// for (let i = 0; i < totalDays; ++i) {
//   createDayHeader(i);
//   for (let j = 0; j < 1; ++j) {
//     createEvent(ex);
//   }
//   createBreak(ex);
// }

let i = 0;
let current_day = "";
for (let j = 0; j < events.length; ++j) {
  const ev = events[j];
  if (ev.date != current_day) {
    createDayHeader(++i);
    current_day = ev.date;
  }
  createEvent(ev, j % events.length);
}

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
  alt="${ev.team}"
  title="${ev.team}"
  src="./img/event.png"
    />
    `;

  TimelineItem_badge.innerHTML = `<div data-scroll class="box-shadow-large badge-but p-2 circle bg-gray-dark"></div>`;
  TimelineItem_badge.setAttribute("data-scroll", "");

  TimelineItem_body.innerHTML = `
  <div class="d-block box-shadow-medium px-4 pt-4 pb-6 position-relative overflow-hidden no-underline card" data-scroll href="#">
    <div class="banner text-white position-absolute top-0 left-0 px-1 height-full"></div>
    <div class="team text-white position-absolute top-0 left-0 width-full">${
      ev.team
    }</div>
    <h3 style="color:${teams[ev.team]}">${ev.name}</h3>
    <p>
        ${ev.desc}
    </p>
    <ul class="position-absolute bottom-0 pb-3 text-small list-style-none ">
      <li class="d-inline-flex flex-items-center  text-bold mr-1">
        <img width=20 class="mr-1" src="./img/clock.png">
        <!-- ${new Date(String(ev.date + " " + ev.time)).toDateString()} -->
        ${
          new Date(String(ev.date + " " + ev.time)).toTimeString().split(" ")[0]
        }
      </li>
      <li class="d-inline-flex flex-items-center text-bold ">
        <img width=18 class="mr-1" src="./img/loc.png">
        ${ev.venue}
      </li>
    </ul>
  </div>
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
          <a href="#" class="text-bold link-gray">Nimbus 2k20</a>
          <a href="#" class="link white">at NIT Hamirpur</a>
          <a href="#" class="text-bold link-gray">${26 + day} Mar 2020</a>
        </div>
      </div>
    </div>
  `;
  timeline.append(nextDay);
}

// Animations

ScrollOut({
  onShown: function(el) {
    if (el.classList.contains("card")) {
      anime({
        targets: el,
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100)
      });
    }
    if (el.classList.contains("TimelineItem-badge")) {
      anime({
        targets: el,
        translateY: [-70, 0],
        opacity: [0, 1],
        delay: anime.stagger(100)
      });
    }
    if (el.classList.contains("badge-but")) {
      anime({
        targets: el,
        translateY: [-40, 0],
        opacity: [0, 1],
        delay: anime.stagger(100)
      });
    }
    if (el.classList.contains("avatar")) {
      anime({
        targets: el,
        translateX: [-40, 0],
        opacity: [0, 1],
        delay: anime.stagger(100)
      });
    }
  }
});
