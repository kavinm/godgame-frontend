/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.css";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="header">
      <div className="logo">
        <a>GOD GAME</a>
      </div>
      <div>
        <ul>
          <div className="middleBar">
            <a className="middleMargins">About</a>
            <a className="middleMargins">Stake</a>
            <a className="middleMargins">Whitepaper</a>

            <a href="https://discord.gg/5nCzGqNKT9">
              <FaDiscord className="middleMargins" style={{ color: "white" }} />
            </a>

            <a href="https://twitter.com/METIS_GodGame">
              <FaTwitter className="middleMargins" style={{ color: "white" }} />
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
    </div>
  );
};

export default NavBar;
