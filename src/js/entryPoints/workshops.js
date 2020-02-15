// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import "../../sass/pages/workshops.scss";
// import "../../sass/components/navbar.scss";

const anime = require("animejs/lib/anime");

var workshops_con = document.querySelector(".workshops");

var gradients = [
  {
    from: "#ED4264",
    to: "#FFEDBC"
  },
  {
    from: "#24C6DC",
    to: "#514A9D"
  },
  {
    from: "#1CD8D2",
    to: "#93EDC7"
  },
  {
    from: "#4776E6",
    to: "#8E54E9"
  },
  {
    from: "#FF8008",
    to: "#FFC837"
  },
  {
    from: "#1FA2FF",
    to: "#A6FFCB"
  }
];

var workshops = [
  {
    title: "Lorem, Ipsum",
    desc: "ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    venue: "Auditorium, NITH",
    date: "27-Mar-2020",
    img: "http://picsum.photos/200",
    link: "#"
  },
  {
    title: "Lorem, Ipsum",
    desc: "ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    venue: "Auditorium, NITH",
    date: "27-Mar-2020",
    img: "http://picsum.photos/204",
    link: "#"
  },
  {
    title: "Lorem, Ipsum",
    desc: "ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    venue: "Auditorium, NITH",
    date: "27-Mar-2020",
    img: "http://picsum.photos/201",
    link: "#"
  },
  {
    title: "Lorem, Ipsum",
    desc: "ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    venue: "Auditorium, NITH",
    date: "27-Mar-2020",
    img: "http://picsum.photos/202",
    link: "#"
  }
];

let n = gradients.length;

for (let i = 0; i < workshops.length; ++i) {
  let w = workshops[i];
  createWorkshop(w, i % n);
}

function createWorkshop(w, i) {
  let node = document.createElement("div");
  node.className = "card";
  node.innerHTML = `
    <div class="card-img">
      <img src="${w.img}" alt="" />
    </div>
    <div class="card-btn" style="background:linear-gradient(45deg,${gradients[i].from},${gradients[i].to})">Register</div>
    <div class="card-body">
      <div class="title">${w.title}</div>
      <div class="desc">${w.desc}</div>
      <div class="venue">${w.venue}</div>
      <div class="date">${w.date}</div>
    </div>
    <a href="${w.link}">
    <div class="link"><span>Event Information</span></div>
    </a>
  `;

  workshops_con.appendChild(node);
}

// animations
var t1 = anime.timeline();

t1.add({
  targets: ".heading h1",
  translateX: [-200, 0],
  opacity: [0, 1],
  easing: "easeOutCubic",
  endDelay: 500
});
t1.add({
  targets: ".card",
  translateY: [100, 0],
  // scale: [0.8, 1],
  duration: 200,
  easing: "easeOutQuad",
  opacity: [0, 1],
  delay: anime.stagger(150)
});

// navbar
$(document).ready(function() {
  var navIcon = $(".menu-toggle");
  // console.log(navIcon);
  var menu = $(".menu");
  var active = false;
  var navIcon = $(".menu-toggle");
  navIcon.click(function() {
    if (!active) {
      active = true;
      navIcon.addClass("menu-toggle-active");
      menu.addClass("menuActive");
    } else {
      active = false;
      navIcon.removeClass("menu-toggle-active");
      menu.removeClass("menuActive");
    }
  });
});
