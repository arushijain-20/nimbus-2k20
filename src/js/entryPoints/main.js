import "bootstrap/dist/css/bootstrap.min.css";
import "../../sass/pages/main.scss";
import anime from "animejs";

// anime({
//   targets: ".theme-title .char",
//   // opacity: [0, 1],
//   translateY: [
//     { value: 0, duration: 200 },
//     { value: -10, duration: 200 },
//     { value: 10, duration: 200 },
//     { value: 0, duration: 200 }
//   ],
//   // duration: 2000,
//   easing: "easeOutCubic",
//   delay: anime.stagger(100, {}),
//   // endDelay: 4000,
//   loop: true
//   // direction: "alternate"
// });

anime({
  targets: ".theme-title .char",
  rotateY: [0, 360],
  delay: anime.stagger(100, { start: 1000 }),
  endDelay: 1000,
  loop: true
});

const TAU = Math.PI * 2;
const canvas = document.querySelector(".js-draw");
class Stage {
  constructor(canvas, width, height) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.width = width;
    this.height = height;

    this.options = {
      rotation: Math.atan2(width, height) + Math.PI / 2,
      backgroundColor: "#171715",
      lineColor: "#FDFFFC",
      pointColor1: "#41EAD4",
      pointColor2: "#F71735"
    };

    this.points = [];

    this.line = {
      from: { x: 0, y: height * 0.5 },
      to: { x: width, y: height * 0.5 }
    };

