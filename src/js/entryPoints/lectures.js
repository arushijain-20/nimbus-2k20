// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import "../../sass/pages/lectures.scss";
import "../../sass/components/navbar.scss";
import "./menu";

const anime = require("animejs/lib/anime");
import ScrollOut from "scroll-out";

import { CONSTANTS } from "../config";

var workshops_con = document.querySelector(".workshops");

var GRADIENTS = CONSTANTS.GRADIENTS;

var lectures = [
  {
    name: "Lorem, Ipsum",
    info: "ipsum dolor sit amet.",
    venue: "Auditorium, NITH",
    start: "27-Mar-2020",
    image: "http://picsum.photos/203",
    link: "#",
  },
];

let N = GRADIENTS.length;

fetch(`${CONSTANTS.BASE_URL}/events?type=talk`)
  .then((response) => response.json())
  .then((data) => {
    lectures = data;
    console.log("lectures", data);
    lectures.sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    );
    for (let i = 0; i < lectures.length; ++i) {
      let lecture = lectures[i];
      createLecture(lecture, i % N);
    }
    // animations
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
function createLecture(lecture, i) {
  let node = document.createElement("div");
  node.className = "card";
  node.innerHTML = `
  <a href="/events/${lecture.id}">
  <div class="card-img">
    <img src="${lecture.image ? lecture.image : ""}" alt="" />
  </div>
  <div class="card-body">
    <div
      class="bar"
      data-scroll
      style="background:${GRADIENTS[i].from};"
    ></div>
    <div class="title">${lecture.name}</div>
    <div class="desc">${lecture.info}</div>
    <div class="date">${lecture.start}</div>
  </div>
</a>
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
