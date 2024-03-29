import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./displayNFT.css";
import traits from "./utils/Traits.json";
import Slider from "react-input-slider";
import god from "./utils/God.json";
const ethers = require("ethers");

let contract;
const traitAddress = "0x8Fad2dD108e3dC171E8271CDF8B9EA768260Ea5f";
const godAddress = "0xa43fA0eEB4c18fb863a6e916a1eF00c201ce16f7";
const { ethereum } = window;
let currentAccount;
var svgDrawn;
const CORRECT_CHAIN_ID = "0x440";

// async function getMinted() {
//   const provider = new ethers.providers.Web3Provider(ethereum);
//   contract = new ethers.Contract(godAddress, god.abi, provider);
//   return contract.minted();
//   //return amount;
// }

// async function getSVG(token) {
//   const provider = new ethers.providers.Web3Provider(ethereum);
//   contract = new ethers.Contract(traitAddress, traits.abi, provider);
//   svgDrawn = await contract.drawSVG(token);
// }
const DisplayNFT = () => {
  const [viewNfts, setViewNfts] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [isNFT, setNFT] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  let [ownedSvgs, setOwnedSvgs] = useState([{ svg: "", token_id: 0 }]);
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  

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
      if (ownedTokenAmount > 0){
          setNFT(true);
      }
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
  const history = useHistory();
  const goBack = () => {
    history.push("/");
  };

  return (
    <div className="pg">
      <button
        className="backB"
        backgroundColor="#0B3748"
        _hover={{
          backgroundColor: "#0e445a",
        }}
        _active={{
          backgroundColor: "#0B3748",
        }}
        fontWeight={400}
        minW="100px"
        mr="90px"
        onClick={goBack}>
        {"< Back"}
      </button>
      <button
        className="viewNFT"
        onClick={async () => {
          setViewNfts(true)
          setClicked(true)
          const heldTokens = await returnTokenSvgs(currentAccount);
          setIsWalletConnected(true);
          setOwnedSvgs(heldTokens);
        }}>
        View Your NFTs !
      </button>

      {ownedSvgs.map((token) => {
        return (<div className= "disp"><div className="tokenId">
       {isWalletConnected ? 
       (<a>Token ID: {ethers.BigNumber.from(token.token_id).toString()}</a> ) 
       :<> {isClicked ? <>{isNFT ?(<p>Loading...</p>):(<p>No NFTs to display!</p>) }</> : (<p>Double Check Network!</p>)
       }</>}
       </div> <img className= "yours" key={token.token_id} src={token.svg}></img>
       
        {console.log(token.token_id)}
        </div>
        
            );
      })}
      <img
        src="./Hero_Background.png"
        alt="Background"
        style={{ width: "100%", zIndex: 2 }}
      />
    </div>
  );
};
export default DisplayNFT;
