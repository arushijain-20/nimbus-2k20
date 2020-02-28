import "bootstrap/dist/css/bootstrap.min.css";
import "../../sass/pages/main.scss";
import anime from "animejs";
import "./menu";
import "./bg";

var blink = anime({
  targets: ".icon",
  easing: "easeOutCubic",
  keyframes: [
    { rotateX: 0, scaleX: 1 },
    { rotateX: 90, scaleX: 1.5 },
    { rotateX: 0, scaleX: 1 }
  ],
  duration: 500,
  delay: anime.stagger(2000, { start: 1000, from: "last" }),
  loop: true
});


anime({
  targets: ".theme-title .char",
  rotateY: [0, 360],
  delay: anime.stagger(100, { start: 1000 }),
  endDelay: 1000,
  loop: true
});

let k = 1;
let links = document.querySelectorAll(".links>a");
setInterval(() => {
  links[k].scrollIntoView();
  k++;
  k = k % links.length;
}, 3000);
