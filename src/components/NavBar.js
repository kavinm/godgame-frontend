/* eslint-disable jsx-a11y/anchor-is-valid */
import { useToast, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {useHistory } from 'react-router-dom'
import "./NavBar.css";
import "./AboutComponent.js";
import { FaBalanceScaleRight, FaDiscord, FaTwitter } from "react-icons/fa";
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


const NavBar = (props) => {
  const toast = useToast();
  const { ethereum } = window;
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    if (accounts[0]) {
      toast({
        description: (
          <Text fontSize="xs" className="plex">
            Metamask is connected.
          </Text>
        ),
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setCurrentAccount(accounts[0]);
    }
    setIsWalletConnected(true);
    props.stateChanger(() => true);
  };
  const history = useHistory()
  const goBack = () => {
    history.push('/')
  }

  return (
    <div className="header">
      <div className="logo">
        <a className = "title" onClick={goBack}>GOD GAME</a>
      </div>
      <div>
        <ul>
          <div className="middleBar">

          <a href = "/faq">
              <button className = "button1">FAQ</button>
            </a>
            
            <a href = "/displaynft">
              <button className = "button2">View NFT</button>
            </a>

            <a href="https://medium.com/@metisgodgame">
              <button className="button3"> Whitepaper</button>
            </a>

            <a href="https://discord.gg/YF4VWBjGNz">
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
              <div className="layer2" onClick={() => connectWallet()}>
                {isWalletConnected ? (
                  <p>
                    {currentAccount.substring(0, 6) +
                      "..." +
                      currentAccount.substring(38, 42)}
                  </p>
                ) : (
                  <div>Connect Wallet</div>
                )}
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
