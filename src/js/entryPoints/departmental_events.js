import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
const anime = require("animejs/lib/anime");
import "../../sass/pages/departmental_events.scss";

const t1 = anime.timeline();

t1.add({
  targets: "*",
  translateY: [20, 0],
  opacity: [0, 1],
  duration: 700,
  delay: anime.stagger(100)
});

// t1.add({
//   targets: ".ev",
//   translateX: [-20, 0],
//   opacity: [0, 1],
//   delay: anime.stagger(100)
// });
