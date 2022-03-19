import React, { useEffect, useState } from "react";
import "./displayNFT.css";
import traits from "./utils/Traits.json";
import Slider from "react-input-slider";
import god from "./utils/God.json";
const ethers = require("ethers");

let contract;
const traitAddress = "0x8Fad2dD108e3dC171E8271CDF8B9EA768260Ea5f";
const godAddress = "0x66A7De7572B70850BB6cC0a5DFf03dD3E93E1da6";
const { ethereum } = window;

async function getMinted() {
  const provider = new ethers.providers.Web3Provider(ethereum);
  contract = new ethers.Contract(godAddress, god.abi, provider);
  return contract.minted();
  //return amount;
}

async function getSVG(num) {
  const provider = new ethers.providers.Web3Provider(ethereum);
  contract = new ethers.Contract(traitAddress, traits.abi, provider);
  return contract.drawSVG(num);
}
const DisplayNFT = () => {
  const [svgDrawn, setSVG] = useState({ svg: "" });
  useEffect(() => {
    getSVG().then((res) => {
      setSVG(getSVG(5));
    });
  });
  console.log("svg: ", getSVG(3));
  setSVG(5);
  console.log("draw: ", svgDrawn);
  //console.log(getMinted());
  return (
    <div>
      CHUNGUS
      <img src={svgDrawn} />
    </div>
  );

  const [viewNfts, setViewNfts] = useState(false);

  let [ownedSvgs, setOwnedSvgs] = useState([{ svg: "", token_id: 0 }]);

  const returnTokenSvgs = async () => {
    const tokenIds = [];
    const tokenSvgs = [];

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const connectedContract = new ethers.Contract(
        godAddress,
        god.abi,
        provider
      );

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      currentAccount = accounts[0];

      const ownedTokenAmount = await connectedContract.balanceOf(
        currentAccount
      );
      console.log(ownedTokenAmount);

      for (let i = 0; i < ownedTokenAmount; i += 1) {
        const tokenId = await connectedContract.tokenOfOwnerByIndex(
          currentAccount,
          i
        );
        tokenIds.push(tokenId);
        console.log(tokenId);
      }

      for (const tokenId of tokenIds) {
        const rawUri = await connectedContract.tokenURI(tokenId);

        const decodedUri = rawUri.split(",")[1];

        const encodedSvg = JSON.parse(atob(decodedUri))["image"];
        tokenSvgs.push({
          token_id: tokenId,
          svg: encodedSvg,
        });
      }
    }

    console.log(
      "This is the id: " +
        tokenSvgs[0].token_id +
        "and svg is: " +
        tokenSvgs[0].svg
    );
    return tokenSvgs;
  };

  return (
    <div>
      <button
        onClick={async () => {
          setViewNfts(true);
          const heldTokens = await returnTokenSvgs(currentAccount);
          setOwnedSvgs(heldTokens);
        }}>
        View
      </button>

      {ownedSvgs.map((token) => {
        return <img key={token.token_id} src={token.svg}></img>;
      })}
    </div>
  );

  //     {viewNfts && (<img src={ownedSvgs[8].svg}></img>)}
  //   </div>
  // );
};
export default DisplayNFT;
