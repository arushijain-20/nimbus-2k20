// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import "../../sass/pages/mega_events.scss";
import "../../sass/components/navbar.scss";
import "./menu";

const anime = require("animejs/lib/anime");
import ScrollOut from "scroll-out";

import { CONSTANTS } from "../config";

var workshops_con = document.querySelector(".workshops");

let GRADIENTS = CONSTANTS.GRADIENTS;

var events = [
  {
    name: "Lorem, Ipsum",
    info: "ipsum dolor sit amet.",
    venue: "Auditorium, NITH",
    start: "27-Mar-2020",
    image: "http://picsum.photos/400/203",
    regURL: "#",
  },
];

let n = GRADIENTS.length;

fetch(`${CONSTANTS.BASE_URL}/events?type=institutional`)
  .then((response) => response.json())
  .then((data) => {
    events = data;
    console.log("events", data);
    events.sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    );
    for (let i = 0; i < events.length; ++i) {
      let event = events[i];
      createEvent(event, i % n);
    }
    anime({
      targets: ".card",
      translateY: [100, 0],
      // scale: [0.8, 1],
      duration: 200,
      easing: "easeOutQuad",
      opacity: [0, 1],
      delay: anime.stagger(150),
    });
  })
  .catch((err) => {
    console.log("Cant Fetch Events - ", err);
  });

// RENDER FUNCTION

function createEvent(event, i) {
  let node = document.createElement("div");
  node.className = "card";
  node.innerHTML = `
    <a href="/events/${event.id}">
      <div class="card-img">
         <img src="${event.image ? event.image : ""}" alt="" />
      </div>
    </a>
    <div class="card-con">
    <a href="${event.regURL}"><div class="register" style="background:${
    GRADIENTS[i].from
  };">Register</div></a>
      <div class="card-body">
        <div class="bar"  data-scroll style="background:${
          GRADIENTS[i].from
        };"></div>
        <div class="title">${event.name}</div>
        <div class="desc">${event.info}</div>
        <div>
          <div class="date">${new Date(event.start).toDateString()}</div>
          <div class="venue">${event.venue}</div>
        </div>
      </div> 
    </div>
  `;

  workshops_con.appendChild(node);
}

// animations

anime({
  targets: ".heading h1",
  translateX: [-200, 0],
  opacity: [0, 1],
  easing: "easeOutCubic",
  endDelay: 500,
});
