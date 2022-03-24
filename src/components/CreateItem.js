import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import "./CreateItem.css";
import anthro from "./utils/Anthropolis.json";
const ethers = require("ethers");


//STARDUST ADDRESS
const anthroAddress = "0x3042A2cd0A12108d73f6A42d3Bd77CDF4Fd2B21c";
const { ethereum } = window;
let currentAccount;
const CORRECT_CHAIN_ID = "0x440";
let price;
let endTime;
let capped;


async function createRaffle (price, endTime, capped){
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(anthroAddress, anthro.abi, signer);
    const tx = await connectedContract.addRaffle(price, endTime, capped);
    await tx.wait();
}         

const CreateItem = () => {
    const [fileurl, setFile] = useState(null);
    const [Raffleinput, setRaffleInput]= useState({price: 0, capped: false});
    const [WLinput, setWLInput]= useState({amount: 0, price: 0});

    const history = useHistory();
    const goBack = () => {
      history.push("/marketplace");
    };
    const onChange = e => {
        console.log('picture: ', fileurl);
        setFile(...fileurl, e.target.files[0]);
    };

  return (
    <div className= "c">

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

        <h1 className= "formHeader">Create Whitelist or Raffle Item</h1>

        <div className="raffle">
            <br></br>
            <input 
                className="in-number"
                type="number"
                name="price"
                onChange = {e => setRaffleInput({...Raffleinput, price: e.target.value})}
            />
            <input 
                type="checkbox"
                name="capped"
                onChange = {e => setRaffleInput({...Raffleinput, capped: true })}
            />
            <input
                className="file-pic"
                type="file"
                name="Raffle Pic"
                onChange = {onChange}
            />
            <div>
            <br></br>
            <button className="submit" onClick={() => {createRaffle(); goBack()}}>
            Submit Raffle {goBack}
            </button>
            </div>
        </div>
        <div className="whitel">
        <br></br>
            <input 
                className="in-number"
                type="number"
                name="price"
                onChange = {e => setWLInput({...WLinput, amount: e.target.value})}
            />
            <input 
                className="in-number"
                type="number"
                name="capped"
                onChange = {e => setRaffleInput({...Raffleinput, price: e.target.value})}
            />
            <input
                className="file-pic"
                type="file"
                name="Whitelist Pic"
                onChange = {onChange}
            />
            <div>
                <br></br>
            <button className="submit" onClick={() => {createRaffle(); goBack()}}>
            Submit Raffle {goBack}
            </button>
            </div>
        </div>
        
        
    </div>
  );
};

export default CreateItem;
