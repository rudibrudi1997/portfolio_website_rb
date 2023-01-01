import React from "react";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "../../pictures/menu_1.png";
const MenuToggle = () => {
  let menu = document.querySelector("#menu-icon");
  let nb = document.querySelector(".navbar-links");

  menu.onclick = () => {
    nb.classList.toggle("active");
  };
};
const Nav = () => {
  return (
    <header className="navbar">
      <div className="brand_title">Rudolf Beck</div>
      <div id="#menu-icon" onKeyDown="MenuToggle()">
        <img src={Menu} />
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#techs">Tech-Stack</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#port">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
