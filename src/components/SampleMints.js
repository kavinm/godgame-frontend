import React from "react";
import "./SampleMints.css";

const SampleMints = () => {
  return (
    <div class="the_container">
      <img
        src="/Blue Section background.png"
        alt="background"
        style={{ width: "100%", zIndex: 2 }}
      />
      <div className="centered_minted_from_heavens">
        <h1 className="collect_faith">MINTED FROM THE HEAVENS</h1>
        <div class="flex-container-mint">
          <div class="flex-child-about-mint steak_unsteak">
            <div className="white_card">
              <img
                src="/roadmap-greek-design.svg"
                className="g-pattern"
                alt="greed design G"
              />
              <div className="grey_box centered">
                <img src="/Purple God Wings 5.png" alt="background" />
              </div>
              <div className="card_text">
                <h2>GOD</h2>
                <h3>10% CHANCE OF MINTING</h3>
                <h4>Collects $FAITH as tribute from worshippers</h4>
              </div>
            </div>
          </div>
          <div class="flex-child-about steak_unsteak">
            <div className="white_card">
              <img
                src="/roadmap-greek-design.svg"
                className="g-pattern"
                alt="greed design G"
              />
              <div className="grey_box centered">
                <img src="/Human 5.png" alt="background" />
              </div>
              <div className="card_text">
                <h2>MORTAL</h2>
                <h3>90% CHANCE OF MINTING</h3>
                <h4>GENERATES $FAITH BY STAKING IN THE TEMPLE</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleMints;
