/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.css";
import "./AboutComponent.js";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import AboutComponent from "./AboutComponent.js";
import { Link } from "react-router-dom";

var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

function scrollFunction() {
  "html,body".animate(
    {
      scrollTop: "layer1".offset().top,
    },
    "slow"
  );
}

const NavBar = () => {
  return (
    <div className="header">
      <div className="logo">
        <a>GOD GAME</a>
      </div>
      <div>
        <ul>
          <div className="middleBar">
            <button className="button1">About</button>
            <button className="button2">Stake</button>

            <Link to="/whitepaper">
              <button className="button3">Whitepaper</button>
            </Link>

            <a href="https://discord.gg/5nCzGqNKT9">
              <FaDiscord className="discord" style={{ color: "white" }} />
            </a>

            <a href="https://twitter.com/METIS_GodGame">
              <FaTwitter className="twitter" style={{ color: "white" }} />
            </a>
          </div>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <div className="container_row">
              <div className="layer1">
                <svg
                  width="277"
                  height="45"
                  viewBox="0 0 277 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.5 6V0H262.5V6H270.5V16H277V29H270.5V39H262.5V45H15.5V39H8V28.5H0V15.5H8V6H15.5Z"
                    fill="#FFC545"
                  />
                </svg>
              </div>
              <div className="layer2">
                <a>Connect Wallet</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="about"></div>
    </div>
  );
};

export default NavBar;
