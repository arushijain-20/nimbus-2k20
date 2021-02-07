// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import "../../sass/pages/workshops.scss";
// import "../../sass/components/navbar.scss";
import "./menu";

const anime = require("animejs/lib/anime");
import { CONSTANTS } from "../config";

var workshops_con = document.querySelector(".workshops");

var GRADIENTS = CONSTANTS.GRADIENTS;

var workshops = [
  {
    title: "Lorem, Ipsum",
    desc: "ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    venue: "Auditorium, NITH",
    date: "27-Mar-2020",
    img: "http://picsum.photos/200",
    link: "#",
  },
];

let N = GRADIENTS.length;

fetch(`${CONSTANTS.BASE_URL}/events?type=workshop`)
  .then((response) => response.json())
  .then((data) => {
    workshops = data;
    console.log("workshops", data);
    workshops.sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    );
    for (let i = 0; i < workshops.length; ++i) {
      let workshop = workshops[i];
      createWorkshop(workshop, i % N);
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

function createWorkshop(event, i) {
  let node = document.createElement("div");
  node.className = "card";
  node.innerHTML = `
  <a href="/events/${event.id}">
    <div class="card-img">
      <img src="${event.image ? event.image : ""}" alt="" />
    </div> 
    <a href="${event.regURL}">
     <div class="card-btn" style="background:${
       GRADIENTS[i].from
     }">Register</div>
    </a>
    <div class="card-body">
      <div class="title">${event.name}</div>
      <div class="desc">${event.info}</div>
      <div class="venue">${event.venue}</div>
      <div class="date">${event.start}</div>
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
