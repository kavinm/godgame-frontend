import React, { useEffect, useState } from "react";
import "./LandingComponent.css";

import god from "./utils/God.json";
const ethers = require("ethers");
const godAddress = "0x66A7De7572B70850BB6cC0a5DFf03dD3E93E1da6";
const { ethereum } = window;
const MINT_PRICE = 0.00001;

async function getMinted() {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const contract = new ethers.Contract(godAddress, god.abi, provider);
  return contract.minted();
}

async function mint(mintNum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(godAddress, god.abi, signer);

    const totalPrice = String(MINT_PRICE * mintNum);
    const ethersValue = { value: ethers.utils.parseEther(totalPrice) };

    const nftTxn = await connectedContract.mint(mintNum, false, ethersValue);

    await nftTxn.wait();
  }
}

const LandingComponent = (props) => {
  const [minted, setMinted] = useState(0);

  useEffect(() => {
    getMinted().then((res) => {
      console.log("res is " + res);
      setMinted(res);
    });
  }, []);

  const MintDetails = () => {
    console.log(props.isWalletConnected);
    return (
      <div class="flex-container">
        <div class="flex-child number_of_mints">{2222 - minted}/ 2222 left</div>
        <div class="flex-child green">
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
              <a className="connect_to_wallet" onClick={() => mint(1)}>
                {" "}
                Mint
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div class="the_container">
        <img
          src="./Hero_Background.png"
          alt="Background"
          style={{ width: "100%", zIndex: 2 }}
        />
        <div className="centered">
          <h1 className="main_title">GOD GAME</h1>
          <p className="subtitle">
            God Game is an orginal NFT project launching on <br />
            the METIS Blockchain. Minting Coming Soon
          </p>

          {props.isWalletConnected ? <MintDetails /> : <div></div>}
        </div>
        <img src="./God_on_Pillar.png" className="pillar" alt="Background" />
      </div>
    </div>
  );
};

export default LandingComponent;