    this.animation = null;
  }

  get rotation() {
    return this.options.rotation;
  }

  get width() {
    return this.canvas.width;
  }

  get height() {
    return this.canvas.height;
  }

  get hypo() {
    return Math.hypot(this.width, this.height);
  }

  get widthHalf() {
    return this.width * 0.5;
  }

  get heightHalf() {
    return this.height * 0.5;
  }

  set width(w) {
    this.canvas.width = w;
  }

  set height(h) {
    this.canvas.height = h;
  }

  init() {
    this.generate();
    // this.animate
    // this.canvas.addEventListener('mousemove', e => this.onMouseMove(e));
    // this.canvas.addEventListener('mouseenter', e => this.onMoueEnter(e));
    // this.canvas.addEventListener('mouseleave', e => this.onMouseLeave(e));
  }

  generate() {
    this.points = new Array(100).fill().map((_, i) => {
      const r = this.heightHalf * 0.5 + Math.random() * (this.heightHalf / 2);
      const c =
        i % 2 === 0 ? this.options.pointColor1 : this.options.pointColor2;

      const point = {
        r,
        a: Math.random() * TAU,
        s: 0.0005 + Math.random() * 0.0008,
        c
      };

      return point;
    });
  }

  setSize(w, h) {
    this.width = w;
    this.height = h;
  }

  onMouseMove(e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    this.options.rotation = Math.atan2(this.heightHalf - y, this.widthHalf - x);
  }

  onMoueEnter() {
    if (this.animation) {
      this.animation.pause();
    }

    this.animation = null;
  }

  onMouseLeave() {
    this.animate();
  }

  animate() {
    const diff = -Math.PI + Math.random() * TAU;
    const angle = this.rotation + diff;

    this.animation = anime({
      targets: this.options,
      duration: 3000,
      delay: 500,
      rotation: angle,
      easing: "easeInOutSine",
      complete: () => {
        this.animate();
      }
    });
  }

  drawLine(from, to, color, width = 1) {
    this.ctx.strokeStyle = color;

    this.ctx.beginPath();
    this.ctx.lineWidth = width;
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawPoint(point) {
    const { from, to } = this.line;
    const wh = this.canvas.width * 0.5;
    const hh = this.canvas.height * 0.5;

    point.a += point.s;
    point.x = wh + Math.cos(point.a) * point.r;
    point.y = hh + Math.sin(point.a) * point.r;

    const denominator = Math.hypot(to.x - from.x, to.y - from.y);
    const numerator =
      (to.y - from.y) * point.x -
      (to.x - from.x) * point.y +
      to.x * from.y -
      to.y * from.x;
    const distance = numerator / denominator;

    const pointAngle = Math.atan2(to.y - from.y, to.x - from.x) + Math.PI / 2;
    const pointRadius = 0.5 + Math.abs(distance / this.heightHalf) * 3;
    const lineWidth = 0.5 + (Math.abs(distance / this.heightHalf) - 0.5);

    const toX = point.x + Math.cos(pointAngle) * distance;
    const toY = point.y + Math.sin(pointAngle) * distance;

    this.ctx.save();
    this.ctx.globalAlpha = point.o;
    this.drawLine(point, { x: toX, y: toY }, this.options.lineColor, lineWidth);
    this.ctx.restore();

    this.ctx.beginPath();
    this.ctx.fillStyle = point.c;
    this.ctx.arc(point.x, point.y, pointRadius, 0, TAU);
    this.ctx.fill();
    this.ctx.closePath();
  }

  updateSeparator() {
    this.line.from.x = this.widthHalf + Math.cos(this.rotation) * this.width;
    this.line.from.y = this.heightHalf + Math.sin(this.rotation) * this.width;
    this.line.to.x =
      this.widthHalf + Math.cos(this.rotation + Math.PI) * this.width;
    this.line.to.y =
      this.heightHalf + Math.sin(this.rotation + Math.PI) * this.width;
  }

  run() {
    this.ctx.globalCompositeOperation = "source-over";
    this.ctx.fillStyle = this.options.backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.updateSeparator();

    this.points.forEach((p, i) => this.drawPoint(p, i));

    this.ctx.save();
    this.ctx.translate(this.widthHalf, this.heightHalf);
    this.ctx.rotate(this.rotation);
    this.ctx.globalCompositeOperation = "difference";
    this.ctx.fillStyle = this.options.lineColor;
    this.ctx.fillRect(-this.hypo / 2, 0, this.hypo, this.hypo);
    this.ctx.restore();

    const circleRadius = 10;
    this.ctx.beginPath();
    this.ctx.fillStyle = "#fce9d5";
    this.ctx.arc(this.widthHalf, this.heightHalf, circleRadius, 0, TAU);
    this.ctx.fill();
    this.ctx.closePath();

    const circleRadiusInner = circleRadius * 0.5;
    this.ctx.beginPath();
    this.ctx.fillStyle = this.options.backgroundColor;
    this.ctx.arc(this.widthHalf, this.heightHalf, circleRadiusInner, 0, TAU);
    this.ctx.fill();
    this.ctx.closePath();

    requestAnimationFrame(() => this.run());
  }
}

const stage = new Stage(canvas, window.innerWidth, window.innerHeight);

stage.init();
stage.run();
setTimeout(() => stage.animate(), 3000);

window.addEventListener("resize", () => {
  stage.setSize(window.innerWidth, window.innerHeight);
  stage.generate();
});

// class Stage {
//   constructor(canvas, width, height) {
//     this.canvas = canvas;
//     this.ctx = this.canvas.getContext('2d');

//     this.width = width;
//     this.height = height;
//   }

//   get width() {
//     return this.canvas.width;
//   }

//   get height() {
//     return this.canvas.height;
//   }

//   get widthHalf() {
//     return this.width * 0.5;
//   }

//   get heightHalf() {
//     return this.height * 0.5;
//   }

//   set width(w) {
//     this.canvas.width = w;
//   }

//   set height(h) {
//     this.canvas.height = h;
//   }

//   clear(color = 'rgba(0, 0, 0, 0)') {
//     this.ctx.fillStyle = color;
//     this.ctx.fillRect(0, 0, this.width, this.height);
//   }
// }

// const randArrVal = arr =>  arr[Math.floor(Math.random() * arr.length)];

// const cols = 30;
// const rows = cols;

// const stageWidth = 500;
// const stageHeight = 500;

