import React from "react";
import logo from "../images/logo.png";
//import Search from "./Search";

function Navbar() {
  return (
    <div className="Header">
      <div class="header container-fluid" id="navigasi">
        <nav class="navbar nav navbar-expand-lg ">
          <div class="container">
            <a href="#navigasi">
              <img src={logo} alt="logo" />
            </a>
            <div class="button btn-info">
              <button
                class="navbar-toggler dropdown-toggle bg-transparant border"
                type="button"
                value="menu"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse justify-content-end menu" id="navbarNav">
              <ul class="navbar-nav menu">
                <li class="menu_item">
                  <a href="#whyus">Why Us</a>
                </li>
                <li class="menu_item">
                  <a href="#testimonial">Testimonial</a>
                </li>
                <li class="menu_item">
                  <a href="#faq">FAQ</a>
                </li>
                <li class="menu_item">
                  <a href="#service">Our Services</a>
                </li>
              </ul>
              <button>Register</button>
            </div>
          </div>
        </nav>
      </div>
      {/* <Search /> */}
    </div>
  );
}

export default Navbar;
