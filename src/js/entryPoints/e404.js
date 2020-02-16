import "../../sass/pages/e404.scss";

import anime from "animejs";

anime({
  targets: ".e404",
  opacity: [0, 1],
  duration: 3000,
  easing: "easeOutQuad"
  //   loop: true,
  //   direction: "alternate"
});
anime({
  targets: ".desc",
  delay: 500,
  scale: [0.9, 1],
  opacity: [0, 1],
  duration: 3000,
  easing: "easeOutQuad"
});
