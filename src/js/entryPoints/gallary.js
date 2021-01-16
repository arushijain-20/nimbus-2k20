import "../../sass/pages/gallary.scss";

let $gallery = document.querySelector(".gallery");

const colors = [
  "#ED4264",
  "#A6FFCB",
  "#FFEDBC",
  "#514A9D",
  "#1CD8D2",
  "#4776E6",
  "#FF8008",
  "#8E54E9",
  "#FFC837",
  "#1FA2FF",
];

// this code for creating and arranging hexagn
function createHex(side_len, image_index) {
  let hex = document.createElement("div");
  hex.className = "hex";
  hex.style.width = `${1.732 * side_len}px`;
  hex.style.height = `${2 * side_len}px`;
  hex.style.clipPath =
    "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";
  hex.style.backgroundImage = `url(./src/img/img${image_index}.jpeg)`;
  //   hex.style.backgroundColor = colors[image_index % colors.length];
  return hex;
}

function getPosArray() {
  let arr = [
    [
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 0, 0],
    ],
    [
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 0],
    ],
    [
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1],
      [0, 0, 1, 0, 1, 1, 0],
    ],
    [
      [0, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [1, 1, 1, 0, 0, 0, 0],
    ],
  ];
  return arr[Math.floor(Math.random() * arr.length)];
}

function arrangeHex(side_len) {
  let hex_width = 1.732 * side_len + 10;
  let hex_height = 2 * side_len - 40;
  let hex_count_x = 7; //Math.floor(screen.width/hex_width)
  let hex_count_y = 4; //Math.floor(screen.height/hex_height)
  let pos_array = getPosArray();
  let index = 0;
  for (let i = 0; i < hex_count_x; i++) {
    for (let j = 0; j < hex_count_y; j++) {
      let hex = createHex(side_len, index);
      hex.style.animationDelay = Math.random() * 3 + "s";
      if (j % 2 == 1) {
        hex.style.transform = `translateX(${
          i * hex_width + hex_width / 2
        }px) translateY(${j * hex_height}px)`;
      } else {
        hex.style.transform = `translateX(${i * hex_width}px) translateY(${
          j * hex_height
        }px)`;
      }
      if (pos_array[j][i] == 1) {
        $gallery.appendChild(hex);
        index += 1;
      }
    }
  }
}

shuffle();
setInterval(() => shuffle(), 10000);

function shuffle() {
  $gallery.innerHTML = "";
  arrangeHex(100);
  listners();
}

function listners() {
  document.querySelectorAll(".hex").forEach((hex) => {
    hex.addEventListener("mouseenter", () => {
      if (hex.style.transform.indexOf("scale") != -1) {
        hex.style.transform = hex.style.transform.replace(
          /scale\([+-]?([0-9]*[.])?[0-9]+\)/,
          "scale(1.1)"
        );
      } else {
        hex.style.transform += "scale(1.1)";
      }
    });
    hex.addEventListener("mouseleave", () => {
      if (hex.style.transform.indexOf("scale") != -1) {
        hex.style.transform = hex.style.transform.replace(
          /scale\([+-]?([0-9]*[.])?[0-9]+\)/,
          "scale(0.91)"
        );
      } else {
        hex.style.transform += "scale(0.91)";
      }
    });

    hex.addEventListener("mousedown", () => {
      if (hex.style.transform.indexOf("scale") != -1) {
        hex.style.transform = hex.style.transform.replace(
          /scale\([+-]?([0-9]*[.])?[0-9]+\)/,
          "scale(3)"
        );
      } else {
        hex.style.transform += "scale(3)";
      }
      hex.style.zIndex = 100;
      hex.style.clipPath = "";
    });
    hex.addEventListener("mouseup", () => {
      if (hex.style.transform.indexOf("scale") != -1) {
        hex.style.transform = hex.style.transform.replace(
          /scale\([+-]?([0-9]*[.])?[0-9]+\)/,
          "scale(0.91)"
        );
      } else {
        hex.style.transform += "scale(0.91)";
      }
      hex.style.zIndex = 1;
      hex.style.clipPath =
        "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";
    });
  });
}
