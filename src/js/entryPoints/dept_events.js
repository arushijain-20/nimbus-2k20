import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../../sass/components/navbar.scss";
import "../../sass/pages/dept_events.scss";
import "./menu";

const anime = require("animejs/lib/anime");

$("[href='#exe']").click();

import * as eventData from '../data/events.json'
let events = eventData.default;

console.log(events);
