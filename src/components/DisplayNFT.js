import React, { useState } from "react";
import "./displayNFT.css";
import traits  from "./utils/Traits.json";
import Slider from 'react-input-slider';
import god from "./utils/God.json";
const ethers = require("ethers");


let contract;
const traitAddress = '0x8Fad2dD108e3dC171E8271CDF8B9EA768260Ea5f';
const godAddress = '0x66A7De7572B70850BB6cC0a5DFf03dD3E93E1da6';
const { ethereum } = window;
const [svgDrawn, setSVG] = useState("");

async function getMinted() {
    const provider = new ethers.providers.Web3Provider(ethereum);
    contract = new ethers.Contract(godAddress, god.abi, provider);
    return await contract.minted();

}

async function getSVG() {
    const provider = new ethers.providers.Web3Provider(ethereum);
    contract = new ethers.Contract(traitAddress, traits.abi, provider);
    return await contract.drawSVG(3);
}
const DisplayNFT = () =>{
    var tokenId;
    setState(getSVG());
    return (
        <div>
        <a> 
        </a>
        
      </div>

    
    );
}
export default DisplayNFT;