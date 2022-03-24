import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Marketplace.css";
import anthro from "./utils/Anthropolis.json";
const ethers = require("ethers");

let contract;

//STARDUST ADDRESS
const anthroAddress = "0x3042A2cd0A12108d73f6A42d3Bd77CDF4Fd2B21c";
const { ethereum } = window;
let currentAccount;
const CORRECT_CHAIN_ID = "0x440";


async function createItem (price, endTime, capped){
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(anthroAddress, anthro.abi, signer);
    const tx = await connectedContract.addRaffle(price, endTime, capped);
    await tx.wait();
}

const Marketplace = () => {
    const history = useHistory();
    const goBack = () => {
      history.push("/");
    };
  return (
    <div className= "bg">

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

      <a href="/createitem"> 
        <button className="create"> 
        Create Item
        </button>
      </a>
        
        <h1 className= "mheader">Welcome to the Anthropolis Marketplace !</h1>


        <div>
            
        </div>
    </div>
  );
};
export default Marketplace;