// const tileWidth = Math.ceil(stageWidth / cols);
// const tileHalfWidth = tileWidth * 0.5;

// const ghost = new Stage(document.querySelector('.js-ghost'), tileWidth, tileWidth);
// const stage = new Stage(document.querySelector('.js-draw'), stageWidth, stageHeight);

// let rotations = [];
// const color = '#000';

// let drawFunction;

// const clear = () => {
//   ghost.ctx.clearRect(0, 0, ghost.width, ghost.height);
//   stage.clear('#fff');
// };

// const reset = () => {
//   clear();

//   const drawFuntions = [drawArc, drawLine, drawTriangle, drawTriangleDouble];

//   drawFunction = randArrVal(drawFuntions);
//   rotations = new Array(rows * cols).fill().map(() => Math.floor(Math.random() * 4) * Math.PI / 2);
// };

// const drawArc = (ctx, percent) => {
//   const endAngle = (Math.PI / 2) * percent;

//   ctx.beginPath();
//   ctx.strokeStyle = color;
//   ctx.lineWidth = 2;
//   ctx.arc(0, 0, tileHalfWidth, 0, endAngle, false);
//   ctx.stroke();
//   ctx.closePath();

//   ctx.save();
//   ctx.translate(tileWidth, tileWidth);
//   ctx.rotate(Math.PI);
//   ctx.drawImage(ghost.canvas, 0, 0);
//   ctx.restore();
// };

// const drawLine = (ctx, percent) => {
//   const hypo = Math.hypot(ghost.width, ghost.height) * 1.2;
//   const radius = hypo * percent;
//   const a = Math.PI / 4;

//   ctx.lineWidth = 2;
//   ctx.strokeStyle = color;

//   ctx.beginPath();
//   ctx.lineCap = 'square';
//   ctx.moveTo(0, 0);
//   ctx.lineTo(Math.cos(a) * radius, Math.sin(a) * radius);
//   ctx.stroke();
//   ctx.closePath();
// };

// const drawTriangle = (ctx, percent) => {
//   ctx.fillStyle = color;

//   ctx.beginPath();
//   ctx.moveTo(0, 0);
//   ctx.lineTo(ghost.width * percent, 0);
//   ctx.lineTo(0, ghost.height * percent);
//   ctx.fill();
//   ctx.closePath();
// };

// const drawTriangleDouble = (ctx, percent) => {
//   percent *= 0.75;

//   drawTriangle(ctx, percent);

//   ctx.save();
//   ctx.translate(tileWidth, tileWidth);
//   ctx.rotate(Math.PI);
//   ctx.drawImage(ghost.canvas, 0, 0);
//   ctx.restore();
// };

// const draw = () => {
//   clear();

//   const { ctx: ctxGhost } = ghost;
//   const { percent } = animation;

//   drawFunction(ctxGhost, percent);

//   const { ctx } = stage;

//   let i = 0;

//   for (let row = 0; row < rows; row += 1) {
//     for (let col = 0; col < cols; col += 1) {
//       const x = tileHalfWidth + (col * tileWidth);
//       const y = tileHalfWidth + (row * tileWidth);
//       const rotation = rotations[i];

//       ctx.save();
//       ctx.translate(x, y);
//       ctx.rotate(rotation);
//       ctx.drawImage(ghost.canvas, -tileHalfWidth, -tileHalfWidth);
//       ctx.restore();

//       i++;
//     }
//   }
// };

// const animate = async () => {
//   await anime({
//     targets: animation,
//     percent: 1,

//     duration: 3000,
//     delay: animation.delay,
//     easing: 'easeOutBack',

//     begin: reset,
//     update: draw,
//   }).finished;

//   anime({
//     targets: animation,
//     percent: 0,

//     duration: 1500,
//     delay: 1500,
//     easing: 'easeInExpo',

//     update: draw,

//     complete: () => {
//       animation.delay = 1000;

//       animate();
//     },
//   });
// };

// const animation = { percent: 0, delay: 0 };

// reset();
// animate();
