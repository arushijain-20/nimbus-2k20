// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import "@primer/css/dist/primer.css";
import "@primer/css/dist/primer.js";
import "../../sass/pages/events.scss";
const anime = require("animejs/lib/anime.js");
import ScrollOut from "scroll-out";

var timeline = document.querySelector(".timeline");

var ex = {
  body: {
    head: "Event Heading",
    desc:
      "Event Description goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga quae expedita maxime aspernatur, harum voluptates tempore voluptatum praesentium molestiae illum, nesciunt saepe unde consequuntur blanditiis esse totam eligendi et?"
  },
  date: new Date("27 mar 2020 08:00"),
  venue: "Lecture Hall",
  team: {
    name: "Pixonoids"
  }
};
var exx = { ...ex, date: new Date("27 jan 2020 08:00") };

// Render Elements on Screen
// createEvent(exx);
let totalDays = 3;
for (let i = 0; i < totalDays; ++i) {
  createDayHeader(i);
  for (let j = 0; j < 5; ++j) {
    createEvent(ex);
  }
  createBreak(ex);
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
function createEvent(ev) {
  let node = document.createElement("div");
  node.className = "ml-6 pl-3 node";

  let TimelineItem = document.createElement("div");
  TimelineItem.className = "TimelineItem";
  if (ev.date < new Date()) TimelineItem.classList.add("past");
  else TimelineItem.classList.add("coming");

  let TimelineItem_avatar = document.createElement("div");
  TimelineItem_avatar.className = "TimelineItem-avatar";

  let TimelineItem_badge = document.createElement("div");
  TimelineItem_badge.className = "TimelineItem-badge";
  if (ev.date < new Date()) TimelineItem_badge.classList.add("past");
  else TimelineItem_badge.classList.add("coming");

  let TimelineItem_body = document.createElement("div");
  TimelineItem_body.className = "TimelineItem-body";

  TimelineItem_avatar.innerHTML = `<img
  data-scroll
  class="avatar"
  height="40"
  width="40"
  alt="${ev.team.name}"
  title="${ev.team.name}"
  src="./img/event.png"
    />
    `;

  TimelineItem_badge.innerHTML = `<div data-scroll class="box-shadow-large badge-but p-2 circle bg-gray-dark"></div>`;
  TimelineItem_badge.setAttribute("data-scroll", "");

  TimelineItem_body.innerHTML = `
  <div class="d-block box-shadow-medium px-3 pt-4 pb-6 position-relative rounded-1 overflow-hidden no-underline card" data-scroll href="#">
    <div class="bg-blue position-absolute top-0 left-0 py-1 width-full"></div>
    <h3 class="text-gray-dark">${ev.body.head}</h3>
    <p class="text-gray">
        ${ev.body.desc}
    </p>
    <ul class="position-absolute bottom-0 pb-3 text-small text-gray list-style-none ">
      <li class="d-inline-flex flex-items-center  text-bold mr-1">
        <img width=20 class="mr-1" src="./img/clock.png">
        <!-- ${ev.date.toDateString()} -->
        ${ev.date.toTimeString().split(" ")[0]}
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
  if (ev.date > new Date()) br.classList.add("past");
  // else br.classList.add("coming");
  timeline.append(br);
}

function createDayHeader(day) {
  let nextDay = document.createElement("div");
  nextDay.className = "ml-6 pl-3 node";
  nextDay.id = `day${day}`;
  nextDay.innerHTML = `
    <div class="TimelineItem ${day == 2 ? "past" : ""}">
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
          <a href="#" class="text-bold link-gray-dark mr-1">Day ${day}</a>
          of the
          <a href="#" class="text-bold link-gray-dark">Nimbus 2k20</a>
          <a href="#" class="link-gray">at NIT Hamirpur</a>
          <a href="#" class="text-bold link-gray-dark">${27 + day} Mar 2020</a>
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
