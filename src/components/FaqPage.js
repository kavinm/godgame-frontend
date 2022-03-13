import React from "react";
import "./FaqPage.css";
import FaqItems from "./FaqItems";

const FaqPage = () => {
  return (
    <div>
      <div className="the_container">
        <img
          src="/FAQ-Section-Background.png"
          alt="white background"
          style={{ width: "100%", zIndex: 2 }}
        />
        <div className="centered_FAQ">
          <h1 className="FAQ_title">FAQ</h1>
          <FaqItems
            title="When is the mint?"
            description="March 19th at 12pm EST"
          />
          <FaqItems
            title="What is the mint price per NFT?"
            description=".5 METIS"
          />
          <FaqItems
            title="Where can we view our nft?"
            description="tofunft. You can also read from our contracts in the Andromeda block explorer, to pull up your NFT with your token ID!"
          />
          <FaqItems
            title="How many tokens are generated?"
            description="2,222 on initial mint.
            &#13;&#10;
            8,888 purchasable with $FAITH generated by God Game NFTs"
          />
          <FaqItems
            title="When does staking unlock?"
            description="48 hours after selling out, staking will unlock"
          />
          <FaqItems
            title="What is the difference between a god and worshipper?"
            description="You have a 10% chance of minting a God and a 90% chance of minting a worshipper.

            Worshippers generate $FAITH tokens when staked in the temple, 20% of all $FAITH generated is shared among Gods.
            
            Gods can also steal newly minted worshippers!
            
            For specifics, read the whitepaper."
          />
        </div>
      </div>
      <div className="footer_div">
        <h1 className="footer_title">GOD GAME</h1>
        <div className="row">
          <div className="column" style={{ textAlign: "right" }}>
            <a href="https://discord.gg/YF4VWBjGNz">
              <img src="/dicscord-icon-purple.svg" alt="discord" />
            </a>
          </div>
          <div className="column">
            <a href="https://twitter.com/METIS_GodGame">
              <img src="/twitter-icon-blue.svg" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
