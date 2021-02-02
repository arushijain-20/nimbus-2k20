import React, { useEffect } from "react";
import "./Nav.scss";
import * as $ from "jquery";

export default function Nav() {
  useEffect(() => {
    var navIcon = $(".menu-toggle");
    // console.log(navIcon);
    var menu = $(".menu");
    var active = false;
    navIcon.click(function () {
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
  }, []);
  return (
    <div>
      <label className="menu-toggle" for="menu-toggle-input">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className="menu">
        <ol>
          <li className="menu-item">
            <a href="/">Home</a>
          </li>
          <li className="menu-item">
            <a href="/about">About</a>
          </li>
          <li className="menu-item" style={{ gridColumn: "span 2" }}>
            <a href="/events">Events</a>
            <ol className="sub-menu">
              <li className="menu-item">
                <a href="/workshops">Workshops</a>
              </li>
              <li className="menu-item">
                <a href="/mega_events">Mega Events</a>
              </li>
              <li className="menu-item">
                <a href="/lectures">Lectures</a>
              </li>
            </ol>
          </li>

          <li className="menu-item">
            <a href="/sponsors">Sponsors</a>
          </li>
          <li className="menu-item">
            <a href="/register">Register</a>
          </li>
          <li className="menu-item">
            <a href="/team">Team</a>
          </li>
          <li className="menu-item">
            <a href="/gallery">Gallery</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}
